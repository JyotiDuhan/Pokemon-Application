import GoBack from "@/app/ClientComponents/GoBack";
import { getPokemonSearchData } from "../../../services/getPokemonData";

export default async function Search({ params, searchParams }) {
  const pokemonName = params?.slug || "bulbasaur"; // get searched query param from url or use default
  const data = await getPokemonSearchData(pokemonName);

  // separate functions to get individual attribute values
  const getTypes = () => {
    let typesArr = [];
    const types = data.types.forEach((el) => {
      typesArr.push(el.type.name);
    });
    return typesArr.join(", ");
  };

  const getStats = () => {
    let statsArr = [];
    const stats = data.stats.forEach((el) => {
      statsArr.push(el.stat.name);
    });
    return statsArr.join(", ");
  };

  const getAbilities = () => {
    let abilitiesArr = [];
    const abilities = data.abilities.forEach((el) => {
      abilitiesArr.push(el.ability.name);
    });
    return abilitiesArr.join(", ");
  };

  const getMoves = () => {
    let movesArr = [];
    const moves = data.moves.forEach((el) => {
      movesArr.push(el.move.name);
    });
    return movesArr.join(", ");
  };

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24 bg-slate-100">
      <GoBack />
      <div>
        <div className="w-120 flex justify-center bg-teal-300 p-10 rounded-t-lg">
          <img
            className="h-40 w-40 rounded-t-lg h-60 w-60"
            src={`https://img.pokemondb.net/artwork/${pokemonName}.jpg`}
          />
        </div>
        <div className="bg-yellow-500 w-120 rounded-b-lg p-10">
          <p className="capitalize">
            <span className="font-bold">Name: </span> {data.name}
          </p>
          <p>
            <span className="font-bold">Type: </span> {getTypes()}
          </p>
          <p>
            <span className="font-bold">Stats: </span> {getStats()}
          </p>
          <p>
            <span className="font-bold">Abilities: </span>
            {getAbilities()}
          </p>
          <p>
            <span className="font-bold">Some Moves: </span>
            {getMoves()}
          </p>
        </div>
      </div>
    </main>
  );
}
