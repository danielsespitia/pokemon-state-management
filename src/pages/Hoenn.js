import { useState, useEffect } from 'react';
import { PokemonCard } from '../components/PokemonCard';
import axios from 'axios';

export const Hoenn = ({ gen, style }) => {
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

  return (
    <div style={style}>
      {!!pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
    </div>
  );
};
