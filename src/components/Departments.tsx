"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Network, Code, Zap, Cpu, CircuitBoard, ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";

const departments = [
  {
    id: "ict",
    name: "Information and Communication Technology",
    short: "ICT",
    description: "Develop practical digital technology skills through hardware servicing, networking, and software development training.",
    icon: Monitor,
    color: "bg-blue-50 text-blue-700",
    programs: [{ name: "Hardware & Networking Service", icon: Network }, { name: "Software Development", icon: Code }],
    careers: ["IT Support Technician", "Network Technician", "Software Developer"]
  },
  {
    id: "electrical",
    name: "Electrical / Electronics Technology",
    short: "Electrical",
    description: "Build technical expertise in electrical systems, electronic equipment, installation, maintenance, and troubleshooting.",
    icon: Zap,
    color: "bg-rose-50 text-[#A50034]",
    programs: [{ name: "Electrical Technology", icon: CircuitBoard }, { name: "Electronics Technology", icon: Cpu }],
    careers: ["Electrical Technician", "Electronics Technician", "Maintenance Technician"]
  }
];

export default function Departments() {
  return (
    <section id="departments" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-rose-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#A50034]">Academic Programs</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Explore Our <span className="text-[#A50034]">Departments</span></h2>
          <p className="mt-5 leading-7 text-slate-600">Discover technical and professional training opportunities designed to develop practical skills and prepare learners for employment.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {departments.map((department, index) => {
            const Icon = department.icon;
            return (
              <motion.article key={department.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .15 }} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-rose-200 hover:shadow-xl sm:p-9">
                <div className="flex items-start justify-between gap-4"><div className={`rounded-2xl p-4 ${department.color}`}><Icon size={34} /></div><span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600">Level IV</span></div>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-widest text-[#A50034]">{department.short} Department</p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-slate-900">{department.name}</h3>
                <p className="mt-4 leading-7 text-slate-600">{department.description}</p>
                <div className="mt-7">
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-extrabold text-slate-900"><GraduationCap size={18} className="text-[#A50034]" />Training Programs</h4>
                  <div className="space-y-3">{department.programs.map(program => { const ProgramIcon = program.icon; return <div key={program.name} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"><ProgramIcon size={20} className="text-[#A50034]" /><span className="text-sm font-semibold text-slate-700">{program.name}</span></div>; })}</div>
                </div>
                <div className="mt-7">
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-extrabold text-slate-900"><BriefcaseBusiness size={18} className="text-[#A50034]" />Potential Career Paths</h4>
                  <ul className="space-y-2">{department.careers.map(career => <li key={career} className="flex items-center gap-2 text-sm text-slate-600"><span className="h-1.5 w-1.5 rounded-full bg-[#A50034]" />{career}</li>)}</ul>
                </div>
                <Link href={`/apply?department=${department.id}`} className="mt-9 flex w-full items-center justify-center gap-3 rounded-xl bg-[#A50034] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#850029]">Apply for {department.short}<ArrowRight size={18} /></Link>
              </motion.article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">Program duration, certification requirements, and current admission eligibility should be confirmed with the college admissions office.</p>
      </div>
    </section>
  );
}
