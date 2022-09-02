import { createContext, useContext, useState, useMemo } from 'react';

const DexContext = createContext(undefined);

const DexContextProvider = ({ children }) => {
  // TODO: Refactor to national dex
  const [kantoDex, setKantoDex] = useState([]);
  const [johtoDex, setJohtoDex] = useState([]);
  const [hoennDex, setHoennDex] = useState([]);
  const [sinnohDex, setSinnohDex] = useState([]);
  const [unovaDex, setUnovaDex] = useState([]);
  const [kalosDex, setKalosDex] = useState([]);
  const [alolaDex, setAlolaDex] = useState([]);
  const [galarDex, setGalarDex] = useState([]);
  const [paldeaDex, setPaleaDex] = useState([]);

  const value = useMemo(
    () => [
      kantoDex,
      setKantoDex,
      johtoDex,
      setJohtoDex,
      hoennDex,
      setHoennDex,
      sinnohDex,
      setSinnohDex,
      unovaDex,
      setUnovaDex,
      kalosDex,
      setKalosDex,
      alolaDex,
      setAlolaDex,
      galarDex,
      setGalarDex,
      paldeaDex,
      setPaleaDex,
    ],
    [
      kantoDex,
      johtoDex,
      hoennDex,
      sinnohDex,
      unovaDex,
      kalosDex,
      alolaDex,
      galarDex,
      paldeaDex,
    ]
  );

  return <DexContext.Provider value={value}>{children}</DexContext.Provider>;
};

const useDexContext = () => {
  const context = useContext(DexContext);
  const [
    kantoDex,
    setKantoDex,
    johtoDex,
    setJohtoDex,
    hoennDex,
    setHoennDex,
    sinnohDex,
    setSinnohDex,
    unovaDex,
    setUnovaDex,
    kalosDex,
    setKalosDex,
    alolaDex,
    setAlolaDex,
    galarDex,
    setGalarDex,
    paldeaDex,
    setPaleaDex,
  ] = context;

  // TODO: Refactor to reducer to handle all dexes
  const add2KantoDex = (selectedPokemon) => {
    setKantoDex([...kantoDex, selectedPokemon]);
  };

  const removeFromKantoDex = (selectedPokemon) => {
    // TODO: How to handle repeated pokemons?
    setKantoDex(
      kantoDex.filter(
        (currentPokemon) => currentPokemon.name !== selectedPokemon.name
      )
    );
  };

  const add2JohtoDex = (selectedPokemon) => {
    setJohtoDex([...johtoDex, selectedPokemon]);
  };

  const removeFromJohtoDex = (selectedPokemon) => {
    // TODO: How to handle repeated pokemons?
    setJohtoDex(
      johtoDex.filter(
        (currentPokemon) => currentPokemon.name !== selectedPokemon.name
      )
    );
  };

  return {
    kantoDex,
    add2KantoDex,
    removeFromKantoDex,
    johtoDex,
    add2JohtoDex,
    removeFromJohtoDex,
  };
};

export { DexContextProvider, useDexContext };
