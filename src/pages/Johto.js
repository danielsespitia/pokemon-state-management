import { usePokemon } from '../hooks/usePokemon';
import { RegionLayout } from '../components/RegionLayout';

export const Johto = ({ gen }) => {
  const pokemons = usePokemon(gen);

  return <RegionLayout pokemons={pokemons} />;
};
