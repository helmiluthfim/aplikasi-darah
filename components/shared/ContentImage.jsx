import React from "react";
import { Image as ImageIcon } from "lucide-react";

const ContentImage = ({ src, caption }) => (
  <div className="w-full my-8 md:my-10">
    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-lg group bg-black/20">
      <img
        src={src}
        alt={caption || "Ilustrasi"}
        className="w-full h-64 md:h-72 object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
        <div className="flex items-center gap-2 text-white/90 text-xs">
          <ImageIcon size={14} />
          <span>{caption || "Ilustrasi Materi"}</span>
        </div>
      </div>
    </div>
    <p className="text-center text-[10px] text-slate-500 mt-3 italic">
      {caption}
    </p>
  </div>
);

export default ContentImage;
