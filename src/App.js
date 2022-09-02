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
  Home,
} from './pages';
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex';
import { DexContextProvider } from './context/DexContext';
import './App.css';

function App() {
  // TODO: Refactor to enum
  const regions = [
    // TODO: optimize this code
    {
      name: 'kanto',
      page: <Kanto gen={1} />,
    },
    {
      name: 'johto',
      page: <Johto gen={2} />,
    },
    {
      name: 'hoenn',
      page: <Hoenn gen={3} />,
    },
    {
      name: 'sinnoh',
      page: <Sinnoh gen={4} />,
    },
    {
      name: 'unova',
      page: <Unova gen={5} />,
    },
    {
      name: 'kalos',
      page: <Kalos gen={6} />,
    },
    {
      name: 'alola',
      page: <Alola gen={7} />,
    },
    {
      name: 'galar',
      page: <Galar gen={8} />,
    },
    {
      name: 'paldea',
      page: <Paldea gen={9} />,
    },
  ];

  return (
    <div className="App">
      <Header regions={regions} />
      <DexContextProvider>
        <Pokedex />
        <Routes>
          <Route path="/" element={<Home />} />
          {!!regions &&
            regions.map((region) => (
              <Route
                key={region.name}
                path={`/${region.name}`}
                element={region.page}
              />
            ))}
        </Routes>
      </DexContextProvider>
    </div>
  );
}

export default App;
