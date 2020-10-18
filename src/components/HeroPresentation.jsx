import React, { useEffect, useState } from "react";
import "./../resources/styles/HeroPresentation.scss";
import ScrollIndicator from "./atomic/ScrollIndicator";

const HeroPresentation = (props) => {
  const [animationTimer, setAnimationTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTimer(animationTimer + 0.5);
    }, 500);
    if (animationTimer > 4) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [animationTimer]);

  return (
    <section className="hero-presentation">
      <div className="hero-title">
        <h1 className={`${animationTimer <= 0.5 ? "animate" : "invisible"}`}>
          Jorge
        </h1>
        <h1 className={`${animationTimer >= 1 ? "animate" : "invisible"}`}>
          Ramiro
        </h1>
      </div>
      <ScrollIndicator animationTimer={animationTimer}></ScrollIndicator>
    </section>
  );
};

export default HeroPresentation;
