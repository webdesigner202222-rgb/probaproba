import React from "react";
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";

interface LocationAndFooterProps {
  onNavigate: (sectionId: string) => void;
  onMenuClick: () => void;
}

export const LocationAndFooter: React.FC<LocationAndFooterProps> = ({ onNavigate, onMenuClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* SECTION 10: LOKALIZACJA */}
      <section id="lokalizacja-sekcja" className="relative bg-[#fafaf9] py-20 md:py-32 overflow-hidden border-b border-stone-200 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Box: Contact & Hours Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-600 text-xs font-mono uppercase tracking-[0.25em] mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Znajdź Nas</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6">
                  Lokalizacja & Kontakt
                </h2>
                <div className="w-20 h-[1px] bg-red-600 mb-8"></div>

                {/* Details list */}
                <div className="space-y-6 mb-10">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="text-red-600 mt-1 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider mb-1">
                        Adres pubu
                      </h4>
                      <p className="font-sans text-sm text-stone-600">
                        Rynek 12, 38-400 Krosno (Podkarpacie)
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="text-red-600 mt-1 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider mb-1">
                        Godziny otwarcia
                      </h4>
                      <ul className="font-sans text-sm text-stone-600 space-y-1">
                        <li className="flex justify-between gap-8">
                          <span>Poniedziałek - Czwartek:</span>
                          <span className="text-stone-900 font-semibold">16:00 - 23:00</span>
                        </li>
                        <li className="flex justify-between gap-8">
                          <span>Piątek - Sobota:</span>
                          <span className="text-stone-900 font-semibold">16:00 - 02:00</span>
                        </li>
                        <li className="flex justify-between gap-8">
                          <span>Niedziela:</span>
                          <span className="text-stone-900 font-semibold">15:00 - 23:00</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="text-red-600 mt-1 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider mb-1">
                        Kontakt telefoniczny
                      </h4>
                      <p className="font-sans text-sm text-stone-900 font-semibold">
                        <a href="tel:721121122" className="hover:text-red-600 transition-colors">
                          721 121 122
                        </a>
                      </p>
                      <p className="font-sans text-xs text-stone-500 mt-0.5">
                        Dzwoń w godzinach otwarcia w celu pytań lub rezerwacji stolika.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Giant CTA Button */}
              <div>
                <a
                  href="tel:721121122"
                  className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 text-white font-sans font-bold tracking-widest text-sm rounded-none transition-all duration-300 shadow-md shadow-red-900/10 active:translate-y-0.5"
                  id="location-giant-call-cta"
                >
                  {/* Subtle pulsing background glow inside */}
                  <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>ZADZWOŃ I ZAREZERWUJ: 721 121 122</span>
                </a>
              </div>
            </div>

            {/* Right Box: Google Maps Embed (Dark Themed Layout Frame) */}
            <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] relative border border-stone-200 p-2 bg-white shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m1d21.7644!2d49.6917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c4f7be415f3e9%3A0x6b4ef85e0503e481!2sRynek%2012%2C%2038-400%20Krosno!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.1) contrast(1.05)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja Piwiarnia Krosno"
                className="w-full h-full"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 11: FOOTER */}
      <footer className="bg-stone-100 border-t border-stone-200 pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Brand Logo & Description */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold tracking-wider text-stone-900">
                PIWIARNIA <span className="text-red-600 font-light">KROSNO</span>
              </h3>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                Miejsce zrodzone z pasji do dobrego piwa rzemieślniczego, tradycyjnego jedzenia i wyjątkowej atmosfery. Zapraszamy na Krośnieński Rynek 12.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-stone-200 hover:border-red-600 text-stone-600 hover:text-red-600 transition-all rounded-none shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-stone-200 hover:border-red-600 text-stone-600 hover:text-red-600 transition-all rounded-none shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-stone-200 hover:border-red-600 text-stone-600 hover:text-red-600 transition-all rounded-none shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">
                Szybkie Linki
              </h4>
              <ul className="space-y-2 text-xs font-sans text-stone-600">
                <li>
                  <button
                    onClick={onMenuClick}
                    className="hover:text-red-600 transition-colors cursor-pointer text-left font-medium"
                  >
                    Karta Menu
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("galeria-sekcja")}
                    className="hover:text-red-600 transition-colors cursor-pointer text-left font-medium"
                  >
                    Galeria zdjęć
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("wydarzenia-sekcja")}
                    className="hover:text-red-600 transition-colors cursor-pointer text-left font-medium"
                  >
                    Wydarzenia & Koncerty
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("ogrodek-sekcja")}
                    className="hover:text-red-600 transition-colors cursor-pointer text-left font-medium"
                  >
                    Letni Ogródek
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("lokalizacja-sekcja")}
                    className="hover:text-red-600 transition-colors cursor-pointer text-left font-medium"
                  >
                    Lokalizacja & Dojazd
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">
                Dane Kontaktowe
              </h4>
              <ul className="space-y-3 text-xs font-sans text-stone-600">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Rynek 12, 38-400 Krosno</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600 shrink-0" />
                  <a href="tel:721121122" className="hover:text-red-600 transition-colors font-semibold">
                    721 121 122
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-600 shrink-0" />
                  <a href="mailto:kontakt@piwiarniakrosno.pl" className="hover:text-red-600 transition-colors">
                    kontakt@piwiarniakrosno.pl
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter or Statement */}
            <div>
              <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-widest mb-4">
                Tradycja & Jakość
              </h4>
              <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">
                Każdy gość traktowany jest jak domownik. Zapraszamy do wspólnego celebrowania smaków w unikalnej piwnicznej atmosferze.
              </p>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 border border-stone-200 hover:border-red-600 text-stone-600 hover:text-red-600 bg-white transition-colors text-xs font-mono shadow-sm"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>DO GÓRY</span>
              </button>
            </div>

          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-stone-200 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-stone-500">
            <span>
              &copy; {new Date().getFullYear()} Piwiarnia Krosno. Wszystkie prawa zastrzeżone.
            </span>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <span className="hover:text-stone-800 transition-colors cursor-pointer">
                Polityka Prywatności
              </span>
              <span>•</span>
              <span className="hover:text-stone-800 transition-colors cursor-pointer">
                Regulamin Lokalu
              </span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
