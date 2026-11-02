import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import Statistics from "@/components/Statistics";
import MediaGallery from "@/components/MediaGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Departments />
        <Statistics />
        <MediaGallery />
        <Testimonials />
        <section id="apply" className="bg-[#A50034] px-4 py-16 text-center text-white sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-black sm:text-4xl">Start Your Future Today</h2>
            <p className="mt-5 leading-7 text-white/85">Take the next step toward technical and professional education at LG-KOICA Hope TVET College.</p>
            <Link href="/apply" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#A50034] transition hover:-translate-y-1 hover:bg-slate-100">Begin Your Application <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
