'use client';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PokemonClientComponent(props) {
  const router = useRouter();
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

  const handleSearch = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    const form_values = Object.fromEntries(formData);
    console.log('event', form_values)
    let name = form_values['search-pokemon'];
    if(name) {
      router.push('/search/'+name);
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
      <form className="mb-2" onSubmit={handleSearch}>
        <input className="rounded-l-lg p-2" type="search" name="search-pokemon" id="search" />
        <button className="rounded-r-lg bg-blue-800 p-2 text-white">Search</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-32 max-sm:mx-auto">
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