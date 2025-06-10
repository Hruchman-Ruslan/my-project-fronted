import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function middleware(request: NextRequest) {
	const token = request.cookies.get('token')?.value
	const { pathname } = request.nextUrl

	if (pathname.startsWith('/dashboard')) {
		if (!token) {
			return NextResponse.redirect(new URL('/sign-in', request.url))
		}

		try {
			await jwtVerify(token, JWT_SECRET)
			return NextResponse.next()
		} catch {
			return NextResponse.redirect(new URL('/sign-in', request.url))
		}
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard/:path*'],
}
