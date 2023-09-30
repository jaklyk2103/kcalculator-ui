import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('in middleware for: ', request.nextUrl.pathname)
  
  if (!request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register')) {
    if (!request.cookies.has('authorizationToken')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}
 
// // See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!login|register|_next).*)',
}