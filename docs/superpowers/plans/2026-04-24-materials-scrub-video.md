# Materials Scroll-Scrub Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static `m1-materials.png` in the Materials section of magcompany.ca with a scroll-driven exploded-view video that morphs from a contained rounded box → fullscreen-pinned scrub → contained box again, per spec at `docs/superpowers/specs/2026-04-24-materials-scrub-video-design.md`.

**Architecture:** A single new client component `MaterialsScrubVideo.tsx` wraps a 400vh (300vh mobile) outer scroll runway. Inside, a pin target holds a "shell" div whose dimensions/border-radius/shadow morph during scroll, and a `<video>` whose `currentTime` is scrubbed by scroll progress. GSAP `ScrollTrigger` (already in `gsap@3.14.2`) drives all three phases on a single timeline. A `prefers-reduced-motion` branch falls back to a static `<img>` of the final frame.

**Tech Stack:** Next.js 16 (Turbopack) + React 19 + TypeScript (strict) + Tailwind v4 + GSAP 3.14.2 + ScrollTrigger plugin (bundled with gsap, separate import path).

**Testing approach:** This project has no JS test framework configured. The change is a single visual UI component with no unit-testable pure functions of meaningful value, and the spec's acceptance criteria are entirely visual. Verification for each task is done by running the Next.js dev server (`npm run dev`) and visually checking the behavior in a browser, per the system instruction "For UI or frontend changes, start the dev server and use the feature in a browser before reporting the task as complete." Browser verification steps are spelled out explicitly per task.

**Important Next.js note:** Per `AGENTS.md`, this is Next 16 with breaking changes. Client components still use the `'use client'` directive (verified in `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`). The existing `src/app/AutoplayVideo.tsx` is the canonical precedent in this codebase — match its style.

---

## File Structure

| File | Action | Responsibility |
|---|---|---|
| `public/m1-exploded.mp4` | Create | The scroll-scrubbed video (faststart-optimized H.264). |
| `public/m1-exploded-final.jpg` | Create | Final video frame, used by reduced-motion fallback. |
| `public/m1-materials.png` | Delete | Old static image — replaced. |
| `src/app/MaterialsScrubVideo.tsx` | Create | The scroll-scrub component. Owns the GSAP timeline, refs, reduced-motion detection, and rendering. |
| `src/app/page.tsx` | Modify (lines ~350–359) | Swap the `<Image src="/m1-materials.png" .../>` block for `<MaterialsScrubVideo />`. |

---

## Task 1: Prepare video assets

**Files:**
- Create: `public/m1-exploded.mp4`
- Create: `public/m1-exploded-final.jpg`
- Delete: `public/m1-materials.png`

- [ ] **Step 1: Verify ffmpeg is installed**

Run: `ffmpeg -version | head -1`
Expected: A version string starting with `ffmpeg version`. If missing, install with `brew install ffmpeg`.

- [ ] **Step 2: Re-encode the video with `+faststart` for instant seeking**

Run:
```bash
cd ~/themagcompany && ffmpeg -y -i ~/Downloads/FrontCover.mp4 -c:v copy -an -movflags +faststart public/m1-exploded.mp4
```

Expected output ends with something like `video:744kB audio:0kB ... muxing overhead`. The `-c:v copy` keeps the H.264 stream as-is (no re-compression artifacts), `-an` strips any audio, `-movflags +faststart` moves the moov atom to the file head so the browser can start seeking before the whole file downloads.

- [ ] **Step 3: Verify the moov atom is at the start**

Run:
```bash
cd ~/themagcompany && ffprobe -v error -show_entries format=size -of default=noprint_wrappers=1:nokey=1 public/m1-exploded.mp4 && head -c 64 public/m1-exploded.mp4 | strings | head -5
```

Expected: prints a size around `760000`, then on a separate line shows strings including `moov` near the file start (within the first ~32 bytes after `ftyp`). If `moov` only appears at the end, faststart didn't apply — re-run Step 2.

- [ ] **Step 4: Extract the final frame as a JPEG fallback image**

Run:
```bash
cd ~/themagcompany && ffmpeg -y -sseof -0.05 -i public/m1-exploded.mp4 -frames:v 1 -q:v 2 public/m1-exploded-final.jpg
```

Expected: Creates `public/m1-exploded-final.jpg` (~150–300 KB). The `-sseof -0.05` seeks 50 ms before the file's end, ensuring we land on the last frame (the labeled exploded view). `-q:v 2` is high JPEG quality.

