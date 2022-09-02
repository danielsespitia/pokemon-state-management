import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Kanto,
  Johto,
  Hoenn,
  Sinnoh,
  Unova,
  Kalos,
  Alola,
  Galar,
  Paldea,
} from './pages';
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex';
import './App.css';

function App() {
  const [myPokemon, setMyPokemon] = useState([]);
  console.log(myPokemon, 'holi');

  const regions = [
    {
      name: 'Kanto',
      page: (
        <Kanto
          gen={1}
          style={displayStyle}
          myPokemon={myPokemon}
          setMyPokemon={setMyPokemon}
        />
      ),
    },
    {
      name: 'Johto',
      page: <Johto gen={2} style={displayStyle} setMyPokemon={setMyPokemon} />,
    },
    {
      name: 'Hoenn',
      page: <Hoenn gen={3} style={displayStyle} setMyPokemon={setMyPokemon} />,
    },
    {
      name: 'Sinnoh',
      page: <Sinnoh gen={4} style={displayStyle} setMyPokemon={setMyPokemon} />,
    },
    {
      name: 'Unova',
      page: <Unova gen={5} style={displayStyle} setMyPokemon={setMyPokemon} />,
    },
    {
      name: 'Kalos',
      page: <Kalos gen={6} style={displayStyle} setMyPokemon={setMyPokemon} />,
    },
    {
      name: 'Alola',
      page: <Alola gen={7} style={displayStyle} setMyPokemon={setMyPokemon} />,
    },
    {
      name: 'Galar',
      page: <Galar gen={8} style={displayStyle} setMyPokemon={setMyPokemon} />,
    },
    {
      name: 'Paldea',
      page: <Paldea gen={9} style={displayStyle} setMyPokemon={setMyPokemon} />,
    },
  ];

  return (
    <div className="App">
      <Header regions={regions} myPokemon={myPokemon} />
      <Pokedex myPokemon={myPokemon} />
      <Routes>
        {!!regions &&
          regions.map((region) => (
            <Route
              key={region.name}
              path={region.name === 'Kanto' ? '/' : `/${region.name}`}
              element={region.page}
            />
          ))}
      </Routes>
    </div>
  );
}

export default App;

const displayStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 1fr)',
  padding: 30,
};
