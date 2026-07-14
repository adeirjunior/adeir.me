import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";

let locales = ["en", "pt"];
let defaultLocale = "en";
const cookieName = "i18nlang";

// Obtém o locale preferido com base no cookie ou no header "Accept-Language"
function getLocale(request: NextRequest) {
    // Verifica se já existe um cookie de idioma
    if (request.cookies.has(cookieName)) {
        return request.cookies.get(cookieName)!.value; // Retorna o idioma do cookie
    }

    // Se não há cookie, usa o "Accept-Language" do navegador
    const acceptLang = request.headers.get("accept-language");
    if (!acceptLang) return defaultLocale;

    const negotiator = new Negotiator({ headers: { 'accept-language': acceptLang } });
    const preferredLanguages = negotiator.languages(locales); // Filtra apenas as linguagens suportadas

    return preferredLanguages.length > 0 ? preferredLanguages[0] : defaultLocale; // Retorna o primeiro idioma suportado ou o padrão
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Verifica se o pathname está na lista de exclusão
    const excludedPaths = ["/og", "/rss", "/sitemap.xml", "/robots.txt", "/studio"];
    if (excludedPaths.some((path) => pathname.startsWith(path))) {
        return NextResponse.next(); // Ignora as rotas especificadas
    }

    // Verifica se o pathname já contém um locale suportado
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        // Se o locale já está na URL, atualizamos o cookie para refletir o idioma escolhido
        const localeFromPath = pathname.split('/')[1]; // Extrai o locale da URL
        const response = NextResponse.next();

        // Se o idioma no cookie for diferente do da URL, atualiza o cookie
        if (request.cookies.get(cookieName)?.value !== localeFromPath) {
            response.cookies.set(cookieName, localeFromPath, { path: '/', maxAge: 60 * 60 * 24 * 365 });
        }

        return response; // Continua normalmente
    }

    // Redireciona se não houver locale na URL
    const locale = getLocale(request); // Pega o locale do cookie ou do navegador
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);

    const response = NextResponse.redirect(redirectUrl);

    // Salva o locale no cookie
    response.cookies.set(cookieName, locale, { path: '/', maxAge: 60 * 60 * 24 * 365 }); // Expira em 1 ano

    return response; // Redireciona para a URL com o locale
}

export const config = {
    matcher: [
        // Evita caminhos internos como _next e as páginas a serem ignoradas
        "/((?!_next|og|rss|sitemap.xml|robots.txt|studio).*)",
    ],
};
