import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Nav
import Nav from "./components/Nav/Nav.js";

// Pages
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

// Work
import Photography from "./work/Photography.js";
import Chords from "./work/Chords.js";
import Rebrand from "./work/Rebrand.js";
import Websites from "./work/Websites.js";
import Components from "./work/Components.js";
import TexadaWeb from "./work/TexadaWeb.js";
import View from "./work/View.js";
import Loaders from "./work/Loaders.js";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <div id="top"></div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/photography" component={Photography} />
          <Route path="/rebrand" component={Rebrand} />
          <Route path="/chords" component={Chords} />
          <Route path="/websites" component={Websites} />
          <Route path="/components" component={Components} />
          <Route path="/texada" component={TexadaWeb} />
          <Route path="/view" component={View} />
          <Route path="/loaders" component={Loaders} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
