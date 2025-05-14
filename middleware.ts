import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const country = req.headers.get('x-vercel-ip-country') || 'unknown';
    return new Response(`Hello! Your country is: ${country}`);
}
export const config = {
    matcher: ['/'],
};