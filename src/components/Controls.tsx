import React from "react";
import { CONSTS } from "../consts/consts";

interface ControlsProps {
    onRoll: (dice1: number, dice2: number) => void;
    onHold: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onRoll, onHold }) => {
    const {ROLL_LABEL, HOLD_LABEL} = CONSTS;
    const rollDice = () => {
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        onRoll(dice1, dice2);
    };

    return (
        <div className="controls">
            <button onClick={rollDice}>{ROLL_LABEL}</button>
            <button onClick={onHold}>{HOLD_LABEL}</button>
        </div>
    );
};

export default Controls;