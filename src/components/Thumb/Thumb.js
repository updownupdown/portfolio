import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "../../components/Grid/Grid.js";
import "../../styles.scss";
import "./Thumb.scss";

function Thumb(props) {
  return (
    <Grid.Col className="thumb middle-xs" xs={12} lg={12}>
      <div className="thumb-wrap">
        <a className="thumb-image" href={props.link}>
          {props.image && (
            <img
              className="thumb-image-plain"
              src={props.image}
              alt={props.title}
            />
          )}
          {props.children}
        </a>
        <div className="thumb-text">
          <h3 className="thumb-title">{props.title}</h3>
          <p className="thumb-description">{props.description}</p>
          <Link to={props.link} className="button">
            View
          </Link>
        </div>
      </div>
    </Grid.Col>
  );
}

export default Thumb;
