import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const HomeContainer = styled.div``;
const Card = styled.div``;
const StartButton = styled.div``;
function PokemonDetail() {
  const navigate = useNavigate();
  const location = new URLSearchParams(useLocation().search);
  const pokemonId = location.get(`id`);

  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <HomeContainer>
      <Card>
        <div>{pokemon.korean_name}</div>
        <div>
          <img src={pokemon.img_url} />
        </div>
        <div>{pokemon.description}</div>
      </Card>
      <StartButton onClick={() => navigate("/dex")}>
        도감으로 돌아가기
      </StartButton>
    </HomeContainer>
  );
}

export default PokemonDetail;
