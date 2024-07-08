'use client' 
 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }) {
    const router = useRouter();
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-start p-24 max-sm:items-center max-sm:mx-auto">
        <h2>Something went wrong!</h2>
        <button
            className='border border-sky-500 p-2 rounded'
            onClick={
                () => router.push('/')
            }
        >
            Go back Home
        </button>
        </div>
    )
}