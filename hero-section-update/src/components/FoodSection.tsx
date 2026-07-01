import React from "react";
import { Utensils } from "lucide-react";
import { teaserFoodItems } from "../data";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface FoodSectionProps {
  onMenuClick: () => void;
}

export const FoodSection: React.FC<FoodSectionProps> = ({ onMenuClick }) => {
  return (
    <section id="jedzenie-sekcja" className="relative bg-stone-50 py-20 md:py-32 overflow-hidden border-b border-stone-200 z-10">
      {/* Ambient light on the left */}
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-stone-200/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 text-red-600 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <Utensils className="w-4 h-4" />
            <span>Z Naszej Kuchni</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Rzemieślnicze Jedzenie
          </h2>
          <div className="w-24 h-[1px] bg-red-600 mx-auto mb-6"></div>
          <p className="font-sans text-stone-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Nie idziemy na kompromisy. Mięso na burgery mielimy sami na miejscu, sosy gotujemy od podstaw, a nasza pizza powstaje według ściśle strzeżonej receptury.
          </p>
        </div>

        {/* 4 Large Teaser Cards - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teaserFoodItems.map((food, index) => (
            <div
              key={index}
              className="group bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300 flex flex-col h-full rounded-none overflow-hidden shadow-sm"
            >
              {/* Image Placeholder */}
              <div className="overflow-hidden">
                <ImagePlaceholder
                  label={food.placeholderText}
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1">
                    {food.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {food.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                  <span className="text-xs text-stone-500 font-sans">
                    Cena rzemieślnicza
                  </span>
                  <span className="font-mono text-base font-bold text-red-600">
                    {food.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onMenuClick}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-sans font-semibold tracking-wider text-xs rounded-none hover:bg-red-700 transition-all duration-300 shadow-md shadow-red-900/10 active:translate-y-0.5"
            id="food-cta-menu"
          >
            {/* Mirror reflection */}
            <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span>PRZEJDŹ DO PEŁNEGO MENU JEDZENIA</span>
            <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
