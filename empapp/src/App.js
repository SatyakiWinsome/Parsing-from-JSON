import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import allemp from "./allemp";
import devemp from "./devemp";
import dmemp from "./dmemp";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul style={{ listStyle: "none", display: "flex" }}>
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button>About</button>
              </Link>
            </li>
            <li>
              <Link to="/allemp">
                <button>Allemp</button>
              </Link>
            </li>
            <li>
              <Link to="/devemp">
                <button>Devemp</button>
              </Link>
            </li>
            <li>
              <Link to="/dmemp">
                <button>DMemp</button>
              </Link>
            </li>
          </ul>
          <Route path="/" exact render={() => <h1>Welcome Home</h1>}></Route>
          <Route
            path="/about"
            exact
            render={() => <h1>Welcome About</h1>}
          ></Route>
          <Route path="/allemp" exact component={allemp}></Route>
          <Route path="/devemp" exact component={devemp}></Route>
          <Route path="/dmemp" exact component={dmemp}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
