import { Header } from "@/components";
import { Providers } from "@/context/Providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel Characters",
  description: "Marvel characters page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <div id="loader-portal" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
