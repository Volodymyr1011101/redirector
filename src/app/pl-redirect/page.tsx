'use client';
import { useEffect } from 'react';

export default function PLRedirectPage() {
    useEffect(() => {
        window.location.href = 'https://panorama-studio.pl';
    }, []);

    return <p>Перенаправление...</p>;
}
