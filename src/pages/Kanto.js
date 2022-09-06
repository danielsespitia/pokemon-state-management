import { usePokemon } from '../hooks/usePokemon';
import { RegionLayout } from '../components/RegionLayout';

export const Kanto = ({ gen }) => {
  const pokemons = usePokemon(gen);

  return <RegionLayout pokemons={pokemons} />;
};
