import { NextResponse } from 'next/server'
 
let locales = ['en', 'pt']
 
// Get the preferred locale, similar to above or using a library
function getLocale(request: { nextUrl?: { pathname: any }; url?: string | URL | undefined; headers?: any }) {
    // Get the Accept-Language header from the request
    const acceptLanguage = request.headers.get('Accept-Language')
  
    // Split the header value into individual language tags
    const languageTags = acceptLanguage ? acceptLanguage.split(',') : []
  
    // Loop through the language tags and check if any of them match the supported locales
    for (const tag of languageTags) {
      const locale = tag.trim().split('-')[0] // Extract the language code
  
      // Check if the locale is supported
      if (locales.includes(locale)) {
        return locale
      }
    }
  
    // If no supported locale is found in the Accept-Language header, return a default locale
    return 'en'
  }
  
 
export function middleware(request: { nextUrl: { pathname: any }; url: string | URL | undefined }) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
 
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    if (pathname === '/sitemap.xml' || pathname === '/robots.xml' || pathname === '/sw.js') return

    const locale = getLocale(request)
 
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}