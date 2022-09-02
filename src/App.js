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
import { DexContextProvider } from './context/DexContext';
import './App.css';

function App() {
  const regions = [
    // TODO: optimize this code
    {
      name: 'Kanto',
      page: <Kanto gen={1} />,
    },
    {
      name: 'Johto',
      page: <Johto gen={2} />,
    },
    {
      name: 'Hoenn',
      page: <Hoenn gen={3} />,
    },
    {
      name: 'Sinnoh',
      page: <Sinnoh gen={4} />,
    },
    {
      name: 'Unova',
      page: <Unova gen={5} />,
    },
    {
      name: 'Kalos',
      page: <Kalos gen={6} />,
    },
    {
      name: 'Alola',
      page: <Alola gen={7} />,
    },
    {
      name: 'Galar',
      page: <Galar gen={8} />,
    },
    {
      name: 'Paldea',
      page: <Paldea gen={9} />,
    },
  ];

  return (
    <div className="App">
      <Header regions={regions} />
      <DexContextProvider>
        <Pokedex />
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
      </DexContextProvider>
    </div>
  );
}

export default App;
