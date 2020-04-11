import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid } from "../../components/Grid/Grid.js";
import { ProjectList } from "../../work/ProjectList.js";
import ArrowBack from "../Icons/ArrowBack";
import ArrowForward from "../Icons/ArrowForward";

import { motion } from "framer-motion";

import "./Browse.scss";

export default class Browse extends Component {
  static propTypes = {
    component: PropTypes.string.isRequired,
    pos: PropTypes.string.isRequired,
  };

  static defaultProps = {
    component: "",
    pos: "",
  };

  render() {
    // Find place in project list
    const index = ProjectList.findIndex(
      (x) => x.component === this.props.component
    );
    const title = ProjectList[index].title;

    // Find prev/next projects
    const listSize = ProjectList.length - 1;
    const prev =
      index === 0 ? ProjectList[listSize].link : ProjectList[index - 1].link;
    const next =
      index === listSize ? ProjectList[0].link : ProjectList[index + 1].link;

    return (
      <div
        className={classNames("panel panel-grey panel-browse", {
          "panel-bottom-shadow": this.props.pos === "top",
          "panel-top-shadow": this.props.pos === "bottom",
        })}
      >
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <div className={`browse browse-${this.props.pos}`}>
                <a href={prev} className="browse-btn browse-btn-prev">
                  <ArrowBack />
                </a>

                {this.props.pos === "top" && (
                  <div className="browse-heading-group">
                    <h6 className="browse-heading-work">Work</h6>
                    <motion.h1
                      className="browse-heading-title"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {title}
                    </motion.h1>
                  </div>
                )}

                {this.props.pos === "bottom" && (
                  <div className="browse-heading-group">
                    <h4 className="browse-heading-more">Browse Work</h4>
                  </div>
                )}

                <a href={next} className="browse-btn browse-btn-next">
                  <ArrowForward />
                </a>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
