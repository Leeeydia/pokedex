import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #77dd77;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #66cc66;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>포켓몬 도감</Title>
      <StartButton onClick={() => navigate("/dex")}>START</StartButton>
    </Container>
  );
}

export default Home;
