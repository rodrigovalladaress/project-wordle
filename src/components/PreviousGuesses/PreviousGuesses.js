import React from "react";

function PreviousGuesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((label, i) => (
        <p key={i} className="guess">
          {label}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
