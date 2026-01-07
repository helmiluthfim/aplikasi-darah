import React, { useState, useEffect, useRef } from "react";
import { Shield } from "lucide-react";

const Game = ({ onExit }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    let player = { x: 50, y: canvas.height / 2, size: 20 };
    let bullets = [];
    let enemies = [];
    let frame = 0;

    const handleTouch = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      player.y = touch.clientY - rect.top;
    };
    canvas.addEventListener("touchmove", handleTouch, { passive: false });

    const loop = () => {
      frame++;
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars/Flow background
      ctx.fillStyle = "#1e293b";
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(
          ((frame * 2 + i * 200) % (canvas.width + 50)) - 25,
          Math.sin(frame / 100 + i) * 100 + canvas.height / 2,
          2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      // Player
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#38bdf8";
      ctx.fillStyle = "#f8fafc";
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Shooting
      if (frame % 15 === 0)
        bullets.push({ x: player.x + 20, y: player.y, s: 10 });
      bullets.forEach((b, i) => {
        b.x += b.s;
        ctx.fillStyle = "#fbbf24";
        ctx.fillRect(b.x, b.y - 2, 10, 4);
        if (b.x > canvas.width) bullets.splice(i, 1);
      });

      // Enemies
      if (frame % 60 === 0)
        enemies.push({
          x: canvas.width + 20,
          y: Math.random() * canvas.height,
          s: 3 + score / 200,
          sz: 15,
        });
      enemies.forEach((en, i) => {
        en.x -= en.s;
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(en.x, en.y, en.sz, 0, Math.PI * 2);
        ctx.fill();

        // Hit player
        if (
          Math.hypot(player.x - en.x, player.y - en.y) <
          player.size + en.sz
        ) {
          setHealth((h) => h - 10);
          enemies.splice(i, 1);
        }

        // Hit bullet
        bullets.forEach((b, bi) => {
          if (Math.hypot(b.x - en.x, b.y - en.y) < en.sz + 5) {
            enemies.splice(i, 1);
            bullets.splice(bi, 1);
            setScore((s) => s + 10);
          }
        });

        if (en.x < -20) {
          enemies.splice(i, 1);
          setHealth((h) => h - 5);
        }
      });

      if (health <= 0) setGameOver(true);
      if (!gameOver) animationFrameId = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("touchmove", handleTouch);
    };
  }, [gameStarted, gameOver, health]);

  return (
    <div className="h-full w-full bg-slate-950 flex flex-col relative overflow-hidden">
      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 bg-slate-950/90 text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-3xl rotate-12 flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/20">
            <Shield className="text-white" size={40} />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-tighter">
            ANTIBODI MISSION
          </h2>
          <p className="text-slate-400 text-sm mb-8 max-w-xs">
            Geser jarimu untuk mengontrol Sel Darah Putih dan hancurkan virus
            jahat!
          </p>
          <button
            onClick={() => setGameStarted(true)}
            className="w-full max-w-xs py-4 bg-blue-600 rounded-2xl font-bold text-white shadow-lg shadow-blue-600/30"
          >
            MULAI MISI
          </button>
        </div>
      )}

      {gameOver && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 bg-red-950/95 text-center">
          <h2 className="text-5xl font-black text-white mb-2 italic">
            FAILED!
          </h2>
          <div className="text-red-400 font-bold mb-8 uppercase tracking-widest text-xs">
            Virus Mengambil Alih
          </div>
          <div className="bg-white/10 px-10 py-6 rounded-3xl mb-10">
            <div className="text-xs text-slate-400 uppercase">Skor Kamu</div>
            <div className="text-4xl font-black text-white">{score} XP</div>
          </div>
          <button
            onClick={() => {
              setGameOver(false);
              setHealth(100);
              setScore(0);
            }}
            className="w-full max-w-xs py-4 bg-white text-slate-950 rounded-2xl font-bold mb-3"
          >
            COBA LAGI
          </button>
          <button onClick={onExit} className="text-white/50 text-sm">
            Kembali ke Menu
          </button>
        </div>
      )}

      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 pointer-events-none">
        <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
          <div className="text-[10px] text-blue-400 font-bold uppercase">
            Points
          </div>
          <div className="text-lg font-black text-white">{score}</div>
        </div>
        <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 w-32">
          <div className="text-[10px] text-red-400 font-bold uppercase">
            Health
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full mt-1 overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all duration-300"
              style={{ width: `${health}%` }}
            ></div>
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} className="flex-1 touch-none" />
    </div>
  );
};

export default Game;
