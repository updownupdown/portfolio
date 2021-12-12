import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Obfuscate from "react-obfuscate";
import Email from "../components/Icons/Email";
import Linkedin from "../components/Icons/Linkedin";

import "./Contact.scss";

function Contact(props) {
  return (
    <div id="contact" className="panel panel-grey panel-top-shadow">
      <Grid>
        <Grid.Row className="middle-xs">
          <Grid.Col>
            <div className="contact-links">
              <img
                className="contact-image"
                src="/images/home/james-photo.jpg"
                alt="James Carmichael"
              />

              <Obfuscate
                className="contact-link contact-link-email"
                email="updownupdown@gmail.com"
                obfuscateChildren={false}
              >
                <Email />
                <span>Email</span>
              </Obfuscate>

              <a
                className="contact-link contact-link-linkedin"
                href="https://www.linkedin.com/in/james-carmichael-2796b3b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Contact;
