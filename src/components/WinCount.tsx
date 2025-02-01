import { CONSTS } from "../consts/consts"

interface WinCountProps {
    winCount: number[]
}

const WinCount = ({ winCount }: WinCountProps) => {
    const {WIN_COUNT_1, WIN_COUNT_2} = CONSTS;

    return (
        <div className="win-count">
            <p>{`${WIN_COUNT_1} ${winCount[0]}`}</p>
            <p>{`${WIN_COUNT_2} ${winCount[1]}`}</p>
        </div>
    )
}

export default WinCount