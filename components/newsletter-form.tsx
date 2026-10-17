"use client";

import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
  }

  return (
    <>
      <form className="mx-auto flex max-w-[380px] border-b border-[#8e8b83]" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="email">Votre adresse e-mail</label>
        <input className="h-[43px] min-w-0 flex-1 border-0 bg-transparent text-[11px] outline-none placeholder:text-[#928f87] focus-visible:ring-2 focus-visible:ring-[#9b8352]" id="email" name="email" type="email" placeholder="Votre adresse e-mail" required />
        <button className="grid w-[43px] place-items-center transition-colors hover:text-[#867249]" type="submit" aria-label="S'inscrire"><ArrowRight size={19} /></button>
      </form>
      <small className="mt-3 block text-[8px] text-[#99968e]">En vous inscrivant, vous acceptez notre politique de confidentialité.</small>
    </>
  );
}
