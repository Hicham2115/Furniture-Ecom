"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSubscribed(true);
  }

  return (
    <>
      <form className="mx-auto flex max-w-[460px] border-b border-[#77736a]" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="email">Email address</label>
        <input className="h-[54px] min-w-0 flex-1 border-0 bg-transparent text-[13px] outline-none placeholder:text-[#928f87] focus-visible:outline-none focus-visible:ring-0" id="email" name="email" type="email" placeholder="Your email address" required onChange={() => setIsSubscribed(false)} />
        <button className="grid w-[54px] place-items-center transition-all hover:translate-x-1 hover:text-[#867249]" type="submit" aria-label="Subscribe"><ArrowRight size={20} /></button>
      </form>
      <small aria-live="polite" className="mt-4 flex min-h-4 items-center justify-center gap-1.5 text-[9px] text-[#89867d]">
        {isSubscribed ? <><Check size={12} /> You’re on the list. See you in your inbox.</> : "A thoughtful note, every so often. Unsubscribe whenever you like."}
      </small>
    </>
  );
}
