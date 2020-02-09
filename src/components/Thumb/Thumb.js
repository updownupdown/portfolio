import React from "react";
import { Link } from "react-router-dom";
import "../../styles.scss";
import "./Thumb.scss";

function Thumb(props) {
  return (
    <div className="row thumb">
      <div className="col-xs">
        <h3 className="thumb-title">{props.title}</h3>
        <p className="thumb-description">{props.description}</p>
        <Link to={props.link} className="button">
          View Project
        </Link>
      </div>
      <div className="col-xs">
        <div className="thumb-image">
          {props.image && <img src={props.image} alt={props.title} />}
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Thumb;
