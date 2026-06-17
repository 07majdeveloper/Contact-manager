import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "contact manager by next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <Navbar/>
        {children}
        <Toaster position="top-right" />
        </body>
    </html>
  );
}
