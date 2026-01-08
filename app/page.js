"use client";
import React, { useState } from "react";
import BottomNav from "@/components/ButtonNav";
import Game from "@/components/Game";
import Header from "@/components/Header";
import HomeView from "./HomeView/page";
import LearnView from "./LearnView/page";
import KuisView from "./KuisView/page";

export default function HemoLearnApp() {
  const [view, setView] = useState("home");
  const [activeModule, setActiveModule] = useState(0);

  return (
    <div className="h-screen w-full bg-slate-950 text-slate-50 flex flex-col font-sans select-none overflow-x-hidden overflow-y-auto">
      {/* HEADER */}
      <Header />

      {/* VIEWPORT */}
      <main className="flex-1 overflow-y-auto pb-24">
        {/* HOME VIEW */}
        {view === "home" && <HomeView setView={setView} />}

        {/* LEARN VIEW */}
        {view === "learn" && (
          <LearnView
            setView={setView}
            activeModule={activeModule}
            setActiveModule={setActiveModule}
          />
        )}

        {/* KUIS VIEW */}
        {view === "kuis" && (
          <KuisView
            setView={setView}
            activeModule={activeModule}
            setActiveModule={setActiveModule}
          />
        )}

        {/* GAME VIEW */}
        {view === "game" && (
          <div className="h-full w-full absolute inset-0 z-50">
            <Game onExit={() => setView("home")} />
          </div>
        )}
      </main>

      {/* BOTTOM NAV BAR */}
      <BottomNav
        view={view}
        setView={setView}
        setActiveModule={setActiveModule}
      />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-in { animation: fadeIn 0.5s ease-out; }
        ::-webkit-scrollbar { display: none; }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
}
