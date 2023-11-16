import Welcome from "./components/welcome/Welcome";
import Questions from "./components/questions/Questions";
import { ElectionContext } from "./context/election";
import React from "react";

import "./App.css";

function App() {
  const [electionState, setElectionState] = React.useContext(ElectionContext);

  return (
    <div className="App">
      {electionState.gameStage === "Start" && <Welcome />}
      {electionState.gameStage === "Playing" && <Questions />}
    </div>
  );
}

export default App;
