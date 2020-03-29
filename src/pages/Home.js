import React from "react";

// Sections
import Intro from "./Intro";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

function Home(props) {
  return (
    <>
      <Intro />
      <Work />
      <About />
      <Contact />
    </>
  );
}

export default Home;
