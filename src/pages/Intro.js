import React from "react";
import { Grid } from "../components/Grid/Grid.js";

function Intro(props) {
  return (
    <>
      <div
        id="intro"
        className="panel panel-grey panel-intro panel-bottom-shadow"
      >
        <Grid>
          <Grid.Row className="middle-xs" xs={12} lg={4}>
            <Grid.Col>
              <h2>
                <span className="lighter">I’m a UI/UX Designer and</span>
                <br />
                <span className="darker">I love elegant designs.</span>
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
            <Grid.Col xs={12} lg={8}>
              <img className="block" src="./images/Intro.png" alt="Intro" />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default Intro;
