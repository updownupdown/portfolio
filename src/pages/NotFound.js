import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "../components/Grid/Grid.js";

function Home(props) {
  return (
    <div id="intro" className="panel panel-grey">
      <Grid>
        <Grid.Row className="center-xs">
          <Grid.Col>
            <h2>404 - Page Not Found</h2>
            <Link to="/#intro" className="button">
              Go Home
            </Link>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Home;
