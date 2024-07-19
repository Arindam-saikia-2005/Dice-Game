import { useState } from "react";
import styled from "styled-components";

export default function RoleDice({currentDice, roleDice}) {
 

 

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./images/Dices/dice_${currentDice}.png`} alt="Role-Dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
