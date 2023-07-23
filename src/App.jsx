import React from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
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
        <h1
          style={{
            color: "white",
          }}
        >
          Hello World
        </h1>
      </div>
    </div>
  );
}

export default App;
