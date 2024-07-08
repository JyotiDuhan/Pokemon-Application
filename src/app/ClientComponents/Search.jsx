'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault(); // to avoid dafault refresh on form submit
        var formData = new FormData(e.target); // access the form object
        const form_values = Object.fromEntries(formData); // get form values
        let name = form_values['search-pokemon']; // get desired field value
        if(name) {
          router.push('/search/'+name); // route to search route to show the results
        }
    }

    return (
        <form className="mb-2" onSubmit={handleSearch}>
            <input className="rounded-l-lg p-2" type="search" name="search-pokemon" id="search" />
            <button className="rounded-r-lg bg-blue-800 p-2 text-white">Search</button>
        </form>
    )
}