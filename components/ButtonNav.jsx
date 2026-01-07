import React from "react";
import { Home, Layout, Gamepad2, Award } from "lucide-react";

export default function BottomNav({ view, setView, setActiveModule }) {
  return (
    <nav className="fixed bottom-0 w-full px-6 pb-6 pt-2 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent z-40">
      <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-2 flex justify-between items-center shadow-2xl">
        <button
          onClick={() => setView("home")}
          className={`flex-1 flex flex-col items-center py-2 transition ${view === "home" ? "text-white" : "text-slate-500"}`}
        >
          <Home size={20} fill={view === "home" ? "currentColor" : "none"} />
          <span className="text-[10px] mt-1 font-bold">Home</span>
        </button>
        <button
          onClick={() => {
            setView("learn");
            setActiveModule(0);
          }}
          className={`flex-1 flex flex-col items-center py-2 transition ${view === "learn" ? "text-white" : "text-slate-500"}`}
        >
          <Layout size={20} fill={view === "learn" ? "currentColor" : "none"} />
          <span className="text-[10px] mt-1 font-bold">Belajar</span>
        </button>
        <button
          onClick={() => setView("game")}
          className={`flex-1 flex flex-col items-center py-2 transition ${view === "game" ? "text-white" : "text-slate-500"}`}
        >
          <Gamepad2
            size={20}
            fill={view === "game" ? "currentColor" : "none"}
          />
          <span className="text-[10px] mt-1 font-bold">Main</span>
        </button>
        <button className="flex-1 flex flex-col items-center py-2 text-slate-500">
          <Award size={20} />
          <span className="text-[10px] mt-1 font-bold">Rank</span>
        </button>
      </div>
    </nav>
  );
}
