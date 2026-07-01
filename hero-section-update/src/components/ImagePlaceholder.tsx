import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-video", "aspect-square"
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  className = "",
  aspectRatio = "aspect-video"
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 border border-stone-200/80 flex flex-col items-center justify-center p-6 text-center group transition-all duration-300 hover:border-red-600/30 ${aspectRatio} ${className}`}
    >
      {/* Grid background effect to look elegant & premium */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>
      
      {/* Red ambient light glowing at bottom on hover */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-16 bg-red-600/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Decorative corner lines like a sleek camera viewport */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-stone-300 group-hover:border-red-600/40 transition-colors duration-300"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-stone-300 group-hover:border-red-600/40 transition-colors duration-300"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-stone-300 group-hover:border-red-600/40 transition-colors duration-300"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-stone-300 group-hover:border-red-600/40 transition-colors duration-300"></div>

      {/* Central icon & label */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="p-3 bg-white border border-stone-200 rounded-full text-stone-400 group-hover:text-red-600 group-hover:border-red-200 transition-all duration-300 shadow-sm">
          <ImageIcon className="w-6 h-6 stroke-[1.2]" />
        </div>
        <span className="text-xs uppercase tracking-widest text-stone-400 font-mono group-hover:text-stone-500 transition-colors duration-300">
          Miejsce na zdjęcie
        </span>
        <p className="text-sm font-sans font-medium text-stone-700 max-w-xs group-hover:text-stone-900 transition-colors duration-300 line-clamp-3">
          {label}
        </p>
      </div>
    </div>
  );
};
