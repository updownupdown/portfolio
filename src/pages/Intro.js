import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Grid } from "../components/Grid/Grid.js";

import "./Intro.scss";

function Intro(props) {
  return (
    <>
      <div
        id="intro"
        className="panel panel-grey panel-intro panel-bottom-shadow"
      >
        <Grid>
          <Grid.Row className="middle-xs" xs={12} lg={6}>
            <Grid.Col>
              <h1>
                Hello, I'm
                <br />
                James Carmichael.
              </h1>
              <h2>
                I'm a UI/UX Designer from Kitchener and
                <br />
                I'm passionate about{" "}
                <Link smooth to="/#elegant-design">
                  elegant design
                </Link>
                .
              </h2>
            </Grid.Col>
            <Grid.Col xs={12} lg={6}>
              <img
                className="block"
                src="./images/home/intro-screen.png"
                alt="Intro"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default Intro;
