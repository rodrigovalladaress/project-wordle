import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { checkGuess, checkIfGuessIsAnswer } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("guessing");
  const [guessesInfo, setGuessesInfo] = React.useState([]);

  /**
   *
   * @param {string} guess
   */
  function handleGuessSubmit(guess) {
    const guessInfo = checkGuess(guess, answer);
    const newGuessInfo = [...guessesInfo, guessInfo];
    setGuessesInfo(newGuessInfo);

    const isAnswer = checkIfGuessIsAnswer(guessInfo);
    const numGuesses = newGuessInfo.length;
    if (isAnswer) {
      setGameStatus("won");
    } else if (numGuesses === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <PreviousGuesses guessesInfo={guessesInfo} />
      <GuessInput
        disabled={gameStatus !== "guessing"}
        onSubmit={handleGuessSubmit}
      />
      {gameStatus === "won" && <HappyBanner numGuesses={guessesInfo.length} />}
      {gameStatus === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
