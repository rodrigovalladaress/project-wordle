import React from "react";
import { range } from "../../utils";

function PreviousGuessRow({ children }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className="cell">
          {children[i]}
        </span>
      ))}
    </p>
  );
}

export default PreviousGuessRow;