- [ ] **Step 5: Visually confirm the JPEG**

Run: `open public/m1-exploded-final.jpg`
Expected: macOS Preview opens showing the fully exploded M1 with all callout labels visible (Clear Cover, Li-Ion Battery, Up/Down Button, MBack, Front, PCB, Magnet, Gasket, Back, Screws). If labels are missing, the seek landed on the wrong frame — increase to `-sseof -0.1` and re-run Step 4.

- [ ] **Step 6: Delete the old static image**

Run: `cd ~/themagcompany && git rm public/m1-materials.png`
Expected: `rm 'public/m1-materials.png'`. The file is gone from disk and staged for removal in git. (It remains recoverable from git history.)

- [ ] **Step 7: Stage the new assets and commit**

Run:
```bash
cd ~/themagcompany && git add public/m1-exploded.mp4 public/m1-exploded-final.jpg && git status --short
```
Expected: shows `A  public/m1-exploded.mp4`, `A  public/m1-exploded-final.jpg`, `D  public/m1-materials.png`.

Then:
```bash
cd ~/themagcompany && git commit -m "Add exploded-view video assets, remove old materials png"
```
Expected: a single commit with 3 files changed (1 deletion, 2 additions).

---

## Task 2: Create component skeleton with reduced-motion fallback wired into page

**Files:**
- Create: `src/app/MaterialsScrubVideo.tsx`
- Modify: `src/app/page.tsx` (lines 350–359, the materials image block)

- [ ] **Step 1: Create the component file with reduced-motion branch only**

Write this exact content to `src/app/MaterialsScrubVideo.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";

export default function MaterialsScrubVideo() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    setMounted(true);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Server-render the static fallback so there is no layout shift on first paint.
  // Once mounted on the client we may switch to the scroll-scrub branch.
  if (!mounted || reducedMotion) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/m1-exploded-final.jpg"
            alt="Maglight M1 exploded view: Clear Cover, Li-Ion Battery, Up/Down Button, MBack, Front, PCB, Magnet, Gasket, Back, Screws"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  // TODO: scroll-scrub branch (Tasks 3 & 4)
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)] bg-black" />
    </div>
  );
}
```

The plain `<img>` tag (rather than `next/image`) is intentional: the file is a single hero asset, served unmodified, and we want a tiny JS-free fallback path that does not depend on Next's image optimizer being available.

- [ ] **Step 2: Wire the component into page.tsx**

First confirm the block you are about to replace:

Run: `cd ~/themagcompany && sed -n '350,365p' src/app/page.tsx`

Expected: shows the `<div className="max-w-6xl mx-auto">…<Image src="/m1-materials.png" …/>…</div>` block, with the footer caption `<p className="mt-6 text-center text-xs text-white/40 font-medium italic">` inside the same wrapping div.

Now apply this single edit to `src/app/page.tsx`. Find:

```tsx
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)]">
              <Image
                src="/m1-materials.png"
                alt="Maglight M1 materials breakdown: PA12 Nylon casing, black oxide M3 screws, TPU gasket and buttons, polycarbonate window"
                fill
                sizes="(max-width: 1200px) 96vw, 1200px"
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-center text-xs text-white/40 font-medium italic">
              * Material spec reflects the base Kickstarter build. Stretch goals
              will upgrade select components.
            </p>
          </div>
```

Replace with:

```tsx
          <MaterialsScrubVideo />
          <p className="mt-6 text-center text-xs text-white/40 font-medium italic max-w-6xl mx-auto">
            * Material spec reflects the base Kickstarter build. Stretch goals
            will upgrade select components.
          </p>
```

The caption was previously inside the `max-w-6xl mx-auto` wrapper. We move that constraint onto the caption itself so it stays centered at the same width, while `MaterialsScrubVideo` becomes a sibling that owns its own width handling (resting branch wraps in `max-w-6xl mx-auto`; scroll branch uses a full-bleed 400vh runway).

- [ ] **Step 3: Add the import for `MaterialsScrubVideo` in page.tsx**

Find:
```tsx
import Image from "next/image";
import AutoplayVideo from "./AutoplayVideo";
```

Replace with:
```tsx
import Image from "next/image";
import AutoplayVideo from "./AutoplayVideo";
import MaterialsScrubVideo from "./MaterialsScrubVideo";
```

- [ ] **Step 4: Confirm `Image` is still used elsewhere in page.tsx**

