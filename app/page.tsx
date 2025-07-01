'use client';

import { useTicTacToe } from "@/hooks/useTicTacToe";
import { Board } from "@/components/Board";
import { GameStatus } from "@/components/GameStatus";
import { Scoreboard } from "@/components/Scoreboard";
import { Button } from "@/components/ui/button";

export default function Home() {
  const {
    board,
    isXNext,
    winner,
    isDraw,
    handleClick,
    reset,
    newgame,
    score,
  } = useTicTacToe();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 px-6 py-10 flex flex-col items-center">

      <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight text-center">
        Tic-Tac-Toe
      </h1>
      <p className="text-lg text-gray-500 mt-1 mb-10 text-center">
        Challenge your friends in this classic game!
      </p>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full max-w-5xl">
        <div className="order-1 md:order-2 flex flex-col gap-6 w-full md:w-1/2">
          <div className="bg-white rounded-xl shadow-md p-6 text-center text-xl font-semibold text-blue-600">
            <GameStatus winner={winner} isDraw={isDraw} isXNext={isXNext} />
          </div>

          <Scoreboard score={score} />

          <div className="flex justify-center gap-4">
            <Button
              className="p-4 w-1/2 bg-blue-400 text-white hover:text-white hover:bg-blue-800 rounded-xl"
              onClick={newgame}>
              New Game
            </Button>
            <Button
              className="p-4 w-1/2 bg-red-400 text-white hover:text-white hover:bg-red-800 rounded-xl"
              onClick={reset}>
              Reset All
            </Button>
          </div>
        </div>

        <div className="order-2 md:order-1 w-full md:w-1/2">
          <Board board={board} onClick={handleClick} />
        </div>
      </div>


      <footer className="mt-16 text-sm text-gray-500 text-center">
        Built By Joshua La Rosa
      </footer>
    </main>
  );
}
