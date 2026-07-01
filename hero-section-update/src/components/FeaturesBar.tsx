import React from "react";
import { Beer, Martini, Flame, Pizza, Utensils } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Beer,
    title: "Piwo",
    desc: "Lokalne rzemiosło, chmielowe IPA, stouty i zimny klasyk z miedzianej beczki."
  },
  {
    icon: Martini,
    title: "Drinki",
    desc: "Klasyczne koktajle oraz autorskie kompozycje z dodatkiem leśnych ziół i owoców."
  },
  {
    icon: Utensils,
    title: "Burgery",
    desc: "100% soczysta polska wołowina w rzemieślniczej maślanej bułce z bekonem."
  },
  {
    icon: Pizza,
    title: "Pizza",
    desc: "Ręcznie wyrabiane ciasto dojrzewające przez 48h, pieczone na chrupko."
  },
  {
    icon: Flame,
    title: "Steki",
    desc: "Sezonowane cięcia wołowiny, grillowane w wysokiej temperaturze."
  }
];

export const FeaturesBar: React.FC = () => {
  return (
    <section className="bg-stone-50 border-b border-stone-200 py-12 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon wrapper with glow on hover */}
                <div className="relative mb-4 p-4 rounded-full bg-white border border-stone-200 text-stone-600 group-hover:text-red-600 group-hover:border-red-300 group-hover:shadow-[0_4px_15px_rgba(220,38,38,0.1)] transition-all duration-300 shadow-sm">
                  <IconComponent className="w-8 h-8 stroke-[1.2]" />
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-stone-900 tracking-wide mb-2 uppercase group-hover:text-red-600 transition-colors duration-300">
                  {feat.title}
                </h3>
                
                {/* Short Description */}
                <p className="font-sans text-xs text-stone-500 leading-relaxed max-w-[200px]">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
