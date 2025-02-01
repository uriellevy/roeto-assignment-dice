import React from "react";
import { CONSTS } from "../consts/consts";

interface PlayerProps {
  id: number;
  score: number;
  active: boolean;
}

const Player: React.FC<PlayerProps> = ({ id, score, active }) => {
    const {PLAYER_LABEL, SCORE_LABEL} = CONSTS;

  return (
    <div className={`player ${active ? "active" : ""}`}>
      <h2>{`${PLAYER_LABEL} ${id + 1}`} </h2>
      <p>{`${SCORE_LABEL} ${score}`}</p>
    </div>
  );
};

export default Player;