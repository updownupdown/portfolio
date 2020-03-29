import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import "../components/Grid.scss";

const resumeLink = "./resume/James_Carmichael_-_Resume_(Apr_2020).pdf";

function About(props) {
  return (
    <div id="about" className="panel panel-grey">
      <Grid>
        <Grid.Row>
          <Grid.Col>
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
          </Grid.Col>
          <Grid.Col className="col-resume">
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
