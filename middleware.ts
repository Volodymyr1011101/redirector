import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const country = req.headers.get('x-vercel-ip-country') || 'US';

    const redirectUrl =
        country === 'PL'
            ? 'https://panorama-studio.pl'
            : 'https://google.com';

    return NextResponse.redirect(redirectUrl, 302);
}

// Применяем middleware только к корню
export const config = {
    matcher: ['/'],
};
