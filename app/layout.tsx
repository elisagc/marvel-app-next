import { Header } from "@/components";
import { Providers } from "@/store/Providers";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
