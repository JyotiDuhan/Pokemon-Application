'use client';
import { useRouter } from 'next/navigation';

export default function Search() {
    const router = useRouter();

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
        <form className="mb-2" onSubmit={handleSearch}>
            <input className="rounded-l-lg p-2" type="search" name="search-pokemon" id="search" />
            <button className="rounded-r-lg bg-blue-800 p-2 text-white">Search</button>
        </form>
    )
}