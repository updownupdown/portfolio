import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";
import { motion } from "framer-motion";

function Chords(props) {
  return (
    <>
      <Browse component="Chords" pos="top" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="panel">
          <Grid>
            <Grid.Row>
              <Grid.Col xs={12}>
                <div className="textbox white">
                  <h3>Piano Chords</h3>
                  <p>
                    I've been learning the piano for a few years, and wanted an
                    app to help me learn music theory. The goal of this project
                    was to create a playable keyboard with selectable notes that
                    would also show the relationship between notes, keys,
                    chords, staff, and the circle of fifth. Since this is was a
                    personal project, I didn't have to worry too much about
                    complexity, and went overboard cramming in features and
                    making everything clickable. It was also a really good
                    opportunity to get better at React development.
                  </p>

                  <p>
                    Interactivity was an important aspect of the project; design
                    went through countless iterations as additional
                    relationships and features were added. The biggest challenge
                    was to keep the interface reasonably simple while showing as
                    much information and relationships as possible. Argualy
                    useful features include: a sine wave visualizer with zoom,
                    chord detection based on selected notes, intervals shown on
                    hover, and the ability to save and replay a series of
                    chords. The app is in beta, you can{" "}
                    <a
                      href="https://updownupdown.github.io/chords/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      try it here
                    </a>
                    , or see/fork the code on{" "}
                    <a
                      href="https://github.com/updownupdown/chords"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub here
                    </a>
                    .
                  </p>

                  <a
                    className="button"
                    href="https://updownupdown.github.io/chords/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try it now!
                  </a>
                </div>
              </Grid.Col>
              <Grid.Col xs={12}>
                <img
                  src="/images/chords/piano-chords.png"
                  alt="Piano Chords web app"
                  className="shadowed spaced"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>
      </motion.div>
      <Browse component="Chords" pos="bottom" />
    </>
  );
}

export default Chords;
