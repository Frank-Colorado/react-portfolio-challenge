import React from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundColor: "#0A090C",
          height: "100vh",
        }}
      ></div>
    </div>
  );
}

export default App;
