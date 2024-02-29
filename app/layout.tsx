import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import "./globals.css";
import AuthProvider from "./auth/Provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full English Breakfast",
  description:
    "Find the best full English breakfast wherever you find yourself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="p-5"> {children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
