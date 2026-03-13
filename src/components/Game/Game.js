import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { checkGuess, checkIfGuessIsAnswer } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import Keyboard from "../Keyboard/Keyboard";

function getRandomWord() {
  const word = sample(WORDS);
  console.info({ word });
  return word;
}

function Game() {
  const [answer, setAnswer] = React.useState(getRandomWord);
  const [gameStatus, setGameStatus] = React.useState("guessing");
  const [guessesInfo, setGuessesInfo] = React.useState([]);
  const [statusPerKey, setStatusPerKey] = React.useState({});
  const [currentGuess, setCurrentGuess] = React.useState("");

  const isGameOver = gameStatus !== "guessing";

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

    const newStatusPerKey = { ...statusPerKey };
    for (let keyInfo of guessInfo) {
      const newStatus = keyInfo.status;
      const previousStatus = newStatusPerKey[keyInfo.letter];
      // Only update the status if the new status is 'better' than the previous
      // one. IDK if this is how Wordle works, but I think it makes sense.
      if (
        previousStatus === "correct" ||
        (previousStatus === "misplaced" && newStatus !== "correct") ||
        (previousStatus === "incorrect" &&
          newStatus !== "correct" &&
          newStatus !== "misplaced")
      ) {
        continue;
      }
      newStatusPerKey[keyInfo.letter] = newStatus;
    }
    setStatusPerKey(newStatusPerKey);

    setCurrentGuess("");
  }

  function handleKeyboardKeyPressed(key) {
    const newCurrentGuess = `${currentGuess}${key}`;
    setCurrentGuess(newCurrentGuess);
    if (newCurrentGuess.length === WORD_LENGTH) {
      handleGuessSubmit(newCurrentGuess);
    }
  }

  function handleRestartGame() {
    setAnswer(getRandomWord());
    setGameStatus("guessing");
    setGuessesInfo([]);
    setStatusPerKey({});
    setCurrentGuess("");
  }

  return (
    <>
      <PreviousGuesses guessesInfo={guessesInfo} />
      <GuessInput
        length={WORD_LENGTH}
        value={currentGuess}
        onChange={setCurrentGuess}
        onSubmit={handleGuessSubmit}
        disabled={isGameOver}
      />
      <Keyboard
        keyClass={statusPerKey}
        onKeyPressed={handleKeyboardKeyPressed}
        disabled={isGameOver}
      />
      {gameStatus === "won" && (
        <HappyBanner
          numGuesses={guessesInfo.length}
          onRestart={handleRestartGame}
        />
      )}
      {gameStatus === "lost" && (
        <SadBanner answer={answer} onRestart={handleRestartGame} />
      )}
    </>
  );
}

export default Game;
