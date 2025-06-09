import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const token = request.cookies.get('token')?.value
	const { pathname } = request.nextUrl

	const isAuth = Boolean(token)
	const isAuthRoute = pathname === '/sign-in' || pathname === '/sign-up'
	const isDashboard = pathname.startsWith('/dashboard')

	if (isAuth && isAuthRoute) {
		return NextResponse.redirect(new URL('/dashboard', request.url))
	}
	if (!isAuth && isDashboard) {
		return NextResponse.redirect(new URL('/sign-in', request.url))
	}
	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard/:path*', '/dashboard', '/sign-in', '/sign-up'],
}
