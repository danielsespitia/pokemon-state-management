import React from 'react';
import { useLocation } from 'react-router-dom';
import { imgGen } from '../util/imgGen';
import { useDexContext } from '../context/DexContext';

export const Pokedex = () => {
  const location = useLocation();
  const { kantoDex, johtoDex } = useDexContext();

  const nationalDex = {
    kanto: kantoDex,
    johto: johtoDex,
  };

  const currentRegion = location.pathname.slice(1);

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
