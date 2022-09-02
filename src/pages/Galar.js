import { useState, useEffect } from 'react';
import axios from 'axios';
import { RegionLayout } from '../components/RegionLayout';
import { useDexContext } from '../context/DexContext';

export const Galar = ({ gen }) => {
  const { add2GalarDex: add2Pokedex, removeFromGalarDex: removeFromPokedex } =
    useDexContext();

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
    <RegionLayout
      pokemons={pokemons}
      add2Pokedex={add2Pokedex}
      removeFromPokedex={removeFromPokedex}
    />
  );
};
