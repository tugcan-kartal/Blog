import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { SessionProvider } from "next-auth/react";
// import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Tugcan Kartal",
  description: "Tugcan Kartal's portfolio website and blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50  antialiased">
        {/* <ThemeProvider> */}
          <SessionProvider>
            <Navbar />
            <main className="container mx-auto px-4 lg:px-8 py-8 min-h-screen">
              {children}
            </main>
            <Footer />
          </SessionProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
