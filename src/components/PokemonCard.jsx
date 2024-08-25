import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokemonList from "./PokemonList";
import Dashboard from "./Dashboard";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: ${(props) => (props.isSelected ? "#ff6961" : "#77dd77")};
  color: white;
  border: none;
  padding: 8px 12px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const PokemonCard = ({ pokemon, onAdd, isSelected }) => {
  const { img_url, korean_name } = pokemon;
  const navigate = useNavigate();

  return (
    <Card>
      <img src={img_url} alt={korean_name} />
      <p>{korean_name}</p>
      {isSelected ? (
        <Button onClick={() => onAdd(pokemon)} isSelected>
          삭제
        </Button>
      ) : (
        <Button onClick={() => onAdd(pokemon)}>추가</Button>
      )}
    </Card>
  );
};

export default PokemonCard;
