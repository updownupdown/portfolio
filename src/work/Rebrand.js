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
              src="/texada_rebrand/Texada_Rebrand-1.jpg"
              alt="freelance website"
            />
          </Grid.Col>
          {/* <Grid.Col>
            <div className="textbox">
              <h5>Something</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.
              </p>
            </div>
          </Grid.Col> */}
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <img
              src="/texada_rebrand/Texada_Rebrand.jpg"
              alt="freelance website"
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <img
              src="/texada_rebrand/Texada_Rebrand-2.jpg"
              alt="freelance website"
            />
            <img
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
