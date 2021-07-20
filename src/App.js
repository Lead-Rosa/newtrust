import React from "react";
import "./App.css";
import Work from "./pages/Work";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import MapContainer from './components/MapContainer'
import Main from "./components/Main";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Work" component={Work} />
        <Route path="/About" component={About} />
        <Route path="/Project" component={Projects} />
        <Route path="/Contact" component={Contact} />
       < Route path="/Map" component={MapContainer} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
