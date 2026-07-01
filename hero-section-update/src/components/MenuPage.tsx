import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { menuCategories } from "../data";

interface MenuPageProps {
  onBackToHome: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onBackToHome }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    menuCategories[0]?.id ?? ""
  );
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Always scroll to top when mounting the menu page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Scroll-spy: highlight the category button of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-category-id");
            if (id) setActiveCategory(id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    const nodes = Object.values(sectionRefs.current).filter(
      (n): n is HTMLElement => Boolean(n)
    );
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  // Smoothly scroll to a chosen menu category
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#fafaf9] text-[#1c1917] min-h-screen pt-24 pb-20 selection:bg-red-600 selection:text-white">
      {/* Main Menu Page Title (unchanged) */}
      <div className="max-w-7xl mx-auto px-6 pt-6 md:pt-10 pb-12 text-center">
        <div className="flex justify-center mb-8">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-stone-600 hover:text-red-600 font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-300"
            id="menu-back-btn"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Powrót do strony głównej</span>
          </button>
        </div>

        <span className="text-xs font-mono uppercase tracking-[0.3em] text-red-600 block mb-3">
          Rzemieślnicza Karta Menu
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-4">
          MENU LOKALU
        </h1>
        <div className="w-20 h-[1px] bg-red-600 mx-auto mb-6"></div>
        <p className="font-sans text-stone-500 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
          Wszystkie nasze produkty rzemieślnicze przygotowywane są z najwyższej jakości świeżych, lokalnych składników. Ceny podane są w polskich złotych (PLN).
        </p>
      </div>

      {/* Sticky Category Quick-Navigation with scroll-spy */}
      <nav
        className="sticky top-0 z-40 mb-4"
        style={{
          backgroundColor: "rgba(250,247,242,0.92)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
        aria-label="Nawigacja po kategoriach menu"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 border-b border-[#e8e1d8]">
          <ul className="flex items-center gap-2 md:gap-3 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {menuCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <li key={category.id} className="shrink-0">
                  <button
                    onClick={() => scrollToCategory(category.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`whitespace-nowrap px-4 py-2 rounded-[3px] font-sans text-[11px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "bg-[#c8202c] border border-[#c8202c] text-white"
                        : "bg-white border border-[#e8e1d8] text-[#1c1917] hover:border-[#c8202c] hover:text-[#c8202c]"
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Menu categories */}
      <div>
        {menuCategories.map((category) => {
          const categoryTitle =
            category.id === "piwo"
              ? "Piwo z Beczki"
              : category.id === "drinki-alkohole"
              ? "Drinki Klasyczne"
              : category.id === "jedzenie"
              ? "Jedzenie"
              : "Pizza & Napoje";

          return (
            <section
              key={category.id}
              id={`category-${category.id}`}
              data-category-id={category.id}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              style={{ scrollMarginTop: "78px" }}
            >
              <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: "70px" }}>
                {/* Compact text category header (replaces the photo banner) */}
                <div style={{ marginBottom: "36px" }}>
                  <span className="block font-sans font-bold text-[#c8202c] uppercase text-[11px] tracking-[3px] mb-3">
                    Kategoria Menu
                  </span>
                  <h2 className="font-serif font-bold text-[34px] leading-tight text-stone-900 inline-block border-b-2 border-[#c8202c] pb-2">
                    {categoryTitle}
                  </h2>
                </div>

                {/* Subsections */}
                <div className="space-y-14">
                  {category.subsections.map((sub, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center gap-4 mb-6">
                        <h3 className="font-serif text-lg md:text-2xl font-bold text-stone-900 tracking-tight uppercase">
                          {sub.title}
                        </h3>
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-[#c8202c]/20 to-transparent"></div>
                      </div>

                      {/* Unified lightweight card grid */}
                      <div
                        className="grid"
                        style={{
                          gridTemplateColumns:
                            "repeat(auto-fill, minmax(300px, 1fr))",
                          gap: "18px",
                        }}
                      >
                        {sub.items.map((item, iIdx) => (
                          <article
                            key={iIdx}
                            className="menu-card group relative bg-white rounded-[4px] overflow-hidden transition-colors duration-300"
                            style={{
                              border: "1px solid #e8e1d8",
                              padding: "22px 22px 20px 26px",
                            }}
                          >
                            {/* Top row: name + price pill */}
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h4 className="menu-card-name font-serif font-bold text-[17px] leading-snug text-stone-900 transition-colors duration-300">
                                  {item.name}
                                </h4>
                              </div>
                              <span
                                className="shrink-0 font-sans font-bold text-[13px] rounded-[3px]"
                                style={{
                                  backgroundColor: "#fbeced",
                                  color: "#c8202c",
                                  padding: "5px 11px",
                                }}
                              >
                                PLN {item.price}
                              </span>
                            </div>

                            {/* Description */}
                            {item.description && (
                              <p
                                className="font-sans"
                                style={{
                                  fontSize: "13.5px",
                                  color: "#6b5f56",
                                  lineHeight: 1.55,
                                  marginTop: "10px",
                                }}
                              >
                                {item.description}
                              </p>
                            )}
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom return-to-homepage section */}
      <div
        className="max-w-7xl mx-auto px-6 text-center"
        style={{
          borderTop: "1px solid #e8e1d8",
          paddingTop: "20px",
          marginTop: "30px",
        }}
      >
        <button
          onClick={onBackToHome}
          className="menu-return-btn inline-flex items-center gap-2 font-sans font-bold rounded-[4px] transition-colors duration-200"
          style={{
            border: "1px solid #1c1917",
            padding: "13px 26px",
            fontSize: "13px",
            letterSpacing: "0.5px",
          }}
          id="menu-bottom-back-btn"
        >
          <span aria-hidden="true">&larr;</span>
          POWRÓT DO STRONY GŁÓWNEJ
        </button>
      </div>
    </div>
  );
};
