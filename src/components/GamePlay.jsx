import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { styled } from "styled-components";

const GamePlay = () => {
  return (
    <main>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
    </main>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
