import React from "react";
import { range } from "../../utils";
import PreviousGuessRow from "../PreviousGuessRow/PreviousGuessRow";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function PreviousGuesses({ guessesInfo }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <PreviousGuessRow key={i} value={guessesInfo[i]} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
