"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, X, ArrowUpRight, Image as ImageIcon } from "lucide-react";

type GalleryItem = { id: number; title: string; category: string; description: string; image: string; alt: string };

const galleryItems: GalleryItem[] = [
  { id: 1, title: "College Opening Ceremony", category: "Campus Events", description: "Guests and members of the college community gathered for a special college ceremony.", image: "/images/opening-ceremony.jpg", alt: "College guests and community members beneath a pink and white balloon arch." },
  { id: 2, title: "Graduation Ceremony", category: "Graduation", description: "LG-KOICA Hope TVET College graduates celebrating their academic achievements.", image: "/images/graduation-ceremony.jpg", alt: "Graduates wearing academic gowns at LG-KOICA Hope TVET College." },
  { id: 3, title: "Student Celebration", category: "Student Life", description: "Students sharing a memorable moment together at the college.", image: "/images/student-celebration.jpg", alt: "Students celebrating together in front of the college branded wall." },
  { id: 4, title: "College Community", category: "Campus Events", description: "Members of the college community celebrating together.", image: "/images/college-community.jpg", alt: "College community members posing together in front of the college wall." }
];
const categories = ["All", "Campus Events", "Graduation", "Student Life"];

export default function MediaGallery() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const filtered = category === "All" ? galleryItems : galleryItems.filter(item => item.category === category);

  return (
    <section id="media" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-rose-100/70 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#A50034]"><Camera size={15} />Life at LG-KOICA</span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Campus Vlog & <span className="text-[#A50034]">Media Gallery</span></h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">Explore our college memories, student achievements, graduation celebrations, and community events.</p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3" aria-label="Gallery categories">
          {categories.map(item => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full px-5 py-3 text-sm font-bold transition ${category === item ? "bg-[#A50034] text-white shadow-lg shadow-[#A50034]/20" : "border border-slate-200 bg-white text-slate-600 hover:border-[#A50034] hover:text-[#A50034]"}`}>{item}</button>)}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.article layout key={item.id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .95 }} transition={{ duration: .35, delay: index * .05 }} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                <button type="button" onClick={() => setSelected(item)} aria-label={`View ${item.title}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-200 text-left">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-bold text-white backdrop-blur"><ImageIcon size={14} />Photo Story</div>
                  <div className="absolute right-4 top-4 rounded-full bg-white p-2 text-[#A50034] opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={18} /></div>
                </button>
                <div className="p-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#A50034]">{item.category}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p>
                  <button type="button" onClick={() => setSelected(item)} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#A50034] hover:gap-3">View Photo <ArrowUpRight size={16} /></button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="mt-12 text-center text-sm text-slate-500">Celebrating education, achievement, and community at LG-KOICA Hope TVET College.</p>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={selected.title} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur" onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: .95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .95, y: 20 }} className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white" onClick={event => event.stopPropagation()}>
              <div className="relative aspect-[4/3] bg-slate-900 sm:aspect-video"><Image src={selected.image} alt={selected.alt} fill sizes="100vw" className="object-contain" priority /></div>
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div><p className="text-xs font-bold uppercase tracking-widest text-[#A50034]">{selected.category}</p><h3 className="mt-2 text-xl font-extrabold text-slate-900">{selected.title}</h3><p className="mt-2 text-sm text-slate-500">{selected.description}</p></div>
                <button type="button" onClick={() => setSelected(null)} aria-label="Close image viewer" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-800 hover:bg-[#A50034] hover:text-white"><X size={21} /></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
