import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WidgetChat from "./components/WidgetChat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <WidgetChat />
      </header>
    </div>
  );
}

export default App;
