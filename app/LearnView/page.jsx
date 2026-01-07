"use client";
import React, { useState } from "react"; // Tambahkan useState
import { ChevronLeft, ArrowRight, X } from "lucide-react"; // Tambahkan icon X
import { modules } from "@/data/modules";

export default function LearnView({ setView, activeModule, setActiveModule }) {
  const currentData = modules[activeModule];

  if (!currentData) {
    return null;
    // atau bisa ganti skeleton/loader jika mau
  }

  // State untuk menyimpan URL gambar yang sedang di-zoom
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="p-6 animate-in slide-in-from-right-8 duration-500">
      {/* --- MODAL FULLSCREEN --- */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setFullscreenImage(null)} // Klik di mana saja untuk tutup
        >
          <button className="absolute top-8 right-8 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
            <X size={24} />
          </button>

          <img
            src={fullscreenImage}
            alt="Fullscreen View"
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain animate-in zoom-in-95 duration-300"
          />

          <p className="mt-6 text-slate-400 text-sm font-medium">
            Klik di mana saja untuk kembali
          </p>
        </div>
      )}

      {/* --- KONTEN BIASA --- */}
      <button
        onClick={() => setView("home")}
        className="flex items-center gap-2 text-slate-400 text-sm mb-6"
      >
        <ChevronLeft size={18} /> Kembali
      </button>

      <div
        className={`p-8 rounded-[2rem] bg-gradient-to-br ${currentData.color} mb-8 shadow-xl shadow-black/20`}
      >
        <h2 className="text-3xl font-black mb-1">{currentData.title}</h2>
      </div>

      <div className="rounded-[2rem] overflow-hidden bg-slate-900 border border-white/5 mb-8 aspect-video">
        <iframe
          className="w-full h-full"
          src={currentData.videoUrl}
          title="Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Oper fungsi setFullscreenImage ke dalam konten modules */}
      <div className="space-y-6 pb-24">
        {/* Penting: Kita bungkus untuk menangkap event klik dari komponen di dalamnya */}
        <div
          onClick={(e) => {
            const imgTag = e.target.closest("img");
            if (imgTag) setFullscreenImage(imgTag.src);
          }}
        >
          {currentData.content}
        </div>
      </div>

      {/* Navigasi Footer (Tetap sama) */}
      <div className="sticky bottom-6 left-6 right-6 flex gap-3 z-20">
        {activeModule > 0 && (
          <button
            onClick={() => setActiveModule((a) => a - 1)}
            className="p-4 bg-slate-800 rounded-2xl border border-white/5"
          >
            <ChevronLeft />
          </button>
        )}
        <button
          onClick={() =>
            activeModule < modules.length - 1
              ? setActiveModule((a) => a + 1)
              : setView("game")
          }
          className="flex-1 p-4 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg"
        >
          {activeModule < modules.length - 1 ? "Berikutnya" : "Mulai Game"}{" "}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
