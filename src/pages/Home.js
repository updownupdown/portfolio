import React from "react";

// Sections
import Intro from "./Intro";
import ElegantDesign from "./ElegantDesign";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

function Home(props) {
  return (
    <>
      <Intro />
      <Work />
      <ElegantDesign />
      <About />
      <Contact />
    </>
  );
}

export default Home;
