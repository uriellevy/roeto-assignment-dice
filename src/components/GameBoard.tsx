import React, { useEffect, useState } from "react";
import Player from "./Player";
import Controls from "./Controls";
import WinningScoreInput from "./WinningScoreInput";
import { CiCirclePlus } from "react-icons/ci";
import { CONSTS } from "../consts/consts";
import Dices from "./Dices";
import WinCount from "./WinCount";

const GameBoard: React.FC = () => {
    const [scores, setScores] = useState([0, 0]);
    const [currentScore, setCurrentScore] = useState(0);
    const [activePlayer, setActivePlayer] = useState(0);
    const [winningScore, setWinningScore] = useState(100);
    const [message, setMessage] = useState("");
    const [gameOver, setGameOver] = useState(false);
    const [diceValues, setDiceValues] = useState<[number, number]>([1, 1]);
    const [winCount, setWinCount] = useState<number[]>(() => {
        const storedWinCount = localStorage.getItem("winCount");
        return storedWinCount ? JSON.parse(storedWinCount) : [0, 0];
    });
    const { RESTART_BTN_LABEL } = CONSTS;

    useEffect(() => {
        const storedWinCount = localStorage.getItem("winCount");
        if (storedWinCount) {
            setWinCount(JSON.parse(storedWinCount));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("winCount", JSON.stringify(winCount));
    }, [winCount]);

    const handleRoll = (dice1: number, dice2: number) => {
        if (gameOver) return;

        setDiceValues([dice1, dice2]);

        if (dice1 === 6 && dice2 === 6) {
            setMessage("Double six! Lost turn!");
            setTimeout(() => {
                setCurrentScore(0);
                setActivePlayer(activePlayer === 0 ? 1 : 0);
                setMessage("");
            }, 1000);
        } else {
            setCurrentScore(currentScore + dice1 + dice2);
        }
    };

    const handleHold = () => {
        if (gameOver) return;
        setScores(prev => {
            const newScores = [...prev];
            newScores[activePlayer] += currentScore;
            return newScores;
        });
        setCurrentScore(0);
        setActivePlayer(activePlayer === 0 ? 1 : 0);

        if (scores[activePlayer] + currentScore >= winningScore) {
            setMessage(`Player ${activePlayer + 1} wins!`);
            setGameOver(true);
            setWinCount((prev) => {
                const newWinCount = [...prev];
                newWinCount[activePlayer] += 1;
                return newWinCount;
            });
        }
    };


    const restartGame = () => {
        setScores([0, 0]);
        setCurrentScore(0);
        setActivePlayer(0);
        setMessage("");
        setWinningScore(100);
        setGameOver(false);
    };

    return (
        <div className="game-board">
            <button className="btn-restart" onClick={restartGame}><CiCirclePlus className="restart-icon" />{RESTART_BTN_LABEL}</button>
            <WinningScoreInput setWinningScore={setWinningScore} winningScore={winningScore} />
            <Player id={0} score={scores[0]} active={activePlayer === 0} />
            <Controls onRoll={handleRoll} onHold={handleHold} />
            <Dices diceValues={diceValues} />
            <Player id={1} score={scores[1]} active={activePlayer === 1} />
            <p className="message">{message}</p>
            <WinCount winCount={winCount}/>
        </div>
    );
};

export default GameBoard;