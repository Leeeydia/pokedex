import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.korean_name}
              <button onClick={() => removePokemon(pokemon)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
