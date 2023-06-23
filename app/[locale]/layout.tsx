import "@/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { Metadata } from "next";
import Script from "next/script";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Adeir",
  viewport: { width: "device-width", initialScale: 1 },
  keywords: ["nextjs", "portfolio"],
  authors: [{ name: "Adeir do Bom Fim Junior", url: "https://adeir.me" }],
  description:
    "Welcome to my Next.js portfolio! Here, I demonstrate my programming expertise and showcase a variety of projects I have worked on. As a skilled developer, I utilize the power of Next.js, a popular React framework, to create this dynamic and interactive web application.",
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "de"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="min-h-screen py-10 px-8">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5T797C28TQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5T797C28TQ');
        `}
        </Script>
      </body>
    </html>
  );
}
