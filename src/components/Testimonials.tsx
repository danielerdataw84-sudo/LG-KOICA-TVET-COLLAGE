"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare, Send, Quote, CheckCircle2 } from "lucide-react";

type Review = { id: number; name: string; department: string; rating: number; comment: string };

const initialReviews: Review[] = [
  { id: 1, name: "Student Feedback", department: "ICT", rating: 5, comment: "Practical technical education and opportunities to develop professional skills." },
  { id: 2, name: "Student Feedback", department: "Electrical Technology", rating: 5, comment: "Learning technical skills is an important step toward building a professional career." }
];

export default function Testimonials() {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("ICT");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !comment.trim()) { setMessage("Please complete your name and feedback."); return; }
    if (comment.trim().length < 10) { setMessage("Please write at least 10 characters."); return; }
    setReviews(previous => [{ id: Date.now(), name: name.trim(), department, rating, comment: comment.trim() }, ...previous]);
    setName(""); setComment(""); setRating(5);
    setMessage("Thank you! Your feedback was added to this demonstration.");
  }

  const averageRating = reviews.length ? reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length : 0;

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-rose-50 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#A50034]">Student Experiences</span>
          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl">Testimonials & <span className="text-[#A50034]">Ratings</span></h2>
          <p className="mt-5 leading-7 text-slate-600">Share your experience and help us continue improving technical and professional education.</p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_.85fr]">
          <div>
            <div className="mb-7 rounded-2xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-semibold text-slate-300">Average demonstration rating</p>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-5xl font-black">{averageRating.toFixed(1)}</span>
                <div><div className="flex gap-1 text-amber-400">{[1,2,3,4,5].map(star => <Star key={star} size={17} fill={star <= Math.round(averageRating) ? "currentColor" : "none"} />)}</div><p className="mt-1 text-xs text-slate-400">{reviews.length} demonstration entries</p></div>
              </div>
            </div>
            <div className="space-y-5">
              {reviews.map(review => <motion.article layout key={review.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Quote size={25} className="text-rose-200" />
                <div className="mt-3 flex gap-1 text-amber-400">{[1,2,3,4,5].map(star => <Star key={star} size={15} fill={star <= review.rating ? "currentColor" : "none"} />)}</div>
                <p className="mt-4 leading-7 text-slate-600">"{review.comment}"</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4"><div><h3 className="text-sm font-extrabold text-slate-900">{review.name}</h3><p className="mt-1 text-xs text-slate-500">{review.department}</p></div><span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-[#A50034]">Feedback</span></div>
              </motion.article>)}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="mb-7"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#A50034] text-white"><MessageSquare size={24} /></div><h3 className="text-2xl font-black text-slate-900">Share Your Experience</h3><p className="mt-2 text-sm leading-6 text-slate-500">We value your feedback. Tell us about your college experience.</p></div>
            <form onSubmit={submitReview} className="space-y-5">
              <div><label htmlFor="review-name" className="mb-2 block text-sm font-bold text-slate-700">Your Name</label><input id="review-name" type="text" required maxLength={80} value={name} onChange={event => setName(event.target.value)} placeholder="Enter your name" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#A50034] focus:ring-2 focus:ring-[#A50034]/10" /></div>
              <div><label htmlFor="review-department" className="mb-2 block text-sm font-bold text-slate-700">Department</label><select id="review-department" value={department} onChange={event => setDepartment(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#A50034]"><option value="ICT">ICT</option><option value="Electrical Technology">Electrical Technology</option><option value="Electronics Technology">Electronics Technology</option><option value="Other">Other</option></select></div>
              <fieldset><legend className="mb-3 text-sm font-bold text-slate-700">Your Rating</legend><div className="flex gap-2">{[1,2,3,4,5].map(star => <button key={star} type="button" onClick={() => setRating(star)} aria-label={`Rate ${star} out of 5`} aria-pressed={rating === star} className="rounded-lg p-1 transition hover:scale-110"><Star size={30} fill={star <= rating ? "#F59E0B" : "none"} className={star <= rating ? "text-amber-500" : "text-slate-300"} /></button>)}</div></fieldset>
              <div><label htmlFor="review-comment" className="mb-2 block text-sm font-bold text-slate-700">Your Feedback</label><textarea id="review-comment" required minLength={10} maxLength={1000} rows={5} value={comment} onChange={event => setComment(event.target.value)} placeholder="Write your experience..." className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#A50034] focus:ring-2 focus:ring-[#A50034]/10" /></div>
              {message && <p role="status" className="rounded-lg bg-rose-50 p-3 text-sm text-[#A50034]">{message}</p>}
              <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#A50034] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-[#A50034]/20 transition hover:bg-[#850029]">Submit Feedback <Send size={17} /></button>
              <p className="flex items-center gap-2 text-xs leading-5 text-slate-500"><CheckCircle2 size={15} className="shrink-0" />Demonstration only: reviews are not yet stored in a permanent database or moderated.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
