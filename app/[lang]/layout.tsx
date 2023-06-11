import "@/globals.css";
import { Analytics } from '@vercel/analytics/react';
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adeir",
  viewport: { width: "device-width", initialScale: 1 },
  keywords: ["nextjs", "portfolio"],
  authors: [{ name: "Adeir do Bom Fim Junior", url: "https://adeir.me" }],
  description:
    "Welcome to my Next.js portfolio! Here, I demonstrate my programming expertise and showcase a variety of projects I have worked on. As a skilled developer, I utilize the power of Next.js, a popular React framework, to create this dynamic and interactive web application.",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en">
      <body>
        <Header lang={lang} />
        <main className="min-h-screen py-10 px-8">{children}</main>
        <Footer lang={lang} />
        <Analytics />
      </body>
    </html>
  );
}
