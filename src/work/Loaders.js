import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";
import "./loaders/loaders.scss";

function Loaders(props) {
  return (
    <>
      {/* <Browse component="Loaders" pos="top" /> */}
      <div className="panel">
        <Grid>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="loader-wrap">
                <div className="loader loader-1">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="line"></div>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="loader-wrap">
                <div className="loader loader-2">
                  <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="loading2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="loader-wrap">
                <div className="loader loader-3">
                  <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="loader-wrap">
                <div className="loader loader-4">
                  <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="loader-wrap">
                <div className="loader loader-5">
                  <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="loader-wrap">
                <div className="loader loader-6">
                  <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      {/* <Browse component="Loaders" pos="bottom" /> */}
    </>
  );
}

export default Loaders;
