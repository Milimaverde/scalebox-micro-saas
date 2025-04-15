import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins ({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScaleBox - Micro SaaS",
  description: "ScaleBox é um micro SaaS construído com Next.js, NextAuth e Firebase, focado em escalabilidade e agilidade no desenvolvimento de produtos modernos e eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} bg-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
