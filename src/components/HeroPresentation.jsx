import React, { useEffect, useState } from "react";
import "./../resources/styles/HeroPresentation.scss";

const HeroPresentation = (props) => {
  const [itemOnAnimation, setItemOnAnimation] = useState(0);

  useEffect(() => {
    console.log("useeffect");
    const interval = setInterval(() => {
      setItemOnAnimation(itemOnAnimation + 0.5);
    }, 500);
    if (itemOnAnimation > 3) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [itemOnAnimation]);

  return (
    <section className="hero-presentation">
      <div className="hero-title">
        <h1 className={`${itemOnAnimation <= 2 ? "animate" : "invisible"}`}>
          Jorge
        </h1>
        <h1 className={`${itemOnAnimation >= 2 ? "animate" : "invisible"}`}>
          Ramiro
        </h1>
      </div>
      <h2
        className={`hero-subtitle ${
          itemOnAnimation >= 3 ? "animate" : "invisible"
        }`}
      >
        Footwear designer
      </h2>
    </section>
  );
};

export default HeroPresentation;
