import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroCrossfade } from "./components/HeroCrossfade";
import { FeaturesBar } from "./components/FeaturesBar";
import { BeerSection } from "./components/BeerSection";
import { FoodSection } from "./components/FoodSection";
import { GallerySection } from "./components/GallerySection";
import { PromoSections } from "./components/PromoSections";
import { ReviewsSection } from "./components/ReviewsSection";
import { LocationAndFooter } from "./components/LocationAndFooter";
import { MenuPage } from "./components/MenuPage";

export default function App() {
  // Capture initial URL path (supporting both simple paths and hashes)
  const getInitialPath = () => {
    const pathname = window.location.pathname;
    if (pathname === "/menu" || window.location.hash === "#/menu") {
      return "/menu";
    }
    return "/";
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath());

  // Listen for browser navigation (back/forward keys)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname === "/menu" || window.location.hash === "#/menu" ? "/menu" : "/";
      setCurrentPath(path);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Set new path and push to window history
  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0 });
  };

  // Safe navigation handler: scrolls to target section.
  // If we are on /menu page, it navigates back to / first, then scrolls.
  const handleSectionNavigation = (sectionId: string) => {
    if (currentPath !== "/") {
      window.history.pushState({}, "", "/");
      setCurrentPath("/");
      
      // Let React layout mount before scrolling
      setTimeout(() => {
        if (sectionId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 150);
    } else {
      // Direct scroll on homepage
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="bg-[#fafaf9] text-[#1c1917] min-h-screen font-sans selection:bg-red-600 selection:text-white">
      {/* Sticky semi-transparent blurred navigation bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleSectionNavigation}
        onMenuClick={() => navigateTo("/menu")}
      />

      {currentPath === "/menu" ? (
        /* MENU SUBPAGE (Scrolled category pages without tabs or tables) */
        <MenuPage onBackToHome={() => navigateTo("/")} />
      ) : (
        /* CORE LANDING PAGE WITH PRESCRIBED ORDER */
        <div className="animate-fade-in duration-700">
          {/* 2. Hero page with crossfade background of 5 photos */}
          <HeroCrossfade onMenuClick={() => navigateTo("/menu")} />

          {/* 3. Features icons bar (Piwo, Drinki, Burgery, Pizza, Steki) */}
          <FeaturesBar />

          {/* 4. Beer section: Pricing highlight table + CTA */}
          <BeerSection onMenuClick={() => navigateTo("/menu")} />

          {/* 5. Food section: 4 large teaser cards with hover effect + CTA */}
          <FoodSection onMenuClick={() => navigateTo("/menu")} />

          {/* 6. Gallery section with 6 images and full screen lightbox */}
          <GallerySection />

          {/* 7 & 8. Events section (FB/IG links) & Garden Description section */}
          <PromoSections />

          {/* 9. Reviews Section with 90% poleca badge and 3 quote cards */}
          <ReviewsSection />

          {/* 10 & 11. Location (Godziny, Adres, Maps frame, Call CTA) & Clean Footer */}
          <LocationAndFooter
            onNavigate={handleSectionNavigation}
            onMenuClick={() => navigateTo("/menu")}
          />
        </div>
      )}
    </div>
  );
}
