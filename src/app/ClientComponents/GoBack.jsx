'use client';
import { useRouter } from 'next/navigation';

export default function GoBack() {
    const router = useRouter();

    // function to handle "Back" link
    const handleClick = () => {
        router.back();
    }

    return (
        <div className="text-teal-300 mb-10" onClick={handleClick}>{'< Back'}</div>
    )
}