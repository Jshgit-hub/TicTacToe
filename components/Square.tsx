
type SquareProps = {
    value: string | null;
    onClick: () => void;
};

export function Square({ value, onClick }: SquareProps) {
    return (
        <button
            onClick={onClick}
            className="w-24 h-24 border-2 rounded-xl flex items-center justify-center text-4xl font-bold hover:bg-gray-100"
        >
            {value === "X" && <span className="text-blue-600">{value}</span>}
            {value === "O" && <span className="text-red-600">{value}</span>}
        </button>
    );
}

