import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getMetaData } from "@/lib/api";
import { MetadataProvider } from "./context/metadataContext";

export const metadata = {
  title: 'Martin Myrdhén',
  description: 'I’m Martin Myrdhén, a frontend developer passionate about building fast, user-friendly, and visually appealing web experiences. With expertise in modern technologies like Angular, React, Next.js, and JavaScript, I create responsive interfaces that bring ideas to life. Explore my portfolio to see a showcase of dynamic projects that highlight my skills in coding, design, and performance optimization.',
  keywords: ['Martin Myrdhén', 'frontend', 'developer', 'portfolio', 'CMS'],
  viewport: 'width=device-width, initial-scale=1',
}

export default async function RootLayout({ children }) {
  const metadataCF = await getMetaData();

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
        <MetadataProvider metadataCF={metadataCF}>
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
