import React from "react";
import Thumb from "../components/Thumb/Thumb.js";
import "../components/Grid.scss";

function Home(props) {
  return (
    <>
      {/* ===== Intro ===== */}
      <div className="panel panel-grey panel-intro">
        <div className="row">
          <div className="col-xs">
            <h2>
              <span className="lighter">
                I’m a UI/UX Designer
                <br />
                and I
              </span>
              <span className="darker"> love elegant designs.</span>
            </h2>

            <p>
              I manifest my obsession for organizing things into my work by
              creating designs that are both beautiful and efficient.
            </p>
            <p>
              I enjoy collaborating with talented, passionate people, and
              learning while wearing many hats.
            </p>
          </div>
          <div className="col-xs">
            <p>INTRO IMAGE</p>
          </div>
        </div>
      </div>

      {/* ===== Work ===== */}
      <div className="panel">
        <div className="row">
          <div className="col-xs">
            <h1>Work</h1>
          </div>
        </div>
        <Thumb
          link="/component-library/"
          // image=""
          title="Texada Component Library"
          description="A collaboration between designer and developers across teams."
        >
          <h4>Lorem Ipsum Test Child Element</h4>
        </Thumb>
        <Thumb
          link="/component-library/"
          image=""
          title="Texada Component Library"
          description="A collaboration between designer and developers across teams."
        />
      </div>

      {/* ===== About ===== */}
      <div className="panel panel-grey">
        <div className="row">
          <div className="col-xs">
            <h1>About</h1>
            <ul>
              <li>Short intro</li>
              <li>Skills/tools</li>
              <li>View resume</li>
              <li>View LinkedIn</li>
              <li>Contact Me</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
