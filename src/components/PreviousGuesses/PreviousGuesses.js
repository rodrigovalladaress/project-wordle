import React from "react";
import { range } from "../../utils";
import PreviousGuessRow from "../PreviousGuessRow/PreviousGuessRow";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function PreviousGuesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <PreviousGuessRow key={i}>{guesses[i] || ""}</PreviousGuessRow>
      ))}
    </div>
  );
}

export default PreviousGuesses;
