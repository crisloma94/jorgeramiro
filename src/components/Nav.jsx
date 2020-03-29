import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../resources/styles/Nav.scss";
import linkedinIcon from "./../resources/images/icons/linkedin.svg";
import behanceIcon from "./../resources/images/icons/behance.svg";
import instagramIcon from "./../resources/images/icons/instagram.svg";

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
              <li>
                <img src={linkedinIcon} alt="linkedin icon" />
              </li>
            </a>
            <a
              href="https://www.behance.net/JorgeRamiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <img src={behanceIcon} alt="behance icon" />
              </li>
            </a>
            <a
              href="https://www.instagram.com/ramiro.jorge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <img src={instagramIcon} alt="instagram icon" />
              </li>
            </a>
          </ul>
        </ul>
      </nav>
    );
  }
}

export default Nav;
