import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";

interface DicesProps {
    diceValues: [number, number]
}

const Dices = ({ diceValues }: DicesProps) => {

    const renderDice = (number: number) => {
        switch (number) {
            case 1:
                return <FaDiceOne fontSize={40} />;
            case 2:
                return <FaDiceTwo fontSize={40} />;
            case 3:
                return <FaDiceThree fontSize={40} />;
            case 4:
                return <FaDiceFour fontSize={40} />;
            case 5:
                return <FaDiceFive fontSize={40} />;
            case 6:
                return <FaDiceSix fontSize={40} />;
            default:
                return null;
        }
    };

    return (
        <div className="dice-icons">
            {renderDice(diceValues[0])}
            {renderDice(diceValues[1])}
        </div>
    )
}

export default Dices