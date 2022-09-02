import React from 'react';
import { imgGen } from '../util/imgGen';

export const PokemonCard = ({ pokemon, add2Pokedex, removeFromPokedex }) => {
  return (
    <>
      {!!imgGen(pokemon.url) ? (
        <div style={styles.card}>
          <div style={styles.imgContainer}>
            <img
              style={styles.img}
              src={imgGen(pokemon.url)}
              alt="pokemon-sprite"
            />
          </div>
          <p style={styles.name}>{`${pokemon.name}`}</p>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={() => add2Pokedex(pokemon)}>
              +
            </button>
            <button
              style={styles.button}
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

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
    width: '160px',
    marginBottom: 20,
    paddingRight: 25,
    border: '2px solid #61DBFB',
  },
  imgContainer: { height: '70px', width: '80px' },
  img: { height: '100%', width: '100%' },
  name: { color: '#fff' },
  buttonContainer: {
    marginLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  button: {
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    height: 20,
    width: 20,
    color: '#61DBFB',
    border: '2px solid #61DBFB',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};
