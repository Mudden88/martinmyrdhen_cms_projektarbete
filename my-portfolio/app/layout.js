import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getMetaData } from "@/lib/api";
import { MetadataProvider } from "./context/metadataContext";

export default async function RootLayout({ children }) {
  const metadata = await getMetaData();

  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/b20e134e2c.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-100">
        <MetadataProvider metadata={metadata}>
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          {children}
          <Footer />
        </MetadataProvider>
      </body>
    </html>
  );
}
