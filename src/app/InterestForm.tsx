"use client";

import { useEffect, useRef, useState } from "react";

const GOOGLE_FORM_ID = "1FAIpQLSciqNDkVKgLijFYdFycWHQVesFW1Cs-YE-O1CoH_SqgeDZyOA";
const GOOGLE_FORM_EMAIL_ENTRY = "entry.215125089";
const STORAGE_KEY = "maglight:interest:email";

type State = "idle" | "submitting" | "done";

export default function InterestForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [savedEmail, setSavedEmail] = useState<string | null>(null);
  const submittedRef = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setSavedEmail(stored);
  }, []);

  const handleSubmit = () => {
    submittedRef.current = true;
    setState("submitting");
  };

  const handleIframeLoad = () => {
    if (submittedRef.current) {
      submittedRef.current = false;
      const submitted = email.trim();
      localStorage.setItem(STORAGE_KEY, submitted);
      setSavedEmail(submitted);
      setState("done");
    }
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSavedEmail(null);
    setEmail("");
    setState("idle");
  };

  if (savedEmail) {
    return (
      <div className="mx-auto max-w-md flex flex-col items-center gap-3">
        <div className="w-full py-4 px-6 rounded-2xl bg-primary-container/10 border border-primary/15 text-center">
          <p className="text-primary font-semibold mb-1">
            You&apos;re on the list.
          </p>
          <p className="text-sm text-on-surface-variant">
            We&apos;ll notify{" "}
            <span className="font-semibold text-on-surface">{savedEmail}</span>{" "}
            when the M1 launches.
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="text-xs font-medium text-on-surface-variant/60 hover:text-on-surface transition-colors underline-offset-4 hover:underline"
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <>
      <form
        action={`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`}
        method="POST"
        target="interest_iframe"
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col sm:flex-row gap-3 max-w-md"
      >
        <input
          type="email"
          name={GOOGLE_FORM_EMAIL_ENTRY}
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="flex-1 px-5 py-3 rounded-full bg-[#f5f5f7] text-on-surface placeholder:text-on-surface-variant/50 border border-black/5 focus:outline-none focus:border-primary/40 transition-colors"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="bg-primary-container text-on-primary px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-all whitespace-nowrap disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Notify me"}
        </button>
      </form>
      <iframe
        name="interest_iframe"
        title="hidden form target"
        onLoad={handleIframeLoad}
        style={{ display: "none" }}
      />
    </>
  );
}
