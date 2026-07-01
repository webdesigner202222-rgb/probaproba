import React, { useState, useEffect } from "react";
import { Phone, UtensilsCrossed } from "lucide-react";

interface HeroCrossfadeProps {
  onMenuClick: () => void;
}

const RED = "#c8202c";
const RED_DARK = "#9c1620";

// Three living background photos (interior / food / beer)
const HERO_BG = [
  "https://res.cloudinary.com/n8ir6lrb/image/upload/v1782888247/c526ebf4-81e6-403b-84d2-ccf5335bd9da.png",
  "https://res.cloudinary.com/n8ir6lrb/image/upload/v1782888148/20484944-6ca4-4685-a747-ec6dc9152753.png",
  "https://res.cloudinary.com/n8ir6lrb/image/upload/v1782888066/58ace594-1d10-4cf8-9767-3ce5ceda5a62.png",
];

const CYCLE_MS = 7000; // autoplay interval, synced with progress bar

export const HeroCrossfade: React.FC<HeroCrossfadeProps> = ({ onMenuClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_BG.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Keyframes local to the hero: continuous Ken Burns zoom + progress fill */}
      <style>{`
        @keyframes heroKenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }
        @keyframes heroProgressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      {/* 3-Image crossfade background — feels like a slowly living backdrop, not slides */}
      {HERO_BG.map((src, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: "opacity 2.2s ease-in-out",
            }}
          >
            {/* Zoom layer keeps rotating over the full 3-photo cycle without resetting */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                animation: "heroKenBurns 21s linear infinite",
              }}
            />
            {/* Per-photo tonal overlay to unify color between different images */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,12,8,0.35), rgba(10,6,4,0.55))",
              }}
            />
          </div>
        );
      })}

      {/* Fixed top/bottom darkening for navbar + text legibility */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,6,4,0.55) 0%, rgba(10,6,4,0.35) 35%, rgba(10,6,4,0.75) 100%)",
        }}
      />

      {/* Hero content — vertically & horizontally centered */}
      <div className="relative z-20 text-center px-4 max-w-4xl flex flex-col items-center">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center px-4 py-[7px] border border-white/35 rounded-[20px] text-white text-[11px] font-sans font-bold uppercase tracking-[0.25em] mb-8">
          Krosno, Rynek
        </div>

        {/* Big Playfair header — PIWIARNIA over KROSNO */}
        <h1
          className="font-serif font-extrabold leading-none mb-6"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          <span className="block text-white">PIWIARNIA</span>
          <span className="block" style={{ color: RED }}>
            KROSNO
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-sans text-lg text-white/90 max-w-[520px] mb-10 text-balance">
          Atmosfera, rzemieślnicze smaki i długie wieczory w sercu miasta
        </p>

        {/* Two CTAs side by side */}
        <div className="flex flex-col sm:flex-row items-center gap-[14px] w-full sm:w-auto">
          <button
            onClick={onMenuClick}
            id="hero-cta-menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded text-white font-sans font-bold text-[13px] tracking-[0.5px] uppercase transition-colors duration-300 active:translate-y-0.5"
            style={{ backgroundColor: RED, padding: "16px 28px" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = RED_DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = RED)}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Zobacz pełne menu</span>
          </button>

          <a
            href="tel:721121122"
            id="hero-cta-call"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded bg-transparent text-white border border-white/60 hover:bg-white/10 hover:border-white transition-all duration-300 font-sans font-bold text-[13px] tracking-[0.5px] uppercase active:translate-y-0.5"
            style={{ padding: "16px 28px" }}
          >
            <Phone className="w-4 h-4" />
            <span>Zadzwoń: 721 121 122</span>
          </a>
        </div>
      </div>

      {/* Progress bars at the bottom — synced to the 7s autoplay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-[6px]">
        {HERO_BG.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className="h-[2px] w-[52px] overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
            >
              {isActive && (
                <div
                  key={activeIndex}
                  className="h-full w-full"
                  style={{
                    backgroundColor: RED,
                    transformOrigin: "left",
                    animation: `heroProgressFill ${CYCLE_MS}ms linear forwards`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
