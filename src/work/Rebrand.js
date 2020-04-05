import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";
import { motion } from "framer-motion";

function Rebrand(props) {
  return (
    <>
      <Browse component="Rebrand" pos="top" />
      <motion.div
        className="panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Grid>
          <Grid.Row className="middle-xs">
            <Grid.Col xs={12} lg={5}>
              <div className="textbox">
                <h3>Logo Redesign</h3>
                <p>
                  Texada has used several logo designs over the years, but never
                  had a coherent or consistent style guide or branding strategy.
                  The existing logo looked outdated, was difficult to read, and
                  the colours and symbol did not easily lend themselves to be
                  used across product designs and marketing material.
                </p>
                <p>
                  After discussing with key stakeholders, I suggested a
                  rebranding effort that would modernize the logo and establish
                  a clear style guide while taking into consideration how the
                  new branding would be implemented across our products, print
                  ads, tradeshow banners, etc.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col xs={12} lg={7}>
              <img
                className="spaced align-right"
                src="/images/texada_rebrand/new-logo.png"
                alt="Updated Logo"
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row className="middle-xs">
            <Grid.Col xs={12} lg={7}>
              <img
                className="spaced"
                src="/images/texada_rebrand/brand-shapes.png"
                alt="Branding Defining Style and Shapes"
              />
            </Grid.Col>
            <Grid.Col xs={12} lg={5}>
              <div className="textbox">
                <h3>Shapes &amp; Symbols</h3>
                <p>
                  After several design concepts and iterations based on internal
                  discussions, a yellow and dark grey chevron was decided as our
                  main symbol. It would be used to tie our products, potential
                  sub-brands, and marketing collateral together.
                </p>
                <p>
                  The shape of the chevron was carefully made to match the main
                  logo lettering, which also received a cut-out treatment that
                  both gave it a unique look, as well as being a subtle callback
                  to the old logo.
                </p>
                <p>
                  The circular cut-outs and smoothed-out corners would become
                  the defining features of the style guide.
                </p>
              </div>
            </Grid.Col>
          </Grid.Row>

          <Grid.Row className="middle-xs">
            <Grid.Col xs={12} lg={5}>
              <div className="textbox">
                <h3>Marketing Collateral</h3>
                <p>
                  Several concepts and working templates were used to test the
                  viability of the logo, colours and style guide. Those included
                  print ads in various formats, tradeshow banners, business
                  cards, website home page design, email signature, and product
                  screens.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col xs={12} lg={7}>
              <img
                className="spaced align-right"
                src="/images/texada_rebrand/print-ads.png"
                alt="Print Advertising"
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col>
              <img
                className="spaced"
                src="/images/texada_rebrand/misc-marketing.png"
                alt="Marketing Collateral"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </motion.div>
      <Browse component="Rebrand" pos="bottom" />
    </>
  );
}

export default Rebrand;
