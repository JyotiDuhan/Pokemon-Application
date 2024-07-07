import PokemonClientComponent from "./ClientComponents/PokemonClientComponent";

async function getPokemonData() {
  let url = "https://pokeapi.co/api/v2/pokemon-species";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function Home() {
  const data = await getPokemonData();
  // console.log(data);

  return (
    <div>
      <PokemonClientComponent data={data.results} />
    </div>
    
  );
}
