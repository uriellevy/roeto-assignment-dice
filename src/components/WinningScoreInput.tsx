import React from "react";
import { CONSTS } from "../consts/consts";

interface WinningScoreInputProps {
  setWinningScore: (score: number) => void;
  winningScore: number
}

const WinningScoreInput: React.FC<WinningScoreInputProps> = ({ setWinningScore, winningScore }) => {
  const {WINNING_SCORE_LABEL} = CONSTS;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScore = +event.target.value;
    if (newScore > 0) setWinningScore(newScore);
  };

  return (
    <div>
      <label>{WINNING_SCORE_LABEL}</label>
      <input type="number" onChange={handleChange} value={winningScore}/>
    </div>
  );
};

export default WinningScoreInput;