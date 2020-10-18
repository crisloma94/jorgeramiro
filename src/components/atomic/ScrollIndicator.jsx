import React from "react";
import "./../../resources/styles/atomic/ScrollIndicator.scss";

const ScrollIndicator = (props) => {
  let animationTimer = props.animationTimer;
  return (
    <div className="scroll-warning">
      <div
        className={`scroll-indicator ${
          animationTimer >= 2 ? "animate" : "invisible"
        }`}
      >
        <div className={`${animationTimer >= 2 ? "scroll-border" : ""}`}></div>
      </div>
      <p
        className={`scroll-text ${
          animationTimer >= 3 ? "animate" : "invisible"
        }`}
      >
        Scroll down
      </p>
    </div>
  );
};

export default ScrollIndicator;
