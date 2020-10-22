import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Dashboard} />
        <Route exact path="/saved" component={Saved} />
      </Router>
      <Footer />
    </main>
  );
}

export default App;
