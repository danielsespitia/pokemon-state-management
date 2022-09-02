import React from 'react';
import { imgGen } from '../util/imgGen';

export const Pokedex = ({ myPokemon }) => {
  console.log(myPokemon);
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        background: 'green',
        backgroundImage:
          'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/416e0746-bae7-42b0-9291-df457f485ee7/derwvdb-5c96b4d5-9a24-4057-a5d0-f9fb1f58e343.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxNmUwNzQ2LWJhZTctNDJiMC05MjkxLWRmNDU3ZjQ4NWVlN1wvZGVyd3ZkYi01Yzk2YjRkNS05YTI0LTQwNTctYTVkMC1mOWZiMWY1OGUzNDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Banvd9kgsocev8Ia1FfLRqfgi5JkkhkwmCQY8KCJhpw")',
      }}
    >
      {!!myPokemon &&
        myPokemon.map((pokemon, index) => (
          <div key={index}>
            <img src={imgGen(pokemon.url)} alt={pokemon.name} />
          </div>
        ))}
    </div>
  );
};
