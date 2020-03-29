import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav/Nav.js";

// Pages
import Home from "./pages/Home.js";

// Work
import Photography from "./work/Photography.js";
import Rebrand from "./work/Rebrand.js";
import Websites from "./work/Websites.js";
import Components from "./work/Components.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/photography" component={Photography} />
        <Route path="/rebrand" component={Rebrand} />
        <Route path="/websites" component={Websites} />
        <Route path="/components" component={Components} />
      </div>
    </BrowserRouter>
  );
}

export default App;
