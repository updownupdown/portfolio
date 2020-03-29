import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";

function Components(props) {
  return (
    <div className="panel">
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <Browse component="Components" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <img className="spaced" src="/components/inputs.jpg" alt="lorem" />
            <img className="spaced" src="/components/tables.jpg" alt="lorem" />
            <img
              className="spaced"
              src="/components/pagination.jpg"
              alt="lorem"
            />
            <img className="spaced" src="/components/buttons.jpg" alt="lorem" />
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Components;
