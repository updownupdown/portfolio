import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home.js";
import Work from "./pages/Work.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
