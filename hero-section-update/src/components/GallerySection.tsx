import React, { useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryItems } from "../data";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const GallerySection: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
    // Disable body scroll when lightbox is active
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
    // Restore body scroll
    document.body.style.overflow = "auto";
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => 
        prev === 0 ? galleryItems.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) => 
        ((prev ?? 0) + 1) % galleryItems.length
      );
    }
  };

  return (
    <section id="galeria-sekcja" className="relative bg-[#fafaf9] py-20 md:py-32 overflow-hidden border-b border-stone-200 z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 text-red-600 text-xs font-mono uppercase tracking-[0.25em] mb-3">
            <Camera className="w-4 h-4" />
            <span>Galeria Krosno</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Uchwycone Chwile
          </h2>
          <div className="w-24 h-[1px] bg-red-600 mx-auto mb-6"></div>
          <p className="font-sans text-stone-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Poczuj klimat rzemieślniczej Piwiarni zanim nas odwiedzisz. Kliknij na dowolny kadr, by powiększyć.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden border border-stone-200 hover:border-red-600/50 transition-all duration-300 shadow-sm"
            >
              {/* Image box */}
              <ImagePlaceholder
                label={item.placeholderText}
                aspectRatio="aspect-[3/2]"
                className="group-hover:scale-102 transition-transform duration-500"
              />

              {/* Cover overlay on hover */}
              <div className="absolute inset-0 bg-[#1c1917]/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-20">
                <ZoomIn className="w-8 h-8 text-red-500 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                <span className="font-serif text-sm font-semibold text-white uppercase tracking-wider text-center px-4">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono text-stone-300">Powiększ kadr</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#fafaf9]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 transition-all duration-300 animate-fade-in"
        >
          {/* Top panel with details */}
          <div className="absolute top-0 inset-x-0 bg-white/90 border-b border-stone-200 p-4 flex items-center justify-between text-stone-700 z-55">
            <span className="font-serif text-sm font-semibold tracking-wide text-stone-900">
              Piwiarnia Krosno — {galleryItems[selectedItemIndex].title}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors rounded-full"
              aria-label="Zamknij"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Core Lightbox Layout */}
          <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center mt-12">
            {/* Left Control */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:-left-16 p-3 bg-white hover:bg-red-600 border border-stone-200 hover:border-red-600 text-stone-600 hover:text-white transition-all rounded-full z-55 shadow-md"
              aria-label="Poprzednie"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Placeholder View */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full max-w-3xl bg-white border border-stone-200 p-8 flex flex-col items-center justify-center text-center relative group shadow-xl"
            >
              {/* Aesthetic camera corners */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-red-600/40"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-red-600/40"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-red-600/40"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-red-600/40"></div>

              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-400 mb-4 block">
                Powiększenie kadru {selectedItemIndex + 1} z {galleryItems.length}
              </span>
              <p className="text-lg md:text-xl font-sans italic text-stone-800 px-6 max-w-xl">
                "{galleryItems[selectedItemIndex].placeholderText}"
              </p>
            </div>

            {/* Right Control */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:-right-16 p-3 bg-white hover:bg-red-600 border border-stone-200 hover:border-red-600 text-stone-600 hover:text-white transition-all rounded-full z-55 shadow-md"
              aria-label="Następne"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom subtitle indicator */}
          <div className="absolute bottom-4 text-center text-xs font-mono text-stone-500">
            Użyj przycisków lub kliknij poza kadrem, by zamknąć podgląd.
          </div>
        </div>
      )}
    </section>
  );
};
