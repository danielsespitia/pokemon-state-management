import React from 'react';
import { PokemonCard } from './PokemonCard';

export const RegionLayout = ({ pokemons, add2Pokedex, removeFromPokedex }) => {
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
