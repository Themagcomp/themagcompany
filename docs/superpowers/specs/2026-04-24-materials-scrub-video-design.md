# Materials Section Scroll-Scrub Video — Design Spec

**Date:** 2026-04-24
**Section affected:** "Built from the ground up." (Materials section in `src/app/page.tsx`)
**Goal:** Replace the static `m1-materials.png` with a scroll-driven exploded-view video reveal in the style of Apple's product internals pages.

## User-Visible Behavior

When the visitor scrolls into the Materials section, the existing rounded image container morphs into a cinematic 3-phase scroll experience:

1. **Expand** — The container grows from its contained position (centered, `max-w-6xl`, `aspect-video`, `rounded-[2rem]`, drop shadow) outward to fill the entire viewport edge-to-edge. Border radius animates to 0; shadow fades out.
2. **Scrub** — While the container is fullscreen and pinned to the viewport, continued scrolling drives the video frame-by-frame, playing the exploded reveal of the M1 (closed unit → progressively explodes apart → final state with labeled callouts: Clear Cover, Li-Ion Battery, Up/Down Button, MBack, Front, PCB, Magnet, Gasket, Back, Screws).
3. **Shrink** — After the reveal completes, continued scrolling animates the container back to its original contained position, where the video sits frozen on the final exploded-with-labels frame.

After the scroll runway ends, the page resumes normally to the next section ("The Road Ahead"). The final frame of the video remains visible in the contained slot as the new permanent visual for the section.

## Section Structure (Unchanged)

- Eyebrow text: "MATERIALS"
- Heading: "Built from the ground up."
- Subtitle: "Every component chosen with intent. Resilient enough to take a beating, refined enough to disappear into your daily carry."
- **[Replaced visual — see below]**
- Footer caption: "* Material spec reflects the base Kickstarter build. Stretch goals will upgrade select components."

## Component & File Changes

### New file

- `src/app/MaterialsScrubVideo.tsx` — client component (`"use client"` directive) that owns the scroll-scrub logic and renders the video.

### Modified files

- `src/app/page.tsx` — replace the existing `<div className="max-w-6xl mx-auto">…<Image src="/m1-materials.png" .../></div>` block (currently around lines 350–359) with `<MaterialsScrubVideo />`. Heading block (lines 338–349) and footer caption (lines 360–363) untouched.

### New asset

- `public/m1-exploded.mp4` — sourced from `~/Downloads/FrontCover.mp4` (1920×1080, H.264, 30 fps, 4.166 s, 125 frames, ~744 KB). Re-encoded with `ffmpeg -movflags +faststart` so the `moov` atom is at the start of the file, enabling instant first-byte seeking. No audio track (already audio-less).
- `public/m1-exploded-final.jpg` — single JPEG of the final video frame (frame 124, 1920×1080) extracted via `ffmpeg`. Used by the reduced-motion fallback.

### Deleted asset

- `public/m1-materials.png` — no longer referenced. Recoverable from git history if ever needed.

## Implementation

### Library

GSAP 3.14.2 (already in `package.json`) plus its bundled `ScrollTrigger` plugin. No new dependencies. Imported as:

```ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

### Component layout

```
<section ref={outerSectionRef}> (outer wrapper, height = 400vh on desktop / 300vh on mobile)
  <div ref={pinTargetRef}> (full viewport height; this is what GSAP pins)
    <div ref={shellRef}> (the morphing shell — controls size/radius/shadow)
      <video ref={videoRef} muted playsinline preload="auto" src="/m1-exploded.mp4" />
    </div>
  </div>
