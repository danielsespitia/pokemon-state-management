import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePokemon = (gen) => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const baseURL = `https://pokeapi.co/api/v2/generation/${gen}/`;
    const getPokemons = async () => {
      const response = await fetch(baseURL, {
        method: 'GET',
      });

      console.log(response);
      await axios.get(baseURL).then((response) => {
        setPokemons(response.data['pokemon_species']);
      });
    };

    getPokemons();
  }, [gen]);

  return pokemons;
};
