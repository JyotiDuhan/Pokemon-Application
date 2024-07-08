// get pokemon data for initial render
export async function getPokemonData() {
  let url = "https://pokeapi.co/api/v2/pokemon-species";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
// get pokemon search data
export async function getPokemonSearchData(pokemonName) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
