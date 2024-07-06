import Image from "next/image";

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
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <div className="mb-2">
        <select className="w-40 rounded-md p-1 capitalize">
          {data && data.results.map((item) => 
            <option>{item.name}</option>
          )}
        </select>
      </div>
      <form>
        <input className="rounded-md" type="search" />
        <button>Search</button>
      </form>
    </main>
  );
}
