import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";

function Rebrand(props) {
  return (
    <div className="panel">
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <Browse component="Rebrand" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row className="middle-xs">
          <Grid.Col>
            <img
              className="spaced"
              src="/texada_rebrand/Texada_Rebrand-1.jpg"
              alt="freelance website"
            />

            <img
              className="spaced"
              src="/texada_rebrand/Texada_Rebrand.jpg"
              alt="freelance website"
            />

            <img
              className="spaced"
              src="/texada_rebrand/Texada_Rebrand-2.jpg"
              alt="freelance website"
            />
            <img
              className="spaced"
              src="/texada_rebrand/Texada_Rebrand-3.jpg"
              alt="freelance website"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Rebrand;
