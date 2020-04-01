import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import "../components/Grid.scss";

const resumeLink = "./resume/James_Carmichael_-_Resume_(Apr_2020).pdf";

function About(props) {
  return (
    <div id="about" className="panel panel-grey">
      <Grid>
        <Grid.Row>
          <Grid.Col xs={12} lg={6}>
            <h1>About</h1>
            <p>
              I'm passionate about aesthetically pleasing designs and enjoyable,
              frictionless user experiences. I believe in continuous growth and
              learning and I pride myself in being highly organized and
              efficient, though at the end of the day, I just love organizing
              things and making them look just right.
            </p>
            <p>
              Beside UI/UX design, I'm love hiking, camping, piano, politics,
              technology, and philosophy.
            </p>
            <ul>
              <li>Figma, Adobe Illustrator, Photoshop</li>
              <li>Strong knowledge of HTML, CSS/LESS/SASS, JS</li>
              <li>Working knowledge of Git, React, VS Code</li>
              <li>
                10 years experience in agency and freelance web and print design
              </li>
              <li>1 year experience as UI/UX Designer (web/mobile apps)</li>
            </ul>
          </Grid.Col>
          <Grid.Col className="col-resume" xs={12} lg={6}>
            <a
              className="img-link-hover"
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./resume/Resume.png" alt="resume preview" />
            </a>
            <br />
            <a
              className="button"
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default About;
