'use client';
import { useEffect } from 'react';

export default function USRedirectPage() {
    useEffect(() => {
        window.location.href = 'https://google.com';
    }, []);

    return <p>Redirecting...</p>;
}