</section>
```

The outer section provides the scroll runway (its height = total scroll distance allotted to the effect). GSAP ScrollTrigger pins `pinTargetRef` (sets it to `position: fixed` and inserts a pin spacer) for the duration of the runway. `shellRef` is the visual container whose dimensions, border-radius, and shadow opacity get animated. `videoRef` is the actual video being scrubbed. No CSS `position: sticky` is used — pinning is entirely ScrollTrigger-managed to keep the pinning behavior consistent with the timeline's lifecycle.

### Initial (resting) state

`shellRef` matches the current image container's resting style:

- `max-width: 72rem` (Tailwind `max-w-6xl`)
- `aspect-ratio: 16 / 9` (Tailwind `aspect-video`)
- `border-radius: 2rem`
- `box-shadow: 0 80px 160px -40px rgba(0,0,0,0.6)`
- Centered horizontally
- Video inside fills the shell (`object-fit: cover`)

### ScrollTrigger configuration

```ts
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: outerSectionRef.current,
    start: "top top",
    end: "bottom bottom",
    pin: pinTargetRef.current,
    scrub: 1,           // 1 second of smoothing between scroll position and animation
    anticipatePin: 1,
  },
});
```

Three sub-tweens on the timeline, each consuming a portion of the unit-progress 0 → 1:

| Phase | Timeline window | Animates |
|---|---|---|
| Expand | 0 → 0.15 | `shellRef`: max-width → 100vw, aspect-ratio → none (height → 100vh), border-radius → 0, shadow opacity → 0 |
| Scrub | 0.15 → 0.85 | `videoRef.currentTime` → interpolated 0 → 4.166 (driven by an onUpdate callback that reads progress) |
| Shrink | 0.85 → 1.0 | `shellRef`: reverse of Expand, ending at the original resting style |

### Video scrubbing technique

Since GSAP cannot directly tween a `MediaElement.currentTime`, we drive it manually inside the timeline's `onUpdate` for the scrub phase:

```ts
tl.to({}, {
  duration: 0.7, // 0.15 → 0.85 = 0.7 of the 1.0-unit timeline
  ease: "none",
  onUpdate: function () {
    const localProgress = this.progress(); // 0 → 1 within this tween
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = localProgress * videoRef.current.duration;
    }
  },
}, 0.15);
```

Where `requestVideoFrameCallback` is supported (Chrome/Edge/Safari 15.4+), we additionally use it to throttle redundant `currentTime` writes to actual frame boundaries, eliminating sub-frame thrash.

### Reduced-motion fallback

Inside a `useEffect`, check `window.matchMedia('(prefers-reduced-motion: reduce)').matches`. If true:

- Skip GSAP / ScrollTrigger initialization entirely
- Render a single `<img src="/m1-exploded-final.jpg" />` inside the resting-state shell
- The outer section collapses to natural height (no 400vh runway)
- The video file is not loaded

This keeps users with vestibular disorders (and anyone who has opted out of motion) on a fully accessible static experience while preserving the section's information content (the final frame includes all component labels).

### Cleanup & lifecycle

- All ScrollTriggers and the timeline are scoped inside `gsap.context(() => { … }, componentRef)`.
- The cleanup function returned from the main `useEffect` calls `ctx.revert()`, which kills all triggers, removes the pin spacer, and reverts inline styles. This ensures hot-reload during development does not leave orphaned triggers, and component unmount fully detaches.
- `ScrollTrigger.refresh()` is called on window resize (handled by ScrollTrigger's built-in resize listener; no manual wiring needed).

## Mobile Behavior

- Scroll runway is `300vh` on mobile (under `768px`) vs `400vh` on desktop, so the experience doesn't feel endless on phones.
- The same scrub mechanic runs — no autoplay-loop fallback, no separate frame-image sequence.
- Video element has `playsinline` so iOS doesn't open it in fullscreen, `muted` so it can be played/scrubbed without a user gesture, `preload="auto"` so frames are buffered before the user reaches the section.
- The 744 KB video size is acceptable on cellular for this kind of marquee experience.
- Touch momentum scrolling is handled natively by ScrollTrigger.

## Browser & Device Support

- **Desktop:** Chrome / Edge / Safari / Firefox — all current versions, fully supported.
- **iOS Safari:** 14+ (covers ~99% of in-use iPhones in 2026). Scrub works smoothly on iPhone 12 and newer; older devices may show very mild stutter that is acceptable for this kind of effect.
- **Android Chrome:** all current versions.
- **Reduced-motion users:** Static image fallback (full accessibility).

## Out of Scope

- Re-extracting per-component labels as JSX overlays (the labels baked into the video's final frame are the canonical labels — confirmed during brainstorming).
- Any visual changes to the heading, subtitle, or footer caption of the Materials section.
- Any other section of the page.
- A separate label-less re-export of the video.

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Video not yet loaded when user scrolls into section | `preload="auto"` + `+faststart` re-encode + `scrub: 1` smoothing means the timeline waits gracefully without snapping. |
| GSAP ScrollTrigger plugin not bundled | Verify import works; ScrollTrigger is part of the free `gsap` npm package, just a separate import path. |
| Hot-reload leaves orphaned ScrollTriggers in dev | `gsap.context()` + `ctx.revert()` in cleanup. |
| Pin spacer creates layout jump | `anticipatePin: 1` on ScrollTrigger; spacer is part of the natural document flow. |
| Mobile Safari stutters on very old devices (iPhone X and older) | Acceptable for a Kickstarter marketing page; majority of visitors on iPhone 12+. Reduced-motion fallback always available as escape valve. |

## Acceptance

The feature is complete when:

1. Scrolling into the Materials section on a desktop browser triggers the expand → scrub → shrink sequence as described.
2. Mobile (iPhone Safari) shows the same effect smoothly.
3. A user with `prefers-reduced-motion: reduce` set sees only the static final frame in the contained box, with no scroll runway and no video download.
4. The Materials section's heading and footer caption are visually unchanged.
5. After the runway ends, the page continues normally to the "The Road Ahead" section, with the final exploded frame visible in the original contained slot.
6. No console errors. No layout shift outside the intended scroll runway. No orphan triggers in dev hot-reload.
