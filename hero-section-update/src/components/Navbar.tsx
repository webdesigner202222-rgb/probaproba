import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (sectionId: string) => void;
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMenuPage = currentPath === "/menu";

  // Monitor scroll position to apply background blur + hide navbar on the menu page
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      // On the menu page, slide the main navbar away once the user scrolls down,
      // leaving only the sticky category bar. It returns when back near the top.
      setIsHidden(isMenuPage && y > 120);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuPage]);

  // Close the mobile drawer whenever the navbar hides
  useEffect(() => {
    if (isHidden) setIsMobileMenuOpen(false);
  }, [isHidden]);

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  const handleMenuClickWithClose = () => {
    setIsMobileMenuOpen(false);
    onMenuClick();
  };

  // Link color adapts: white over the dark hero, dark stone once the white navbar appears on scroll
  const linkBase = isScrolled
    ? "text-stone-700 hover:text-red-600"
    : "text-white/90 hover:text-white drop-shadow";

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isHidden ? "-translate-y-full pointer-events-none" : "translate-y-0"
      } ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-stone-200/80 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <button
          onClick={() => handleLinkClick("hero")}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
          id="navbar-logo"
        >
          <img
            src="/images/logo-full.png"
            alt="Logo Piwiarnia Krosno"
            className={`w-auto object-contain group-hover:scale-105 transition-all duration-300 drop-shadow-md ${
              isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
            }`}
          />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={handleMenuClickWithClose}
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
              currentPath === "/menu" ? "text-red-600" : linkBase
            }`}
          >
            Menu lokalu
          </button>
          
          <button
            onClick={() => handleLinkClick("galeria-sekcja")}
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${linkBase}`}
          >
            Galeria
          </button>

          <button
            onClick={() => handleLinkClick("wydarzenia-sekcja")}
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${linkBase}`}
          >
            Wydarzenia
          </button>

          <button
            onClick={() => handleLinkClick("ogrodek-sekcja")}
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${linkBase}`}
          >
            Ogródek
          </button>

          <button
            onClick={() => handleLinkClick("lokalizacja-sekcja")}
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${linkBase}`}
          >
            Lokalizacja
          </button>
        </div>

        {/* Call CTA Button */}
        <div className="hidden sm:block">
          <a
            href="tel:721121122"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 active:translate-y-0.5"
            id="navbar-call-btn"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>ZADZWOŃ: 721 121 122</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Small phone link on mobile */}
          <a
            href="tel:721121122"
            className="p-2 bg-stone-100 border border-stone-200 text-red-600 rounded-none sm:hidden"
            aria-label="Zadzwoń do pubu"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-stone-100 border border-stone-200 hover:border-red-600 text-stone-600 hover:text-stone-900 transition-colors"
            aria-label="Nawigacja"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer/Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-stone-200 py-6 px-6 shadow-2xl flex flex-col gap-5 animate-fade-in z-50">
          <button
            onClick={handleMenuClickWithClose}
            className={`font-sans text-sm font-bold uppercase tracking-wider text-left py-2 border-b border-stone-100 ${
              currentPath === "/menu" ? "text-red-600" : "text-stone-800"
            }`}
          >
            Karta Menu lokalu
          </button>
          
          <button
            onClick={() => handleLinkClick("galeria-sekcja")}
            className="font-sans text-sm font-bold uppercase tracking-wider text-stone-800 text-left py-2 border-b border-stone-100"
          >
            Galeria zdjęć
          </button>

          <button
            onClick={() => handleLinkClick("wydarzenia-sekcja")}
            className="font-sans text-sm font-bold uppercase tracking-wider text-stone-800 text-left py-2 border-b border-stone-100"
          >
            Wydarzenia
          </button>

          <button
            onClick={() => handleLinkClick("ogrodek-sekcja")}
            className="font-sans text-sm font-bold uppercase tracking-wider text-stone-800 text-left py-2 border-b border-stone-100"
          >
            Letni Ogródek
          </button>

          <button
            onClick={() => handleLinkClick("lokalizacja-sekcja")}
            className="font-sans text-sm font-bold uppercase tracking-wider text-stone-800 text-left py-2 border-b border-stone-100"
          >
            Lokalizacja & Kontakt
          </button>

          <a
            href="tel:721121122"
            className="inline-flex items-center justify-center gap-2 w-full py-4 bg-red-600 text-white font-sans text-xs font-bold uppercase tracking-widest"
          >
            <Phone className="w-4 h-4" />
            <span>ZADZWOŃ: 721 121 122</span>
          </a>
        </div>
      )}
    </nav>
  );
};
