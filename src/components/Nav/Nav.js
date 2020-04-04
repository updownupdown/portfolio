import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Nav.scss";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: true,
      open: false,
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
      top,
    });
  };

  toggleMenu = (value) => {
    this.setState({ open: value });
  };

  render() {
    return (
      <>
        <div
          className={
            "nav" +
            (this.state.top ? " nav--top" : " nav--not-top") +
            (this.state.open ? " nav--open" : " nav--closed")
          }
        >
          <div className="nav-content">
            <Link to="/#top" className="nav-title">
              James Carmichael
            </Link>
            <div
              className="nav-hamburger"
              onClick={() => this.toggleMenu(!this.state.open)}
            >
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="nav-menu">
              <Link
                smooth
                to="/#top"
                className="item"
                onClick={() => this.toggleMenu(false)}
              >
                Home
              </Link>
              <Link
                smooth
                to="/#work"
                className="item"
                onClick={() => this.toggleMenu(false)}
              >
                Work
              </Link>
              <Link
                smooth
                to="/#about"
                className="item"
                onClick={() => this.toggleMenu(false)}
              >
                About
              </Link>
              <Link
                smooth
                to="/#contact"
                className="item"
                onClick={() => this.toggleMenu(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
