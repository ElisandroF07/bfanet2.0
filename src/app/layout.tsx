import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "@/styles/globals.css";
import "@/styles/effects.css"

export const metadata: Metadata = {
  title: "NL Móvel | Home",
  description: "Find your home",
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" suppressHydrationWarning={true}>
      <head>
        
      </head>
      <body
        className={`antialiased ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
