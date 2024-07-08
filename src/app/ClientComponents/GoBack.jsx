'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function GoBack() {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return (
        <div className="text-teal-300 mb-10" onClick={handleClick}>{'< Back'}</div>
    )
}