Run: `cd ~/themagcompany && grep -n 'next/image\|<Image' src/app/page.tsx | head`
Expected: At least one remaining `<Image` usage (e.g., the hero image). If `<Image` count is zero after the change, also remove the `import Image from "next/image";` line. If at least one remains, leave the import untouched.

- [ ] **Step 5: Type-check the change**

Run: `cd ~/themagcompany && npx tsc --noEmit 2>&1 | head -30`
Expected: No errors. (Project uses TS strict mode.)

- [ ] **Step 6: Lint the change**

Run: `cd ~/themagcompany && npx eslint src/app/MaterialsScrubVideo.tsx src/app/page.tsx 2>&1 | head -30`
Expected: No errors. The `eslint-disable-next-line @next/next/no-img-element` comment in the component handles the expected lint warning about plain `<img>` use.

- [ ] **Step 7: Start dev server and verify in browser**

Run: `cd ~/themagcompany && npm run dev`
Expected: Server starts, prints a local URL (typically `http://localhost:3000`). Open the URL in a browser.

Scroll to the Materials section ("Built from the ground up."). Expected:
- Heading and subtitle appear unchanged.
- A black rounded box appears below the subtitle (this is the placeholder bg from the TODO branch).
- The footer caption "* Material spec…" appears below in the same position as before.
- Page below ("The Road Ahead") is reachable.
- No console errors.

If the section instead shows the static exploded image (the JPEG): you have `prefers-reduced-motion: reduce` enabled in your OS — toggle it off in System Settings → Accessibility → Display → Reduce Motion, refresh, and verify again.

Stop the dev server with Ctrl-C after verification.

- [ ] **Step 8: Commit**

Run:
```bash
cd ~/themagcompany && git add src/app/MaterialsScrubVideo.tsx src/app/page.tsx && git commit -m "Add MaterialsScrubVideo skeleton with reduced-motion fallback"
```

---

## Task 3: Render the resting-state video (no animation yet)

**Files:**
- Modify: `src/app/MaterialsScrubVideo.tsx`

- [ ] **Step 1: Add a `videoRef` and replace the placeholder with a real `<video>`**

Replace the entire `MaterialsScrubVideo.tsx` with:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function MaterialsScrubVideo() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    setMounted(true);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!mounted || reducedMotion) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/m1-exploded-final.jpg"
            alt="Maglight M1 exploded view: Clear Cover, Li-Ion Battery, Up/Down Button, MBack, Front, PCB, Magnet, Gasket, Back, Screws"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)]">
        <video
          ref={videoRef}
          src="/m1-exploded.mp4"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `cd ~/themagcompany && npx tsc --noEmit 2>&1 | head -10`
Expected: No errors.

- [ ] **Step 3: Verify in browser**

Run: `cd ~/themagcompany && npm run dev`
Open the local URL, scroll to the Materials section.

Expected:
- The rounded box now contains the **first frame** of the exploded-view video — the M1 in its closed state, with the small green LED visible inside the front window.
- No video controls visible.
- No autoplay (the video is paused at frame 0).
- DevTools Network tab shows `m1-exploded.mp4` was fetched (status 200 or 206) on page load.
- No console errors.

Stop dev server with Ctrl-C.

- [ ] **Step 4: Commit**

Run:
```bash
cd ~/themagcompany && git add src/app/MaterialsScrubVideo.tsx && git commit -m "Render resting-state video in MaterialsScrubVideo"
```

---

## Task 4: Wire up GSAP ScrollTrigger 3-phase animation

**Files:**
- Modify: `src/app/MaterialsScrubVideo.tsx`

- [ ] **Step 1: Confirm GSAP and ScrollTrigger are importable**

Run:
```bash
cd ~/themagcompany && node -e "const g = require('gsap'); const st = require('gsap/ScrollTrigger'); console.log('gsap:', !!g.gsap, 'ScrollTrigger:', !!st.ScrollTrigger);"
```
Expected: `gsap: true ScrollTrigger: true`. If either is `false` or the require throws, run `npm install gsap@^3.14.2` (no version bump expected — already in package.json).

- [ ] **Step 2: Replace `MaterialsScrubVideo.tsx` with the full scrub implementation**

