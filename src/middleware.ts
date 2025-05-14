import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const country = req.headers.get('x-vercel-ip-country') || 'unknown';

    const redirectUrl = country === 'PL'
        ? 'https://panorama-studio.pl'
        : 'https://google.com';

    return NextResponse.redirect(redirectUrl);
}

// @ts-ignore
export const config = {
    matcher: ['/'],
}