import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";


export default function StartGamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumbers, setSelectedNumbers] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generatrRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!selectedNumbers) {

      setError("You have not selected any number ")
      return;
    }
    const randomNumber = generatrRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    

    if (selectedNumbers === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumbers(undefined)
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
        error={error}
        setError={setError}
          selectedNumbers={selectedNumbers}
          setSelectedNumbers={setSelectedNumbers}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
      <OutlineButton onClick={resetScore}>Rest Now</OutlineButton>
      <Button onClick={() => setShowRules((prev) => !prev)} >{showRules ? "hide" : "Show"} Rules</Button>
      </div>

      {showRules && <Rules/>}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btn {
    display: flex;
    flex-direction: column;

  }
`;
