"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Monitor, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image src="/images/graduation-ceremony.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />
      </div>

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-rose-200 backdrop-blur">
            <GraduationCap size={15} /> Technical & Professional Education
          </span>
          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Skills for today. <span className="text-rose-300">Hope for tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Welcome to LG-KOICA Hope TVET College. Explore practical learning pathways in information technology, electrical and electronics technology, and professional skills.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/apply" className="inline-flex items-center gap-3 rounded-xl bg-[#A50034] px-7 py-4 text-sm font-extrabold text-white transition hover:bg-[#850029]">
              Apply for Admission <ArrowRight size={18} />
            </Link>
            <a href="#departments" className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
              Explore Departments
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-7 border-t border-white/15 pt-7">
            <div className="flex items-center gap-3"><Monitor className="text-rose-300" /><span className="text-sm font-semibold">ICT Programs</span></div>
            <div className="flex items-center gap-3"><Zap className="text-rose-300" /><span className="text-sm font-semibold">Electrical Technology</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#A50034]/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
              <Image src="/images/opening-ceremony.jpg" alt="College community gathered at an LG-KOICA Hope TVET College event" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" />
            </div>
            <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
              <div><p className="text-xs font-bold uppercase tracking-widest text-rose-200">Our Community</p><p className="mt-1 text-lg font-extrabold">Learning. Achievement. Opportunity.</p></div>
              <div className="rounded-xl bg-white/15 p-3"><GraduationCap size={25} /></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
