import React from 'react';
import { PokemonCard } from './PokemonCard';

export const RegionLayout = ({ pokemons, add2Pokedex, removeFromPokedex }) => {
  return (
    <div style={styles.container}>
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

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)',
    padding: 30,
  },
};
