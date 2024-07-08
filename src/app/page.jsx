import PokemonClientComponent from "./ClientComponents/PokemonClientComponent";
import { getPokemonData } from "../services/getPokemonData";

export default async function Home() {
  const data = await getPokemonData();

  return (
    <div>
      <PokemonClientComponent data={data.results} />
    </div>
  );
}
