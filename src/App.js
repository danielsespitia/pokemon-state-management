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
  Home,
} from './pages';
import { Header } from './components/Header';
import { Pokedex } from './components/Pokedex';
import { DexContextProvider } from './context/DexContext';
import './App.css';
import fetchIntercept from 'fetch-intercept';

function App() {
  const unregister = fetchIntercept.register({
    request: function (url, config) {
      console.log('hola1');
      // Modify the url or config here
      return [url, config];
    },

    requestError: function (error) {
      console.log('hola2');
      // Called when an error occured during another 'request' interceptor call
      return Promise.reject(error);
    },

    response: function (response) {
      console.log('hola3');
      // Modify the reponse object
      return response;
    },

    responseError: function (error) {
      console.log('hola4');
      // Handle an fetch error
      return Promise.reject(error);
    },
  });

  // Unregister your interceptor
  unregister();

  // TODO: Refactor to enum
  // TODO: Use Tannstack query for Pokemon details
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
