import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Obfuscate from "react-obfuscate";
import Email from "../components/Icons/Email";
import Linkedin from "../components/Icons/Linkedin";

function Contact(props) {
  return (
    <div id="contact" className="panel">
      <Grid>
        <Grid.Row className="middle-xs">
          <Grid.Col xs={12} lg={6}>
            <h1>Contact</h1>
            <div className="contact-links">
              <span className="contact-link">
                <Obfuscate email="updownupdown@gmail.com">
                  <Email />
                </Obfuscate>
                <Obfuscate email="updownupdown@gmail.com" />
              </span>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/james-carmichael-2796b3b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </Grid.Col>
          <Grid.Col xs={12} lg={6}>
            <img src="/images/james-photo.jpg" alt="James Carmichael" />
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Contact;
