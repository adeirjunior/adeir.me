import { Head } from "$fresh/runtime.ts";

export default function HeadTag() {
    return <Head>
        <title>Adeir</title>
        <meta name="author" content="Adeir Junior" />
        <meta name="description" content="Free Web tutorials" />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#1E1E1E" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="application-name" content="Assuntos.dev" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Assuntos" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#1E1E1E" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
}