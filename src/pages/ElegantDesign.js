import React, { Component } from "react";
import { Grid } from "../components/Grid/Grid.js";
import ArrowUp from "../components/Icons/ArrowUp";
import ArrowDown from "../components/Icons/ArrowDown";

import "./ElegantDesign.scss";

const designTypes = [
  {
    heading: "beautiful",
    content: (
      <p>
        Recognize beauty
        <br />
        Through effortless harmony
        <br />
        The new nav looks sweet.
      </p>
    ),
  },
  {
    heading: "efficient",
    content: (
      <p>
        By the least effort
        <br />
        Are the greatest things achieved
        <br />
        That's too many clicks.
      </p>
    ),
  },
  {
    heading: "adaptive",
    content: (
      <p>
        Evolve and adapt
        <br />
        With time and situations
        <br />
        So glad IE's dead.
      </p>
    ),
  },
  {
    heading: "intuitive",
    content: (
      <p>
        I know where I am
        <br />
        And what everything will do
        <br />
        Without doing it.
      </p>
    ),
  },
  {
    heading: "informed",
    content: (
      <p>
        Measure everything,
        <br />
        Understand the why and how
        <br />
        You're probably wrong.
      </p>
    ),
  },
  {
    heading: "collaborative",
    content: (
      <p>
        Overcome limits,
        <br />
        Combining skills and backgrounds,
        <br />
        Steve knows python best.
      </p>
    ),
  },
  {
    heading: "universal",
    content: (
      <p>
        Design like nature,
        <br />
        They are one process,-----
        <br />
        They are one process.
      </p>
    ),
  },
];

export default class ElegantDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      heading: designTypes[0].heading,
      content: designTypes[0].content,
    };
  }

  setIndex(newIndex) {
    const content = designTypes[newIndex].content;
    const heading = designTypes[newIndex].heading;

    this.setState({ index: newIndex, heading: heading, content: content });
  }

  clickUp() {
    const newIndex =
      this.state.index === 0 ? designTypes.length - 1 : this.state.index - 1;
    this.setIndex(newIndex);
  }

  clickDown() {
    const newIndex =
      this.state.index === designTypes.length - 1 ? 0 : this.state.index + 1;

    this.setIndex(newIndex);
  }

  render() {
    return (
      <div
        id="elegant-design"
        className="panel panel-grey panel-top-shadow panel-bottom-shadow"
      >
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <div className="ed-wrap">
                <div className="ed-selector">
                  <div className="ed-left">
                    <span className="ed-up" onClick={() => this.clickUp()}>
                      <ArrowUp />
                    </span>
                    <h2>Elegant design is</h2>
                    <span className="ed-down" onClick={() => this.clickDown()}>
                      <ArrowDown />
                    </span>
                  </div>
                  <div className="ed-right">
                    <div
                      className="ed-right-headings"
                      style={{
                        transform: `translateY(50%) translateY(${-(
                          (this.state.index / designTypes.length) *
                          100
                        )}%)`,
                      }}
                    >
                      {designTypes.map((designType, i) => (
                        <h2
                          className={i === this.state.index ? "current" : ""}
                          key={designType.heading}
                          onClick={() => this.setIndex(i)}
                        >
                          {designType.heading}.
                        </h2>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ed-content">{this.state.content}</div>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
