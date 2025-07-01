import { useState } from 'react';
type Player = 'X' | 'O';


export function useTicTacToe() {
    const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [score, setScore] = useState<{ X: number; O: number; draws: number; }>({
        X: 0,
        O: 0,
        draws: 0,
    });

    const winner = calculateWinner(board);
    const isDraw = board.every(Boolean) && !winner;

    const handleClick = (index: number) => {
        if (board[index] || winner) return;
        const currentPlayer: Player = isXNext ? 'X' : 'O';
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const newWinner = calculateWinner(newBoard);
        if (newWinner) {
            setScore((prev) => ({
                ...prev,
                [newWinner]: prev[newWinner] + 1, // ✅ No TS error now
            }));
        } else if (newBoard.every(cell => cell !== null)) {
            // No winner and board full = draw
            setScore((prev) => ({
                ...prev,
                draws: prev.draws + 1,
            }));
        }
    };

    // calculate the draw status

    const reset = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    const newgame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setScore({ X: 0, O: 0, draws: 0 });
    }


    return {
        board,
        isXNext,
        winner,
        isDraw,
        handleClick,
        reset,
        score,
        newgame,
    };
}

function calculateWinner(squares: (Player | null)[]): Player | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
