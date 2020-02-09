import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const top = window.pageYOffset === 0 ? true : false;

    this.setState({
      top
    });
  };

  render() {
    return (
      <div className={"nav" + (this.state.top ? " nav--top" : " nav--not-top")}>
        <div className="nav-content">
          <span className="nav-title">James Carmichael</span>
          <div className="nav-menu">
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/work" className="item">
              Work
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
            <Link to="/contact" className="item">
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
