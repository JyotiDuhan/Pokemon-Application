'use client';
import Link from "next/link";
import { useState } from 'react';

export default function PokemonClientComponent(props) {
  const data =  props.data;
  const [showDataWithImages, setShowDataWithImages] = useState(data);

  const handleChange = (e) => {
    let val = e.target.value;
    if(val === 'All') {
      setShowDataWithImages(data);
    } else {
      let filteredData = data.filter((item) => item.name === val);
      setShowDataWithImages(filteredData);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <div className="mb-2">
        <select className="w-40 rounded-md p-1 capitalize" onChange={handleChange}>
          <option key='All'>All</option>
          {data && data.map((item) => 
            <option key={item.name}>{item.name}</option>
          )}
        </select>
      </div>
      <form className="mb-2">
        <input className="rounded-l-lg p-2" type="search" />
        <button className="rounded-r-lg bg-blue-800 p-2">Search</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-32">
        {showDataWithImages && showDataWithImages.map((item) => 
          <div key={item.name}>
            <img className="h-40 w-40 rounded-t-lg" src={`https://img.pokemondb.net/artwork/${item.name}.jpg`} />
            <div className="p-4 bg-slate-50 rounded-b-lg">
              <p className="capitalize font-bold">{item.name}</p>
              <Link to='/search' href={`/search/${item.name}`}>{'Details ->'}</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}