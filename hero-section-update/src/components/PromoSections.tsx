import React from "react";
import { Calendar, Compass, Facebook, Instagram, Phone } from "lucide-react";

export const PromoSections: React.FC = () => {
  return (
    <>
      {/* SECTION 7: WYDARZENIA */}
      <section id="wydarzenia-sekcja" className="relative bg-[#fafaf9] py-24 md:py-36 overflow-hidden border-b border-stone-200 z-10">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-red-100/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-red-600 text-xs font-mono uppercase tracking-[0.25em] mb-4">
                <Calendar className="w-4 h-4" />
                <span>Wieczory Pełne Wrażeń</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6">
                Co się dzieje w Piwiarni?
              </h2>
              <div className="w-20 h-[1px] bg-red-600 mb-8"></div>
              
              <p className="font-sans text-stone-700 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                W Piwiarni Krosno nie ma miejsca na nudę. Regularnie organizujemy wieczory z muzyką na żywo, turnieje pub quizów, degustacje piw rzemieślniczych prowadzone przez certyfikowanych piwowarów, a także wspólne kibicowanie przy najważniejszych wydarzeniach sportowych na wielkim ekranie.
              </p>
              
              <p className="font-sans text-stone-500 text-sm leading-relaxed mb-10 max-w-2xl">
                Aby być na bieżąco z planowanymi koncertami, transmisjami meczów i premierami nowych beczek, obserwuj nasze kanały społecznościowe. To tam codziennie wrzucamy najświeższe ogłoszenia i kulisy z życia pubu!
              </p>

              {/* Social links */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-stone-50 border border-stone-200 hover:border-red-600 text-stone-800 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none shadow-sm"
                  id="events-fb-link"
                >
                  <Facebook className="w-4 h-4 text-red-600" />
                  <span>Obserwuj na Facebooku</span>
                </a>
                
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-stone-50 border border-stone-200 hover:border-red-600 text-stone-800 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none shadow-sm"
                  id="events-ig-link"
                >
                  <Instagram className="w-4 h-4 text-red-600" />
                  <span>Obserwuj na Instagramie</span>
                </a>
              </div>
            </div>

            {/* Right Photo illustration */}
            <div className="lg:col-span-5">
              <div className="relative p-2 bg-white border border-stone-200 shadow-sm">
                <img
                  src="/images/wydarzenia.png"
                  alt="Co się dzieje w Piwiarni — wydarzenia i koncerty"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: OGRÓDEK */}
      <section id="ogrodek-sekcja" className="relative bg-[#fafaf9] py-24 md:py-36 overflow-hidden border-b border-stone-200 z-10">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-stone-200/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Placeholder illustration (Stacked or multi-placeholder grids) */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="grid grid-cols-1 gap-6">
                <div className="p-2 bg-white border border-stone-200 shadow-sm">
                  <img
                    src="/images/ogrodek-1.png"
                    alt="Letni ogródek piwny w ciągu dnia"
                    className="w-full aspect-[16/10] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 bg-white border border-stone-200 shadow-sm">
                  <img
                    src="/images/ogrodek-2.png"
                    alt="Letni ogródek piwny nocą z girlandami świetlnymi"
                    className="w-full aspect-[16/10] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-red-600 text-xs font-mono uppercase tracking-[0.25em] mb-4">
                <Compass className="w-4 h-4" />
                <span>Enklawa Spokoju</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6">
                Letni Ogródek Piwny
              </h2>
              <div className="w-20 h-[1px] bg-red-600 mb-8"></div>

              <p className="font-sans text-stone-700 text-sm md:text-base leading-relaxed mb-6">
                Gdy tylko robi się ciepło, zapraszamy do naszego zielonego ogródka piwnego – idealnego schronienia przed miejskim zgiełkiem. To klimatyczny azyl zlokalizowany z dala od ruchu ulicznego, otoczony bujną roślinnością.
              </p>

              <p className="font-sans text-stone-500 text-sm leading-relaxed mb-8">
                Wieczorami rozświetlamy ogródek dziesiątkami wiszących ciepłych żarówek girlandowych, tworząc nastrojową, wręcz magiczną aurę sprzyjającą niekończącym się rozmowom przy schłodzonym kuflu piwa lub autorskim drinku. To idealne miejsce zarówno na luźne spotkanie z przyjaciółmi, jak i na romantyczną randkę.
              </p>

              <div className="inline-flex items-center gap-4 p-4 border border-stone-200 bg-white shadow-sm">
                <div className="p-3 bg-red-50 border border-red-100 text-red-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider">
                    Chcesz zarezerwować stolik grupowy?
                  </h4>
                  <p className="font-sans text-xs text-stone-500 mt-1">
                    Zadzwoń do nas, a przygotujemy miejsce dla Twojej ekipy:{" "}
                    <a href="tel:721121122" className="text-red-600 font-semibold hover:underline">
                      721 121 122
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
