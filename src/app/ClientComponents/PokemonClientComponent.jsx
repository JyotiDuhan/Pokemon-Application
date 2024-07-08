'use client';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Search from "./Search";

export default function PokemonClientComponent(props) {
  const router = useRouter();
  const data =  props.data;
  const [showDataWithImages, setShowDataWithImages] = useState(data);

  // handle dropdown options change
  const handleChange = (e) => {
    let val = e.target.value;
    if(val === 'All') { // to show default all entries
      setShowDataWithImages(data);
    } else {
      let filteredData = data.filter((item) => item.name === val);
      setShowDataWithImages(filteredData);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24 max-sm:items-center">
      <div className="mb-2">
        <select className="w-40 rounded-md p-1 capitalize" onChange={handleChange}>
          <option key='All'>All</option>
          {data && data.map((item) => 
            <option key={item.name}>{item.name}</option>
          )}
        </select>
      </div>
      <Search />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-32 max-sm:mx-auto">
        {showDataWithImages && showDataWithImages.map((item) => 
          <div key={item.name}>
            <div className="px-10 py-2 bg-slate-50 rounded-t-lg">
              <img className="h-40 w-40" src={`https://img.pokemondb.net/artwork/${item.name}.jpg`} />
            </div>
            <div className="px-10 py-2 bg-slate-50 rounded-b-lg">
              <p className="capitalize font-bold mb-10">{item.name}</p>
              <Link to='/search' href={`/search/${item.name}`} className="text-sky-500 text-sm">{'Details ->'}</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}