Replace the entire file with:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MaterialsScrubVideo() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    setMounted(true);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!mounted || reducedMotion) return;
    if (!outerRef.current || !pinRef.current || !shellRef.current || !videoRef.current) return;

    const video = videoRef.current;
    const shell = shellRef.current;

    // Wait for the video metadata so we know its duration before scrubbing.
    const ready = (): Promise<void> =>
      new Promise((resolve) => {
        if (video.readyState >= 1 && video.duration > 0) {
          resolve();
        } else {
          video.addEventListener("loadedmetadata", () => resolve(), { once: true });
        }
      });

    let ctx: gsap.Context | null = null;

    ready().then(() => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: outerRef.current!,
            start: "top top",
            end: "bottom bottom",
            pin: pinRef.current!,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // PHASE 1 — Expand: 0 → 0.15
        tl.to(
          shell,
          {
            width: "100vw",
            height: "100vh",
            maxWidth: "100vw",
            borderRadius: 0,
            boxShadow: "0 0 0 0 rgba(0,0,0,0)",
            duration: 0.15,
            ease: "power2.inOut",
          },
          0,
        );

        // PHASE 2 — Scrub: 0.15 → 0.85 (a 0.7-second slot on a 1.0 timeline)
        tl.to(
          {},
          {
            duration: 0.7,
            ease: "none",
            onUpdate: function () {
              const localProgress = this.progress();
              if (video.duration > 0) {
                video.currentTime = localProgress * video.duration;
              }
            },
          },
          0.15,
        );

        // PHASE 3 — Shrink: 0.85 → 1.0 — reverse of expand
        tl.to(
          shell,
          {
            width: "100%",
            height: "auto",
            maxWidth: "72rem", // Tailwind max-w-6xl
            borderRadius: "2rem",
            boxShadow: "0 80px 160px -40px rgba(0,0,0,0.6)",
            duration: 0.15,
            ease: "power2.inOut",
          },
          0.85,
        );
      }, outerRef);
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, [mounted, reducedMotion]);

  if (!mounted || reducedMotion) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/m1-exploded-final.jpg"
            alt="Maglight M1 exploded view: Clear Cover, Li-Ion Battery, Up/Down Button, MBack, Front, PCB, Magnet, Gasket, Back, Screws"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <section ref={outerRef} className="relative" style={{ height: "400vh" }}>
      <div ref={pinRef} className="h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          ref={shellRef}
          className="relative aspect-video overflow-hidden bg-black"
          style={{
            width: "100%",
            maxWidth: "72rem",
            borderRadius: "2rem",
            boxShadow: "0 80px 160px -40px rgba(0,0,0,0.6)",
          }}
        >
          <video
            ref={videoRef}
            src="/m1-exploded.mp4"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
```

A few specifics worth understanding:

- The outer `<section>` is `400vh` tall — that is the scroll runway. ScrollTrigger pins the inner `pinRef` (a `100vh` div) for the entire runway, so the user sees a static viewport-sized container while they scroll three additional viewport heights.
- During Phase 1 (expand), GSAP morphs `shellRef` from the resting style to fullscreen. Because `pinRef` is centered with flex, growing the shell to `100vw × 100vh` makes it perfectly fill the viewport.
- During Phase 2 (scrub), an empty tween's `onUpdate` reads its own progress and writes `video.currentTime`. This is the standard GSAP pattern for driving non-tweenable properties.
- `gsap.context(..., outerRef)` scopes all triggers to the component subtree; `ctx.revert()` in cleanup kills triggers, removes the pin spacer, and reverts inline styles. This handles unmount and dev hot-reload correctly.

- [ ] **Step 3: Type-check**

Run: `cd ~/themagcompany && npx tsc --noEmit 2>&1 | head -20`
Expected: No errors.

- [ ] **Step 4: Verify in browser**

Run: `cd ~/themagcompany && npm run dev`
Open `http://localhost:3000` and scroll into the Materials section.

Expected sequence:
1. As you reach the section, the video container is in its rounded contained state showing the closed M1.
2. As you continue scrolling, the container smoothly grows to fill the entire viewport (corners flatten, shadow disappears).
3. Once fullscreen, continued scrolling drives the video frames — the M1 progressively explodes outward.
4. After the explosion completes (final labeled frame visible), continued scrolling shrinks the container back to the rounded contained box.
5. After the shrink completes, the page resumes normally to "The Road Ahead" with the contained box showing the final frame.

If the video doesn't scrub but the container still resizes: open DevTools Network and check that `m1-exploded.mp4` returned 200/206. If it returned 404, the asset wasn't added to `public/` (Task 1 Step 7). If it returned 200 but never fires `loadedmetadata`, check console for video errors.

