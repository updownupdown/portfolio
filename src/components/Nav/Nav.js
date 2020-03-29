import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
          <Link smooth to="/#intro" className="nav-title">
            James Carmichael
          </Link>
          <div className="nav-menu">
            <Link smooth to="/#intro" className="item">
              Home
            </Link>
            <Link smooth to="/#work" className="item">
              Work
            </Link>
            <Link smooth to="/#about" className="item">
              About
            </Link>
            <Link smooth to="/#contact" className="item">
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
