import React, { Component } from "react";
import PropTypes from "prop-types";
import { ProjectList } from "../../work/ProjectList.js";

import "./Browse.scss";

export default class Browse extends Component {
  static propTypes = {
    component: PropTypes.string.isRequired
  };

  static defaultProps = {
    component: ""
  };

  render() {
    // Find place in project list
    const index = ProjectList.findIndex(
      x => x.component === this.props.component
    );
    const title = ProjectList[index].title;

    // Find prev/next projects
    const listSize = ProjectList.length - 1;
    const prev =
      index === 0 ? ProjectList[listSize].link : ProjectList[index - 1].link;
    const next =
      index === listSize ? ProjectList[0].link : ProjectList[index + 1].link;

    return (
      <div className="browse">
        <a href={prev} className="browse-btn browse-btn-prev">
          Previous
        </a>
        <h1>{title}</h1>
        <a href={next} className="browse-btn browse-btn-next">
          Next
        </a>
      </div>
    );
  }
}
