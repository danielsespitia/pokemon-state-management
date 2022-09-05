import React from 'react';
import { imgGen } from '../util/imgGen';
import { useDexContext } from '../context/DexContext';

export const Pokedex = () => {
  const { state, location } = useDexContext();

  // TODO: I know this can be improved
  const nationalDex = {
    kanto: state.kantoDex,
    johto: state.johtoDex,
    hoenn: state.hoennDex,
    sinnoh: state.sinnohDex,
    unova: state.unovaDex,
    kalos: state.kalosDex,
    alola: state.alolaDex,
    galar: state.galarDex,
  };

  // TODO: Refactor to set location in context state
  const currentRegion = location;

  const myPokemon = nationalDex[currentRegion]
    ? nationalDex[currentRegion]
    : null;

  return (
    <div className="pokedex">
      {!!myPokemon &&
        myPokemon.map((pokemon, index) => (
          <div key={index}>
            <img src={imgGen(pokemon.url)} alt={pokemon.name} />
          </div>
        ))}
    </div>
  );
};