If the layout jumps when the section enters/exits the pin: open DevTools and inspect — the pin spacer should match `400vh`. If it's missing, ScrollTrigger may not have initialized; check console for `gsap`/`ScrollTrigger` errors.

Stop dev server with Ctrl-C.

- [ ] **Step 5: Commit**

Run:
```bash
cd ~/themagcompany && git add src/app/MaterialsScrubVideo.tsx && git commit -m "Add 3-phase scroll-scrub animation to MaterialsScrubVideo"
```

---

## Task 5: Mobile runway sizing and frame-callback throttling

**Files:**
- Modify: `src/app/MaterialsScrubVideo.tsx`

- [ ] **Step 1: Add mobile detection and frame-callback throttling**

In `MaterialsScrubVideo.tsx`, replace the second `useEffect` (the one that initializes GSAP) and the outer `<section>` JSX with the following.

First, replace the outer section JSX. Find:
```tsx
    <section ref={outerRef} className="relative" style={{ height: "400vh" }}>
```

Replace with:
```tsx
    <section ref={outerRef} className="relative h-[300vh] md:h-[400vh]">
```

This uses Tailwind's responsive prefix to set `300vh` below `md` (768px) and `400vh` at `md` and above. The inline style is replaced because Tailwind's `h-[...]` utility supports responsive prefixes; an inline style cannot.

Next, replace the second `useEffect` body's PHASE 2 tween with a frame-callback-throttled version. Find:
```tsx
        // PHASE 2 — Scrub: 0.15 → 0.85 (a 0.7-second slot on a 1.0 timeline)
        tl.to(
          {},
          {
            duration: 0.7,
            ease: "none",
            onUpdate: function () {
              const localProgress = this.progress();
              if (video.duration > 0) {
                video.currentTime = localProgress * video.duration;
              }
            },
          },
          0.15,
        );
```

Replace with:
```tsx
        // PHASE 2 — Scrub: 0.15 → 0.85.
        // Where requestVideoFrameCallback is supported (Chrome/Edge/Safari 15.4+),
        // we throttle currentTime writes to actual video frame boundaries to avoid
        // sub-frame thrash during fast scrolls.
        type WithRVFC = HTMLVideoElement & {
          requestVideoFrameCallback?: (cb: () => void) => number;
        };
        const v = video as WithRVFC;
        const supportsRVFC = typeof v.requestVideoFrameCallback === "function";
        let pendingTime: number | null = null;
        let rvfcQueued = false;
        const flush = () => {
          rvfcQueued = false;
          if (pendingTime !== null) {
            video.currentTime = pendingTime;
            pendingTime = null;
          }
        };
        tl.to(
          {},
          {
            duration: 0.7,
            ease: "none",
            onUpdate: function () {
              const localProgress = this.progress();
              if (video.duration <= 0) return;
              const target = localProgress * video.duration;
              if (supportsRVFC) {
                pendingTime = target;
                if (!rvfcQueued) {
                  rvfcQueued = true;
                  v.requestVideoFrameCallback!(flush);
                }
              } else {
                video.currentTime = target;
              }
            },
          },
          0.15,
        );
```

- [ ] **Step 2: Type-check**

Run: `cd ~/themagcompany && npx tsc --noEmit 2>&1 | head -10`
Expected: No errors.

- [ ] **Step 3: Lint**

Run: `cd ~/themagcompany && npx eslint src/app/MaterialsScrubVideo.tsx 2>&1 | head -20`
Expected: No errors.

- [ ] **Step 4: Verify desktop behavior is unchanged**

Run: `cd ~/themagcompany && npm run dev`
Open `http://localhost:3000` at full width. Scroll the Materials section.

Expected: identical behavior to Task 4 verification (expand → scrub → shrink). The frame-callback throttle is invisible to the eye; it just makes scrubbing smoother under heavy scroll wheel input.

- [ ] **Step 5: Verify mobile-viewport behavior**

In the same dev session, open DevTools, switch to a mobile viewport preset (e.g., iPhone 13, 390×844). Reload the page and scroll into the Materials section.

Expected:
- Same expand → scrub → shrink sequence, but the runway feels shorter (3 viewport heights instead of 4).
- Video fills the viewport when fullscreen.
- No layout overflow.
- Touch/drag scrolling (simulated by clicking-and-dragging in DevTools) drives the scrub smoothly.

Stop dev server with Ctrl-C.

- [ ] **Step 6: Verify reduced-motion fallback**

