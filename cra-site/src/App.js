import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route
        path="/cool-stuff"
        render={() => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <Link to="/boring-stuff">go to boring page</Link>
            </header>
          </div>
        )}
      />
      <Route
        path="/boring-stuff"
        render={() => <Link to="/cool-stuff">go to cool stuff</Link>}
      />
    </BrowserRouter>
  );
}

export default App;
