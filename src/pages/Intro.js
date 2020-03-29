import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import "../components/Grid.scss";

function Intro(props) {
  return (
    <>
      <div id="intro" className="panel panel-grey panel-intro">
        <Grid>
          <Grid.Row className="middle-xs">
            <Grid.Col>
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
            </Grid.Col>
            <Grid.Col>
              <img className="block" src="./images/Intro.jpg" alt="Intro" />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      <div className="panel panel-construction">
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <Grid.Col>
                <div className="under-construction">
                  This website is under construction, don't mind the mess!
                </div>
              </Grid.Col>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default Intro;
