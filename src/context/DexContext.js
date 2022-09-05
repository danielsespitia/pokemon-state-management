import { createContext, useContext, useReducer, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
const DexContext = createContext(undefined);

const initialState = {
  kantoDex: [],
  johtoDex: [],
  hoennDex: [],
  sinnohDex: [],
  unovaDex: [],
  kalosDex: [],
  alolaDex: [],
  galarDex: [],
};

const REGIONS = {
  KANTO: 'kanto',
  JOHTO: 'johto',
  HOENN: 'hoenn',
  SINNOH: 'sinnoh',
  UNOVA: 'unova',
  KALOS: 'kalos',
  ALOLA: 'alola',
  GALAR: 'galar',
};

const UPDATE_KANTO_DEX = 'UPDATE_KANTO_DEX';
const REMOVE_KANTO_DEX = 'REMOVE_KANTO_DEX';
const UPDATE_JOHTO_DEX = 'UPDATE_JOHTO_DEX';
const REMOVE_JOHTO_DEX = 'REMOVE_JOHTO_DEX';
const UPDATE_HOENN_DEX = 'UPDATE_HOENN_DEX';
const REMOVE_HOENN_DEX = 'REMOVE_HOENN_DEX';
const UPDATE_SINNOH_DEX = 'UPDATE_SINNOH_DEX';
const REMOVE_SINNOH_DEX = 'REMOVE_SINNOH_DEX';
const UPDATE_UNOVA_DEX = 'UPDATE_UNOVA_DEX';
const REMOVE_UNOVA_DEX = 'REMOVE_UNOVA_DEX';
const UPDATE_KALOS_DEX = 'UPDATE_KALOS_DEX';
const REMOVE_KALOS_DEX = 'REMOVE_KALOS_DEX';
const UPDATE_ALOLA_DEX = 'UPDATE_ALOLA_DEX';
const REMOVE_ALOLA_DEX = 'REMOVE_ALOLA_DEX';
const UPDATE_GALAR_DEX = 'UPDATE_GALAR_DEX';
const REMOVE_GALAR_DEX = 'REMOVE_GALAR_DEX';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_KANTO_DEX:
      return { ...state, kantoDex: [...state.kantoDex, action.payload] };
    case REMOVE_KANTO_DEX:
      return {
        ...state,
        kantoDex: state.kantoDex.filter(
          (currentPokemon) => currentPokemon.name !== action.payload.name
        ),
      };
    case UPDATE_JOHTO_DEX:
      return { ...state, johtoDex: [...state.johtoDex, action.payload] };
    case UPDATE_HOENN_DEX:
      return { ...state, hoennDex: [...state.hoennDex, action.payload] };
    case UPDATE_SINNOH_DEX:
      return { ...state, sinnohDex: [...state.sinnohDex, action.payload] };
    case UPDATE_UNOVA_DEX:
      return { ...state, unovaDex: [...state.unovaDex, action.payload] };
    case UPDATE_KALOS_DEX:
      return { ...state, kalosDex: [...state.kalosDex, action.payload] };
    case UPDATE_ALOLA_DEX:
      return { ...state, alolaDex: [...state.alolaDex, action.payload] };
    case UPDATE_GALAR_DEX:
      return { ...state, galarDex: [...state.galarDex, action.payload] };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const DexContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <DexContext.Provider value={value}>{children}</DexContext.Provider>;
};

const useDexContext = () => {
  const location = useLocation().pathname.slice(1);
  const context = useContext(DexContext);
  const [state, dispatch] = context;

  const add2Pokedex = (selectedPokemon) => {
    switch (location) {
      case REGIONS.KANTO:
        return dispatch({ type: UPDATE_KANTO_DEX, payload: selectedPokemon });
      case REGIONS.JOHTO:
        return dispatch({ type: UPDATE_JOHTO_DEX, payload: selectedPokemon });
      case REGIONS.HOENN:
        return dispatch({ type: UPDATE_HOENN_DEX, payload: selectedPokemon });
      case REGIONS.SINNOH:
        return dispatch({ type: UPDATE_SINNOH_DEX, payload: selectedPokemon });
      case REGIONS.UNOVA:
        return dispatch({ type: UPDATE_UNOVA_DEX, payload: selectedPokemon });
      case REGIONS.KALOS:
        return dispatch({ type: UPDATE_KALOS_DEX, payload: selectedPokemon });
      case REGIONS.ALOLA:
        return dispatch({ type: UPDATE_ALOLA_DEX, payload: selectedPokemon });
      case REGIONS.GALAR:
        return dispatch({ type: UPDATE_GALAR_DEX, payload: selectedPokemon });
      default:
        break;
    }
  };

  const removeFromPokedex = (selectedPokemon) => {
    switch (location) {
      case REGIONS.KANTO:
        return dispatch({ type: REMOVE_KANTO_DEX, payload: selectedPokemon });
      case REGIONS.JOHTO:
        return dispatch({ type: REMOVE_JOHTO_DEX, payload: selectedPokemon });
      case REGIONS.HOENN:
        return dispatch({ type: REMOVE_HOENN_DEX, payload: selectedPokemon });
      case REGIONS.SINNOH:
        return dispatch({ type: REMOVE_SINNOH_DEX, payload: selectedPokemon });
      case REGIONS.KALOS:
        return dispatch({ type: REMOVE_KALOS_DEX, payload: selectedPokemon });
      case REGIONS.ALOLA:
        return dispatch({ type: REMOVE_ALOLA_DEX, payload: selectedPokemon });
      case REGIONS.GALAR:
        return dispatch({ type: REMOVE_GALAR_DEX, payload: selectedPokemon });
      default:
        break;
    }
  };

  return {
    state,
    location,
    add2Pokedex,
    removeFromPokedex,
  };
};

export { DexContextProvider, useDexContext };
