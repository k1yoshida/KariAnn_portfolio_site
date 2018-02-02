import React from "react";
import {
  FaGithub,
  FaLinkedinSquare,
  FaChevronCircleUp
} from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          <li>
            <a href="https://github.com/k1yoshida">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kariannyoshida/">
              <FaLinkedinSquare />
            </a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
