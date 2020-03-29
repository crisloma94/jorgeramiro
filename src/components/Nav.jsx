import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
          <ul>
            <a
              href="https://es.linkedin.com/in/jorgeramiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Linkedin</li>
            </a>
            <a
              href="https://www.behance.net/JorgeRamiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Behance</li>
            </a>
            <a
              href="https://www.instagram.com/ramiro.jorge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Instagram</li>
            </a>
          </ul>
        </ul>
      </nav>
    );
  }
}

export default Nav;
