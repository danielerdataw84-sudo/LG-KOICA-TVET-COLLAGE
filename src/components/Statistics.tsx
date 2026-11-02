"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, GraduationCap, BriefcaseBusiness, TrendingUp } from "lucide-react";

type CounterProps = { value: number | null; suffix?: string };

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 65, damping: 20 });
  const rounded = useTransform(spring, latest => Math.round(latest).toLocaleString());

  useEffect(() => { if (inView && value !== null) motionValue.set(value); }, [inView, value, motionValue]);
  useEffect(() => rounded.on("change", latest => { if (ref.current) ref.current.textContent = latest; }), [rounded]);

  return <span ref={ref} className="tabular-nums">{value === null ? "—" : "0"}{value !== null ? suffix : ""}</span>;
}

const statistics = [
  { label: "Students Enrolled", value: null as number | null, suffix: "", icon: Users, description: "Total registered learners" },
  { label: "Qualified Instructors", value: null as number | null, suffix: "", icon: GraduationCap, description: "Teaching professionals" },
  { label: "Support & Administrative Staff", value: null as number | null, suffix: "", icon: BriefcaseBusiness, description: "College support personnel" },
  { label: "Graduation / Job Placement Rate", value: null as number | null, suffix: "%", icon: TrendingUp, description: "Verified institutional outcome" }
];

export default function Statistics() {
  return (
    <section id="statistics" className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#A50034]/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-rose-300">College at a Glance</span>
          <h2 className="mt-6 text-3xl font-black sm:text-4xl">Our Institutional <span className="text-[#E84B78]">Impact</span></h2>
          <p className="mt-5 leading-7 text-slate-300">Explore key indicators reflecting our students, instructors, college workforce, and graduate outcomes.</p>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => { const Icon = item.icon; return (
            <motion.div key={item.label} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition hover:border-rose-400/50 hover:bg-white/10">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-[#A50034]/20 text-rose-300"><Icon size={25} /></div>
              <div className="text-4xl font-black tracking-tight"><Counter value={item.value} suffix={item.suffix} /></div>
              <h3 className="mt-3 text-sm font-bold text-white">{item.label}</h3>
              <p className="mt-2 text-xs text-slate-400">{item.description}</p>
            </motion.div>
          ); })}
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">Institutional figures will be displayed after verification by the college administration.</p>
      </div>
    </section>
  );
}
