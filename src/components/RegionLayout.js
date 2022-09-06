import React from 'react';
import { PokemonCard } from './PokemonCard';

export const RegionLayout = ({ pokemons }) => {
  return (
    <div className="region-layout">
      {!!pokemons &&
        pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} index={index} />
        ))}
    </div>
  );
};
