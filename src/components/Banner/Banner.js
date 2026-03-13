import React from "react";

function Banner({ variant, onRestart, children }) {
  return (
    <div className={`banner ${variant || ""}`}>
      <div className="banner-content">{children}</div>
      <div className="banner-actions">
        <button className="banner-button" onClick={onRestart}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default Banner;
