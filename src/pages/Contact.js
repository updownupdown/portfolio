import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Obfuscate from "react-obfuscate";

function Contact(props) {
  return (
    <div id="contact" className="panel panel-grey">
      <Grid>
        <Grid.Row className="middle-xs">
          <Grid.Col xs={12} lg={6}>
            <h1>Contact James</h1>

            <h4 className="contact-email">
              <Obfuscate email="updownupdown@gmail.com" />
              <br />
              <a
                className="linkedin-link"
                href="https://www.linkedin.com/in/james-carmichael-2796b3b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </h4>
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
