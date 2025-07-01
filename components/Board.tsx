import { Square } from './Square';

type BoardProps = {
    board: (string | null)[];
    onClick: (index: number) => void;
};

export function Board({ board, onClick }: BoardProps) {
    return (
        <div className="flex flex-wrap w-full bg-white p-6 shadow-lg rounded-2xl mb-10 justify-center items-center max-w-[400px] gap-y-2 gap-x-2">
            {board.map((val, i) => (
                <Square key={i} value={val} onClick={() => onClick(i)} />
            ))}
        </div>
    );
}
