import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WidgetChat from "./components/WidgetChat";

function App() {
  const [visable, setVisable] = React.useState(false);

  return (
    <div className="h-[1000em] bg-black">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       <WidgetChat  />
      </header>
    </div>
  );
}

export default App;
