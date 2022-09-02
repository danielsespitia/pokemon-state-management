import { useState, useEffect } from 'react';
import { PokemonCard } from '../components/PokemonCard';
import axios from 'axios';

export const Kanto = ({ gen, style, myPokemon, setMyPokemon }) => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const baseURL = `https://pokeapi.co/api/v2/generation/${gen}/`;
    const getPokemons = async () => {
      await axios.get(baseURL).then((response) => {
        setPokemons(response.data['pokemon_species']);
      });
    };

    getPokemons();
  }, [gen]);

  const add2Pokedex = (selectedPokemon) => {
    setMyPokemon([...myPokemon, selectedPokemon]);
  };
  const removeFromPokedex = (selectedPokemon) => {
    // TODO: How to handle repeated pokemons?
    setMyPokemon(
      myPokemon.filter(
        (currentPokemon) => currentPokemon.name !== selectedPokemon.name
      )
    );
  };

  return (
    <div style={style}>
      {!!pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            add2Pokedex={add2Pokedex}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
    </div>
  );
};
