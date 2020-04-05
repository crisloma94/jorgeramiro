import React, { Component } from "react";
import "./../resources/styles/HeroPresentation.scss";

class HeroPresentation extends Component {
  render() {
    return (
      <section className="hero-presentation">
        <div className="hero-title">
          <h1>Jorge</h1>
          <h1>Ramiro</h1>
        </div>
        <h2 className="hero-subtitle">Footwear designer</h2>
      </section>
    );
  }
}

export default HeroPresentation;
