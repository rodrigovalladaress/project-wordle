import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesInfo, setGuessesInfo] = React.useState([]);

  /**
   *
   * @param {string} guess
   */
  function handleGuessSubmit(guess) {
    setGuessesInfo([...guessesInfo, checkGuess(guess, answer)]);
  }

  return (
    <>
      <PreviousGuesses guessesInfo={guessesInfo} />
      <GuessInput onSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
