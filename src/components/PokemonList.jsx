import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={{
            id: pokemon.id,
            name: pokemon.korean_name,
            img_url: pokemon.img_url,
          }}
          onAdd={() => onAddPokemon(pokemon)}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
