import React from 'react';
import { PokemonCard } from './PokemonCard';
import { useDexContext } from '../context/DexContext';

export const RegionLayout = ({ pokemons }) => {
  const { add2Pokedex, removeFromPokedex } = useDexContext();

  return (
    <div className="region-layout">
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
