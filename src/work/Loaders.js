import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";
import "./loaders/loaders.scss";
import { motion } from "framer-motion";

function Loaders(props) {
  return (
    <>
      <Browse component="Loaders" pos="top" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="panel">
          <Grid>
            <Grid.Row>
              <Grid.Col xs={12}>
                <div className="loader-wrap loader-wrap-1">
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
                <div className="loader-wrap loader-wrap-2">
                  <div className="loader loader-2">
                    <div className="loading">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="loading2">
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
                <div className="loader-wrap loader-wrap-3">
                  <div className="loader loader-3">
                    <div className="loading">
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
                <div className="loader-wrap loader-wrap-4">
                  <div className="loader loader-4">
                    <div className="loading">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="loading2">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="lines">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
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
                <div className="loader-wrap loader-wrap-5">
                  <div className="loader loader-5">
                    <div className="loading">
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
                <div className="loader-wrap loader-wrap-6">
                  <div className="loader loader-6">
                    <div className="loading">
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
        <Browse component="Loaders" pos="bottom" />
      </motion.div>
    </>
  );
}

export default Loaders;
