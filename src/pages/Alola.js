import { useState, useEffect } from 'react';
import axios from 'axios';
import { RegionLayout } from '../components/RegionLayout';

export const Alola = ({ gen }) => {
  // TODO: Refactor to custom hook
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

  return <RegionLayout pokemons={pokemons} />;
};
