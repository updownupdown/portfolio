import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";

function TexadaWeb(props) {
  return (
    <div className="panel">
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <Browse component="TexadaWeb" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row className="middle-xs">
          <Grid.Col>
            <img
              className="spaced shadowed"
              src="/texada_web/work-order-list.jpg"
              alt="freelance website"
            />
            <img
              className="spaced shadowed"
              src="/texada_web/ticket-edit.jpg"
              alt="freelance website"
            />
            <img
              className="spaced shadowed"
              src="/texada_web/ticket-scheduling.jpg"
              alt="freelance website"
            />
            <img
              className="spaced shadowed"
              src="/texada_web/quick-receiving.jpg"
              alt="freelance website"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default TexadaWeb;
