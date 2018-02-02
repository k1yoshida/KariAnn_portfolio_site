import React from "react";
import {
  FaEnvelope,
  FaGithubSquare,
  FaLinkedinSquare
} from "react-icons/lib/fa";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Kari Ann Yoshida</h1>
      <h3>Full-stack developer</h3>
      <h3>Bringing Concepts to Life with Code</h3>
      <hr />
      <ul className="social">
        <li>
          <a href="#">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kariannyoshida/">
            <FaLinkedinSquare />
          </a>
        </li>
        <li>
          <a href="https://github.com/k1yoshida">
            <FaGithubSquare />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Banner;
