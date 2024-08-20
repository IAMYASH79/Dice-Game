import Styled, { styled } from "styled-components";

const TotalScore = () => {
  return (
    <ScoreContainer>
      <div>
        <h1>0</h1>
        <p>Total Score</p>
      </div>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
