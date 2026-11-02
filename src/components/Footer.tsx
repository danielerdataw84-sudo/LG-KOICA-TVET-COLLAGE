import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowUpRight, GraduationCap } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" }, { name: "Departments", href: "#departments" },
  { name: "Statistics", href: "#statistics" }, { name: "Testimonials", href: "#testimonials" },
  { name: "Vlog & News", href: "#media" }, { name: "Contact", href: "#contact" }
];
const departments = ["Hardware & Networking Service", "Software Development", "Electrical Technology", "Electronics Technology"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#home" className="flex items-center gap-3">
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white p-1"><Image src="/images/lg-khtc-logo.jpg" alt="LG-KOICA Hope TVET College logo" fill sizes="64px" className="rounded-full object-contain" /></span>
              <span><span className="block text-lg font-black">LG-KOICA</span><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Hope TVET College</span></span>
            </Link>
            <p className="mt-6 text-sm leading-7 text-slate-400">A technical and professional education institution committed to developing practical skills, professional knowledge, and opportunities for learners.</p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-lg bg-white/10 p-3 transition hover:bg-[#A50034]"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-lg bg-white/10 p-3 transition hover:bg-[#A50034]"><Instagram size={18} /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-lg bg-white/10 p-3 transition hover:bg-[#A50034]"><Youtube size={18} /></a>
            </div>
          </div>

          <div><h3 className="mb-6 text-base font-extrabold">Quick Links</h3><ul className="space-y-4">{footerLinks.map(link => <li key={link.name}><a href={link.href} className="flex items-center gap-2 text-sm text-slate-400 transition hover:translate-x-1 hover:text-white"><ArrowUpRight size={14} className="text-[#E84B78]" />{link.name}</a></li>)}</ul></div>

          <div><h3 className="mb-6 text-base font-extrabold">Our Departments</h3><ul className="space-y-4">{departments.map(department => <li key={department} className="flex items-start gap-3 text-sm text-slate-400"><GraduationCap size={16} className="mt-0.5 shrink-0 text-[#E84B78]" />{department}</li>)}</ul></div>

          <div><h3 className="mb-6 text-base font-extrabold">Contact Information</h3><p className="mb-5 text-xs leading-6 text-slate-400">Contact the college administration for admission information, program details, and official inquiries.</p>
            <ul className="space-y-5">
              <li className="flex gap-3"><MapPin size={19} className="mt-1 shrink-0 text-[#E84B78]" /><span className="text-sm leading-6 text-slate-400">Official college address to be confirmed.</span></li>
              <li className="flex gap-3"><Phone size={19} className="shrink-0 text-[#E84B78]" /><span className="text-sm text-slate-400">Official phone number to be added.</span></li>
              <li className="flex gap-3"><Mail size={19} className="shrink-0 text-[#E84B78]" /><span className="break-all text-sm text-slate-400">Official email address to be added.</span></li>
            </ul>
            <a href="#apply" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#A50034] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#850029]">Admission Information <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8"><div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><p className="text-xs text-slate-500">© {new Date().getFullYear()} LG-KOICA Hope TVET College. All rights reserved.</p><p className="text-xs font-semibold text-slate-400">Building Skills. Creating Hope. Empowering Futures.</p></div></div>
      </div>
    </footer>
  );
}
