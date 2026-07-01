import React from "react";
import { Beer } from "lucide-react";
import { featuredBeersList } from "../data";

interface BeerSectionProps {
  onMenuClick: () => void;
}

export const BeerSection: React.FC<BeerSectionProps> = ({ onMenuClick }) => {
  return (
    <section id="piwo-sekcja" className="relative bg-[#fafaf9] py-20 md:py-32 overflow-hidden border-b border-stone-200 z-10">
      {/* Background ambient glow */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-red-100/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 text-red-600 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <Beer className="w-4 h-4 animate-bounce" />
            <span>Kran & Butelka</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Rzemieślnicze Piwa z Beczki
          </h2>
          <div className="w-24 h-[1px] bg-red-600 mx-auto mb-6"></div>
          <p className="font-sans text-stone-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Nasi barmani dbają o idealną temperaturę i ciśnienie serwowania. Wybieramy wyłącznie najlepsze browary regionalne oraz polskie perełki rzemieślnicze.
          </p>
        </div>

        {/* Highlighted Price Table - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {featuredBeersList.map((beer, index) => (
            <div 
              key={index}
              className="group p-4 bg-white border border-stone-200/60 hover:border-stone-300 hover:bg-stone-50 transition-all duration-300 rounded-none flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <span className="font-serif text-lg font-bold text-stone-900 group-hover:text-red-600 transition-colors duration-300">
                  {beer.name}
                </span>
                {/* Dotted connector */}
                <span className="flex-1 border-b border-dotted border-stone-200 group-hover:border-stone-300 transition-colors"></span>
                <span className="font-mono text-sm font-semibold text-red-600 bg-red-50 px-2 py-0.5 border border-red-100">
                  {beer.price}
                </span>
              </div>
              <p className="font-sans text-xs text-stone-500 group-hover:text-stone-600 transition-colors leading-relaxed">
                {beer.type}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onMenuClick}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-red-600 text-stone-700 hover:text-white font-sans font-semibold tracking-wider text-xs border border-stone-200 hover:border-red-600 transition-all duration-300 rounded-none shadow-sm active:translate-y-0.5"
            id="beer-cta-full-menu"
          >
            <span>ZOBACZ PEŁNE MENU PIW</span>
            <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
