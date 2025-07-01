'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

type Props = {
    winner: string | null;
    isDraw: boolean;
    isXNext: boolean;
};

export function GameStatus({ winner, isDraw, isXNext }: Props) {
    useEffect(() => {
        if (winner) {
            toast.success(` Player ${winner} wins!`);
        } else if (isDraw) {
            toast.warning(` It's a draw!`);
        } else {

            isXNext
                ? toast.info(' Turn: Player X')
                : toast.error(' Turn: Player O');
        }
    }, [winner, isDraw, isXNext]);


    if (winner)
        return (
            <p className="text-2xl font-bold text-green-600">
                Winner: {winner}
            </p>
        );

    if (isDraw)
        return (
            <p className="text-2xl font-semibold text-gray-600">
                {`It's a draw!`}
            </p>
        );

    return (
        <div className="p-4 text-center">
            <p className="text-xl text-black">
                Turn:{' '}
                <span
                    className={`font-bold ${isXNext ? 'text-blue-600' : 'text-red-600'
                        }`}
                >
                    {isXNext ? 'X' : 'O'}
                </span>
            </p>
        </div>
    );
}
