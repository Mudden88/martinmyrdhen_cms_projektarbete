import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "MartinMyrdhén",
  description: "My portfolio",
};


export default function RootLayout({ children }) {
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
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
