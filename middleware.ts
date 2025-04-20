// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

// Liste over paths som krever innlogging
const protectedPaths = [
  '/dashboard',
  '/dashboard/',
  '/dashboard/*',
  '/api/private',
  '/admin',
]

function isProtectedPath(pathname: string): boolean {
  return protectedPaths.some((path) => {
    if (path.endsWith('/*')) {
      return pathname.startsWith(path.replace('/*', ''))
    }
    return pathname === path
  })
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const isLoggedIn = Boolean(session?.user)
  const { pathname } = req.nextUrl

  // Hvis path er beskyttet og bruker ikke er logget inn → redirect
  if (!isLoggedIn && isProtectedPath(pathname)) {
    const redirectUrl = new URL('/auth/login', req.url)
    redirectUrl.searchParams.set('redirectedFrom', pathname) // valgfritt: lagre opprinnelig path
    return NextResponse.redirect(redirectUrl)
  }

  return res
}
