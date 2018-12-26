import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Todos on steroid!" />
      <meta name="theme-color" content="#008f68" />
    </Helmet>
    <h2>Home</h2>
    <p>This is the home page!</p>
  </div>
);

const About = () => (
  <div>
    <Helmet>
      <title>About</title>
      <meta name="description" content="Todos on steroid!" />
      <meta name="theme-color" content="#008f68" />
    </Helmet>
    <h2>About</h2>
    <p>This is the about page!</p>
  </div>
);

const Contact = ({ match }) => (
  <div>
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="Todos on steroid!" />
      <meta name="theme-color" content="#008f68" />
    </Helmet>
    <h2>Contact</h2>
    <p>This is the contact us page!</p>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Helmet>
        <title>Turbo Todo</title>
        <meta name="description" content="Todos on steroid!" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);
export default App;
