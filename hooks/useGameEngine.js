import { useEffect, useRef } from "react";
import { createGameState, updateGame } from "@/components/game/gameEngine";

export default function useGameEngine({ gameStarted, gameOver, score }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    const state = createGameState(canvas);
    let animationId;

    const loop = () => {
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      updateGame(state, canvas, score);
      animationId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(animationId);
  }, [gameStarted, gameOver]);

  return canvasRef;
}
