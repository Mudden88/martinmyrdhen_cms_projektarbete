import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(request) {
    const secretKey = process.env.REVALIDATION_SECRET
    const secretFromReq = request.nextUrl.searchParams.get('secret')
    const pathToRevalidate = request.nextUrl.searchParams.get('path') || '/';

    if (!secretFromReq || !crypto.timingSafeEqual(Buffer.from(secretFromReq), Buffer.from(secretKey))) {
        return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    try {
        await res.revalidate(pathToRevalidate)
        return NextResponse.json({ revalidated: true, now: Date.now() })

    } catch (error) {
        return NextResponse.json(
            { message: 'Revalidation failed', error: error.message },
            { status: 500 }
        )
    }
}