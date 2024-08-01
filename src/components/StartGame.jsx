import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <div>
        <img src="/images/dice.png" alt="" />{" "}
      </div>
      <div>
        <h1>Dice Game</h1>
        <Button>Play Game</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  width: 220px;
  height: 44px;
  background-color: black;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  min-width: 220px;
  border: none;
`;
