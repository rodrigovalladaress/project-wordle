import React from "react";
import Banner from "../Banner/Banner";

function HappyBanner({ numGuesses, onRestart }) {
  return (
    <Banner variant="happy" onRestart={onRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default HappyBanner;
