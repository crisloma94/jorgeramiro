import React, { useEffect, useState } from "react";
import "./../resources/styles/HeroPresentation.scss";

const HeroPresentation = (props) => {
  const [itemOnAnimation, setItemOnAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItemOnAnimation(itemOnAnimation + 0.5);
    }, 500);
    if (itemOnAnimation > 4) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [itemOnAnimation]);

  return (
    <section className="hero-presentation">
      <div className="hero-title">
        <h1 className={`${itemOnAnimation <= 0.5 ? "animate" : "invisible"}`}>
          Jorge
        </h1>
        <h1 className={`${itemOnAnimation >= 1 ? "animate" : "invisible"}`}>
          Ramiro
        </h1>
      </div>
      <div className="scroll-warning">
        <div
          className={`scroll-indicator ${
            itemOnAnimation >= 2 ? "animate" : "invisible"
          }`}
        >
          <div
            className={`${itemOnAnimation >= 2 ? "scroll-border" : ""}`}
          ></div>
        </div>
        <p
          className={`scroll-text ${
            itemOnAnimation >= 3 ? "animate" : "invisible"
          }`}
        >
          Scroll down
        </p>
      </div>
    </section>
  );
};

export default HeroPresentation;
