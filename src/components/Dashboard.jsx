import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  padding: 30px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
  margin-left: 180px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 150px;
`;

const Button = styled.button`
  background-color: #ff6961;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  return (
    <DashboardContainer>
      <h2>내가 선택한 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <CardContainer>
          {selectedPokemon.map((pokemon) => (
            <Card key={pokemon.id}>
              <img
                src={pokemon.img_url}
                alt={pokemon.korean_name}
                style={{ width: "100px", height: "100px" }}
              />
              <p>{pokemon.korean_name}</p>
              <p>ID: {pokemon.id}</p>
              <Button onClick={() => removePokemon(pokemon)}>삭제</Button>
            </Card>
          ))}
        </CardContainer>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