Reopen System Settings → Accessibility → Display → Reduce Motion → ON. Restart `npm run dev`, refresh `http://localhost:3000`, scroll to the Materials section.

Expected:
- The container is the resting rounded box at `max-w-6xl`.
- Inside is the **static final frame JPEG** (the labeled exploded view), not the video.
- No 400vh scroll runway; the section takes only its natural height.
- DevTools Network tab does NOT show `m1-exploded.mp4` being fetched.

Turn Reduce Motion back OFF in System Settings, stop dev server.

- [ ] **Step 7: Commit**

Run:
```bash
cd ~/themagcompany && git add src/app/MaterialsScrubVideo.tsx && git commit -m "Mobile runway sizing and frame-callback throttling"
```

---

## Task 6: Production build and deploy

**Files:** none modified — verification and deploy only.

- [ ] **Step 1: Run lint across the project**

Run: `cd ~/themagcompany && npm run lint 2>&1 | tail -20`
Expected: No errors. Warnings about pre-existing code are OK; new errors in `MaterialsScrubVideo.tsx` or `page.tsx` are not.

- [ ] **Step 2: Run a production build**

Run: `cd ~/themagcompany && npm run build 2>&1 | tail -30`
Expected: Build completes successfully. Output ends with route table and a "Compiled successfully" or equivalent message. No errors. Warnings about bundle size are acceptable; the new GSAP ScrollTrigger import will add ~30 KB gzipped to the page bundle, expected.

- [ ] **Step 3: Push to GitHub**

Per the project memory, GitHub auth must be on the `Themagcomp` account before pushing. Verify and switch if needed:

Run: `gh auth status 2>&1 | head -10`

If the active account is NOT `Themagcomp`:
Run: `gh auth switch -u Themagcomp`
Expected: confirmation that the active account is now `Themagcomp`.

Then push:
Run: `cd ~/themagcompany && git push origin main`
Expected: commits from Tasks 1 through 5 (5 commits total) push to `origin/main` cleanly.

If you switched accounts, switch back to your default after pushing:
Run: `gh auth switch -u <your-default-account>` (only if you switched in the previous step).

- [ ] **Step 4: Deploy on the Pi**

The Pi is at `magcomp@10.0.0.180` (key auth already set up). Run:

```bash
ssh magcomp@10.0.0.180 'cd ~/themagcompany && git pull && npm install && npm run build && sudo systemctl restart magcompany'
```

Expected: pulls the new commits, runs build to completion, restarts the service. Output ends with the systemctl restart returning to the prompt with no error.

If `npm install` reports no changes (no new deps), that's expected — gsap was already installed.

- [ ] **Step 5: Verify the live site**

Run: `curl -sS -o /dev/null -w "HTTP %{http_code}\n" --max-time 15 https://magcompany.ca/`
Expected: `HTTP 200`.

Then open `https://magcompany.ca/` in a browser, scroll to the Materials section, and confirm the same expand → scrub → shrink behavior verified locally.

Also verify on a phone (or via a real device tab) that mobile behaves correctly.

- [ ] **Step 6: No final commit needed**

If everything works, the deploy is complete. If something is broken in production but fine locally, the most likely cause is asset paths (verify `m1-exploded.mp4` and `m1-exploded-final.jpg` were committed and present in `public/` on the Pi) or service caching (re-run `sudo systemctl restart magcompany` on the Pi).

---

## Self-Review Notes

Spec coverage check (each spec section → task):

- "Section structure unchanged" → Task 2 step 2 keeps heading and footer caption.
- "New asset `m1-exploded.mp4` with `+faststart`" → Task 1 steps 2–3.
- "New asset `m1-exploded-final.jpg`" → Task 1 step 4.
- "Delete `m1-materials.png`" → Task 1 step 6.
- "GSAP ScrollTrigger 3-phase timeline" → Task 4 step 2.
- "Scrub uses `requestVideoFrameCallback` where supported" → Task 5 step 1.
- "400vh desktop / 300vh mobile runway" → Task 5 step 1 (responsive Tailwind).
- "Reduced-motion fallback static image" → Task 2 step 1, verified Task 5 step 6.
- "`gsap.context()` cleanup on unmount" → Task 4 step 2.
- "`playsinline`, `muted`, `preload="auto"`, no controls" → Task 3 step 1, preserved through Task 5.
- "Acceptance criteria 1–6" → covered by Task 4 step 4 + Task 5 steps 4–6 + Task 6 step 5.

No placeholders. All file paths absolute. All commands include expected output.
