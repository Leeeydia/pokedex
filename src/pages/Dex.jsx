import { useState } from "react";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (!selectedPokemon.includes(pokemon)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };
  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };
  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
