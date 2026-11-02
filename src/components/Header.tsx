"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  ["Home", "#home"],
  ["Departments", "#departments"],
  ["Statistics", "#statistics"],
  ["Testimonials", "#testimonials"],
  ["Vlog & News", "#media"],
  ["Contact", "#contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex min-w-0 items-center gap-3" aria-label="LG-KOICA Hope TVET College home">
          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white">
            <Image src="/images/lg-khtc-logo.jpg" alt="LG-KOICA Hope TVET College official logo" fill sizes="56px" className="object-contain" priority />
          </span>
          <span className="min-w-0">
            <span className="block text-lg font-black leading-tight tracking-tight text-slate-950">LG-KOICA</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500 sm:text-xs">Hope TVET College</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-[#A50034]">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/apply" className="inline-flex items-center gap-2 rounded-xl bg-[#A50034] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#A50034]/15 transition hover:-translate-y-0.5 hover:bg-[#850029]">
            Apply Now <ArrowUpRight size={17} />
          </Link>
        </div>

        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 lg:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 py-4 shadow-xl lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-rose-50 hover:text-[#A50034]">
                {label}
              </a>
            ))}
            <Link href="/apply" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-[#A50034] px-4 py-3 text-center text-sm font-bold text-white">
              Apply Now / ተመዝገብ
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
