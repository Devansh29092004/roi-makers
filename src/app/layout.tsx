import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ROI-MAKERS",
  description: "A design agency that helps brands grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=archivo@100,101,200,201,300,301,400,401,500,501,600,601,700,701,800,801,900,901,1,2&f[]=clash-display@200,300,400,500,600,700,1&f[]=melodrama@300,400,500,600,700,1&f[]=boska@200,201,300,301,400,401,500,501,700,701,900,901&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={playfair.className + " antialiased"}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
