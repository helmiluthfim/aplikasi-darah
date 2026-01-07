import React from "react";
import { Activity, Trophy } from "lucide-react";

export default function Header() {
  return (
    <header className="px-6 py-4 flex justify-between items-center bg-slate-950/50 backdrop-blur-md sticky top-0 z-30">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-rose-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
          <Activity size={18} className="text-white" />
        </div>
        <span className="font-black text-lg tracking-tighter">
          HEMO<span className="text-rose-500">LEARN</span>
        </span>
      </div>
      <div className="flex gap-2">
        <div className="bg-slate-900 border border-white/5 px-3 py-1 rounded-full flex items-center gap-2">
          <Trophy size={14} className="text-yellow-500" />
          <span className="text-xs font-bold">Lvl. 12</span>
        </div>
      </div>
    </header>
  );
}
