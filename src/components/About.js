import React from "react";
import { FaFile } from "react-icons/lib/fa";

import profilePic from "../assets/images/kariann_square.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <div className="profile-pic">
          <img src={profilePic} alt="" />
        </div>
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          <span style={{ fontSize: "16px" }}>Hi There!</span> My name is Kari
          Ann Yoshida, originally from Fremont CA, I moved down to San Diego
          about 6 years ago to attend UC San Diego for a degree in Biochemistry.
          Long story short, after about a year of working in research I decided
          that the lab life wasn't for me, and began learning to code on my own.
          I went through LEARN Academy's 4 month Full-Stack Ruby on Rails Web
          development program, and I am currently looking for opportunities in
          full-stack or front-end development.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Kari Ann Yoshida</span>
              <br />

              <span>yoshidakariann@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a
                href="https://drive.google.com/file/d/1HXRGJ_efDP0el7ogWDoJJe2aABuI5aDL/view?usp=sharing"
                className="button"
                target="_blank"
              >
                <FaFile /> View Full Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
