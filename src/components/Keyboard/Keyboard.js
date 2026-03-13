import React from "react";

const KEYS = Object.freeze([
  Object.freeze(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]),
  Object.freeze(["A", "S", "D", "F", "G", "H", "J", "K", "L"]),
  Object.freeze(["Z", "X", "C", "V", "B", "N", "M"]),
]);

function Keyboard({ keyClass, disabled, onKeyPressed }) {
  return (
    <div className="keyboard">
      {KEYS.map((row, i) => (
        <div className="keyboard-row" key={i}>
          {row.map((key) => (
            <button
              key={key}
              className={`keyboard-key ${keyClass?.[key] || ""}`}
              onClick={() => onKeyPressed?.(key)}
              disabled={disabled}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
