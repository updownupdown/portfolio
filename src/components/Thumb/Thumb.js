import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "../../components/Grid/Grid.js";
import "../../styles.scss";
import "./Thumb.scss";

function Thumb(props) {
  return (
    <Grid.Col className="thumb" xs={12} lg={6}>
      <a className="thumb-image" href={props.link}>
        {props.image && <img src={props.image} alt={props.title} />}
        {props.children}
      </a>
      <h3 className="thumb-title">{props.title}</h3>
      <p className="thumb-description">{props.description}</p>
      <Link to={props.link} className="button button-outline">
        View
      </Link>
    </Grid.Col>
  );
}

export default Thumb;
