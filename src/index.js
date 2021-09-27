import React from "react";
import ReactDOM from "react-dom";
import MainScene from "./pages/main";

const App = () => {
  return (
    <div>
      <MainScene />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
