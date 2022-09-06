import React from 'react';
import { imgGen } from '../util/imgGen';
import { useDexContext } from '../context/DexContext';

export const PokemonCard = ({ pokemon, index }) => {
  // TODO: Show pokemon type
  const { add2Pokedex, removeFromPokedex } = useDexContext();
  const [pokemonDetail, setPokemonDetail] = React.useState(null);

  // TODO: Refactor to use tanstack query
  const getPokemonDetail = async (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonDetail(data);
      });
  };

  const pokemonTypes = pokemonDetail?.types;

  return (
    <>
      {!!imgGen(pokemon.url) ? (
        <div className="card">
          <div
            className="img-container"
            onClick={() => getPokemonDetail(pokemon.name)}
          >
            <img
              className="img"
              src={imgGen(pokemon.url)}
              alt="pokemon-sprite"
            />
          </div>
          <div className="info-container">
            <p className="pokemon-name">{`${pokemon.name}`}</p>
            <div className="types">
              {!!pokemonTypes &&
                pokemonTypes.map(({ type }, index) => (
                  <p key={index} className="type">
                    {`${type.name}`}
                  </p>
                ))}
            </div>
          </div>
          <div className="button-container">
            <button className="button" onClick={() => add2Pokedex(pokemon)}>
              +
            </button>
            <button className="button" onClick={() => removeFromPokedex(index)}>
              -
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
