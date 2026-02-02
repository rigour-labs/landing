import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'e7b921f9ee5026e595b3f0e09f0d9db0';
const SITE_URL = 'https://rigour-labs.dev';

const URLS_TO_INDEX = [
    '/',
    '/#products',
    '/#team',
    '/#mission',
    '/#contact',
    '/privacy',
    '/terms',
];

export async function POST() {
    try {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                host: 'rigour-labs.dev',
                key: INDEXNOW_KEY,
                keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
                urlList: URLS_TO_INDEX.map(path => `${SITE_URL}${path}`),
            }),
        });

        if (response.ok || response.status === 202) {
            return NextResponse.json({
                success: true,
                message: 'URLs submitted to IndexNow',
                urlsSubmitted: URLS_TO_INDEX.length
            });
        }

        return NextResponse.json({
            success: false,
            error: `IndexNow responded with status ${response.status}`
        }, { status: 500 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({
        key: INDEXNOW_KEY,
        keyUrl: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlsToIndex: URLS_TO_INDEX.map(path => `${SITE_URL}${path}`),
        instructions: 'POST to this endpoint to submit URLs to IndexNow'
    });
}
