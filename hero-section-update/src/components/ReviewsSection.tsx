import React from "react";
import { Quote, MessageSquare, Star } from "lucide-react";
import { reviews } from "../data";

export const ReviewsSection: React.FC = () => {
  return (
    <section id="opinie-sekcja" className="relative bg-[#fafaf9] py-20 md:py-32 overflow-hidden border-b border-stone-200 z-10">
      {/* Subtle red spotlight glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[300px] bg-red-100/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 text-red-600 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>Głos Naszych Gości</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Wasze Opinie
          </h2>
          <div className="w-24 h-[1px] bg-red-600 mx-auto mb-8"></div>

          {/* Google Rating Premium Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-white border border-stone-200 rounded-none max-w-xl mx-auto text-left shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 border border-red-100 text-red-600 shrink-0">
              <span className="font-serif text-lg font-bold">4,5</span>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                ))}
                <span className="relative inline-block w-4 h-4">
                  <Star className="absolute inset-0 w-4 h-4 text-red-600" />
                  <span className="absolute inset-0 overflow-hidden w-1/2">
                    <Star className="w-4 h-4 fill-red-600 text-red-600" />
                  </span>
                </span>
              </div>
              <h4 className="font-sans text-sm font-bold text-stone-900 uppercase tracking-wider">
                4,5 / 5 • 1400 opinii na Google
              </h4>
              <p className="font-sans text-xs text-stone-500 mt-0.5">
                Średnia ocena z Google na podstawie opinii gości naszego pubu w Krośnie.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="group relative bg-white border border-stone-200 hover:border-red-600/30 transition-all duration-300 p-8 flex flex-col justify-between shadow-sm"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-stone-100 group-hover:text-red-50 transition-colors duration-300 pointer-events-none">
                <Quote className="w-12 h-12 stroke-[1.5] rotate-180" />
              </div>

              {/* Quotation text */}
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                     <Star key={i} className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="font-sans text-sm md:text-base text-stone-700 italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="font-serif text-sm font-semibold text-stone-900 group-hover:text-red-600 transition-colors duration-300">
                  {rev.author}
                </span>
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* See all Google reviews CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="https://share.google/QvpuK76ts0GM6euj3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-stone-900 rounded-[4px] px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-stone-900 transition-colors duration-300 hover:bg-[#fafaf9]"
          >
            Zobacz wszystkie opinie na Google
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
