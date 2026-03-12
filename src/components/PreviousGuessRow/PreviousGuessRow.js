import React from "react";
import { range } from "../../utils";

function PreviousGuessRow({ value: guessInfo }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className={`cell ${guessInfo?.[i]?.status || ""}`}>
          {guessInfo?.[i]?.letter}
        </span>
      ))}
    </p>
  );
}

export default PreviousGuessRow;
