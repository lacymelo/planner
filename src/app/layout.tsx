import type { Metadata } from "next";
import "./globals.css";
import { roboto, inter } from '@/fonts'

export const metadata: Metadata = {
  title: "Planner",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${roboto.variable}`}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  );
}
