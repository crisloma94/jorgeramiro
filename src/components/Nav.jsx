import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../resources/styles/Nav.scss";
import linkedinIcon from "./../resources/images/icons/linkedin.svg";
import behanceIcon from "./../resources/images/icons/behance.svg";
import instagramIcon from "./../resources/images/icons/instagram.svg";
import socialMediaIcon from "./../resources/images/icons/rrss.svg";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation">
        <ul className="navbar-navigation">
          <li>
            <Link className="navlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/">
              Contact
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/about">
              About
            </Link>
          </li>
        </ul>
        <ul className="navbar-socialmedia">
          <li className="dropdown dropdown-top dropdown-mobile dropdown-tablet">
            <a className="socialmedia-dropdown" href="#">
              <img src={socialMediaIcon} alt="social media icon" />
            </a>
            <ul className="socialmedia-links">
              <li className="navicon">
                <a
                  href="https://es.linkedin.com/in/jorgeramiro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="linkedin icon" />
                </a>
              </li>
              <li className="navicon">
                <a
                  href="https://www.behance.net/JorgeRamiro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={behanceIcon} alt="behance icon" />
                </a>
              </li>
              <li className="navicon">
                <a
                  href="https://www.instagram.com/ramiro.jorge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="instagram icon" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
