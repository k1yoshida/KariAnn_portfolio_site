import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Experience</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Lennd</h3>
          <p className="info">
            Web Development Intern
            <span>&bull;</span>
            <em className="date">January 2018 - Present</em>
          </p>

          <p>
            Worked for{" "}
            <a href="www.lennd.com" target="_blank">
              {" "}
              Lennd{" "}
            </a>, event management app company, as a web developer intern.
            Contributed to the management of Lennd's internal UI library, as
            well as built components for the
            <a target="_blank" href="lennd.github.io/marketing/pricing/">
              {" "}
              Lennd marketing page
            </a>.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Synthetic Genomics</h3>
          <p className="info">
            Research Associate
            <span>&bull;</span>
            <em className="date">April 2016 - August 2017</em>
          </p>

          <p>
            Optimized workflow for Algal-biofuel program by organizing
            correspondents across different research groups.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Vetica Labs</h3>
          <p className="info">
            Research Intern
            <span>&bull;</span>
            <em className="date">June 2015 - April 2016</em>
          </p>

          <p>
            Standardized experimental protocol through testing experimental
            conditions. Contributed to long-term research projects in a start-up
            environment.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
