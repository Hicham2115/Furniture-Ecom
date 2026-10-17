"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Option = { label: string; value: string };

type CustomSelectProps = {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export function CustomSelect({ label, value, options, onChange }: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className="relative" ref={rootRef}>
      <span className="mb-1 block text-[9px] font-medium uppercase tracking-[.1em] text-[#77746c]">
        {label}
      </span>
      <button
        type="button"
        className="flex min-w-[170px] items-center justify-between gap-5 rounded-full border border-line bg-[#fbf9f8] px-4 py-2.5 text-left text-[11px] text-ink transition-colors hover:border-[#a99a75] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b8352]"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {selected?.label ?? "Choose an option"}
        <ChevronDown size={14} className={`shrink-0 text-[#77746c] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute right-0 top-[calc(100%+7px)] z-30 min-w-full overflow-hidden rounded-xl border border-line bg-[#fbf9f8] p-1.5 shadow-[0_12px_32px_rgba(36,35,31,.12)]"
          role="listbox"
          aria-label={label}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={value === option.value}
              className={`block w-full whitespace-nowrap rounded-lg px-3 py-2.5 text-left text-[11px] transition-colors hover:bg-[#eeece6] focus-visible:bg-[#eeece6] focus-visible:outline-none ${value === option.value ? "font-medium text-[#8a7854]" : "text-ink"}`}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
