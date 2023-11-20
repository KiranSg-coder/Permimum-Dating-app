import "./App.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import MatchAnimation from "./components/MatchAnimation";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
            <MatchAnimation/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
