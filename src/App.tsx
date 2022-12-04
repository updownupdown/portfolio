import React from "react";
import { Projects } from "./Projects";

const resumeLink = "./files/James_Carmichael_-_Resume_(Dec_2022).pdf";

function App() {
  return (
    <div className="main">
      <header className="header-wrap">
        <div className="centered-content">
          <div className="header">
            <div className="header__top">
              <div className="header__top__name">
                <h1>James Carmichael</h1>
                <h2>Product Designer</h2>
              </div>

              <ul className="header__top__contact">
                <li>
                  <a
                    href="https://www.linkedin.com/in/james-carmichael-2796b3b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="resume-img-link"
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <h3 className="header__slogan">
              Elegant designs for
              <br />
              interesting problems.
            </h3>
          </div>
        </div>
      </header>

      <div className="projects-wrap">
        <div className="centered-content">
          <div className="projects">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
