import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GSAPProvider from "@/components/providers/GSAPProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akreon - Full-Stack Development Agency | Web, Mobile & Shopify",
  description:
    "Leading development agency specializing in web development, mobile apps, Shopify stores, and UI/UX design. We build digital solutions that drive business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.variable} font-inter antialiased`}>
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
