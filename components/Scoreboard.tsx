type Props = {
    score: { X: number; O: number; draws: number };
};

export function Scoreboard({ score }: Props) {
    return (
        <>
            <div className="flex flex-col justify-center p-6 bg-white shadow-md items-center w-full  rounded-2xl">
                <h1 className="text-2xl font-bold text-black text-center">Scoreboard</h1>

                <div className="flex justify-center space-x-8 font-regular p-6 text-2xl">
                    <div className="text-blue-700 items-center ">
                        <span>  Player X: </span>
                        <p className="item-center justify-center flex"> {score.X}</p>
                    </div>
                    <div className="text-yellow-700 items-center ">
                        <span>  Draw: </span>
                        <p className="item-center justify-center flex"> {score.draws}</p>
                    </div>
                    <div className="text-red-700 items-center ">
                        <span>  Player X: </span>
                        <p className="item-center justify-center flex"> {score.O}</p>
                    </div>


                </div>
            </div>
        </>
    );
}
