'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function GoBack() {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return (
        <div className="text-teal-300" onClick={handleClick}>{'< Back'}</div>
    )
}