import React from 'react';
import { imgGen } from '../util/imgGen';

export const PokemonCard = ({ pokemon, add2Pokedex, removeFromPokedex }) => {
  // TODO: Show pokemon type

  return (
    <>
      {!!imgGen(pokemon.url) ? (
        <div className="card">
          <div className="img-container">
            <img
              className="img"
              src={imgGen(pokemon.url)}
              alt="pokemon-sprite"
            />
          </div>
          <p className="pokemon-name">{`${pokemon.name}`}</p>
          <div className="button-container">
            <button className="button" onClick={() => add2Pokedex(pokemon)}>
              +
            </button>
            <button
              className="button"
              onClick={() => removeFromPokedex(pokemon)}
            >
              -
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
