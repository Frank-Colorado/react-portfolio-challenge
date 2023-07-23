import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#F7FFF7",
          height: "100vh",
        }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {/*
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
