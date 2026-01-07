import React from "react";
import { ArrowRight, BookOpen, Gamepad2 } from "lucide-react";

export default function HomeView({ setView }) {
  return (
    <div className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h2 className="text-3xl font-black mb-2 leading-tight">
          Halo, <br />
          Calon Dokter! 👋
        </h2>
        <p className="text-slate-400 text-sm">
          Siap melanjutkan misi hari ini?
        </p>
      </div>

      {/* FEATURED CARD */}
      <div
        className="relative rounded-[2rem] bg-gradient-to-br from-indigo-600 to-purple-700 p-8 overflow-hidden mb-8 shadow-2xl shadow-indigo-600/20 group cursor-pointer"
        onClick={() => setView("learn")}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="relative z-10">
          <span className="bg-white/20 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest mb-4 inline-block">
            Daily Mission
          </span>
          <h3 className="text-2xl font-black mb-1">Misteri Jantung</h3>
          <p className="text-indigo-100 text-sm mb-6 opacity-80">
            Pelajari cara jantung memompa 7.000 liter darah tiap hari.
          </p>
          <div className="flex items-center gap-2 text-sm font-bold bg-white text-indigo-600 w-fit px-4 py-2 rounded-xl group-active:scale-95 transition">
            Lanjutkan <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* QUICK MENU */}
      <div className="grid grid-cols-2 gap-4">
        <div
          onClick={() => setView("learn")}
          className="bg-slate-900 border border-white/5 p-6 rounded-[2rem] hover:bg-slate-800 transition"
        >
          <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
            <BookOpen className="text-blue-500" size={20} />
          </div>
          <h4 className="font-bold text-sm">Materi</h4>
          <p className="text-[10px] text-slate-500">2/5 Selesai</p>
        </div>
        <div
          onClick={() => setView("game")}
          className="bg-slate-900 border border-white/5 p-6 rounded-[2rem] hover:bg-slate-800 transition"
        >
          <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
            <Gamepad2 className="text-red-500" size={20} />
          </div>
          <h4 className="font-bold text-sm">Mini Game</h4>
          <p className="text-[10px] text-slate-500">Kejar Skor Tinggi</p>
        </div>
      </div>
    </div>
  );
}
