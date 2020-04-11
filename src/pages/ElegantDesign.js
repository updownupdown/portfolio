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
        Beauty is observed
        <br />
        As effortless harmony
        <br />
        And crips SVGs.
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
        Avoid useless clicks.
      </p>
    ),
  },
  {
    heading: "adaptive",
    content: (
      <p>
        Evolve and adapt
        <br />
        Support people and their ways
        <br />
        Except IE 9.
      </p>
    ),
  },
  {
    heading: "intuitive",
    content: (
      <p>
        Everything makes sense
        <br />
        Without prior experience
        <br />
        Tooltips just in case.
      </p>
    ),
  },
  {
    heading: "informed",
    content: (
      <p>
        Learn and ask feedback,
        <br />
        Test designs with real users
        <br />
        Tim Hortons gift cards.
      </p>
    ),
  },
  {
    heading: "collaborative",
    content: (
      <p>
        Overcome limits,
        <br />
        Blending people, skills, passions,
        <br />
        And Stack Overflow.
      </p>
    ),
  },
  {
    heading: "universal",
    content: (
      <p>
        Design like nature,
        <br />
        Universal principles
        <br />
        Transferable skills.
      </p>
    ),
  },
  {
    heading: "fun",
    content: (
      <p>
        Use Figma all day
        <br />
        Clean and polish CSS
        <br />
        Transition ease all.
      </p>
    ),
  },
  {
    heading: "balanced",
    content: (
      <p>
        Bestowing white space
        <br />
        Heed excess, follow reason
        <br />
        User screens are small.
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
