import StartGame from "./components/StartGame.jsx";
import { useState } from "react";
import StartGamePlay from "./components/StartGamePlay.jsx";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div>
      {isGameStarted ? (
        <StartGamePlay />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
    </div>
  );
}

export default App;
