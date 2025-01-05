"use client"
import Link from "next/link"
import { useMetadata } from "@/app/context/metadataContext";

export default function Footer() {
  const metadata = useMetadata()

  return (
    <footer
      className="w-full text-white bg-gradient-to-r from-cyan-900 to-blue-950 py-4 mt-auto flex justify-between items-end px-4">
      <p className="text-center">&copy; 2024 {metadata[0]?.siteTitle}. All rights reserved.</p>
      <div className="flex flex-col space-y-2">
        <p className="text-xl">Socials:</p>
        <Link href={metadata[0]?.socialLinks[0]} className="text-gray-50 hover:text-gray-300" target="_blank"><i className="fa-brands fa-facebook"></i> Facebook</Link>
        <Link href={metadata[0]?.socialLinks[1]} className="text-gray-50 hover:text-gray-300" target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</Link>
        <Link href={metadata[0]?.socialLinks[2]} className="text-gray-50 hover:text-gray-300" target="_blank"><i className="fa-brands fa-github"></i> GitHub</Link>
      </div>
    </footer>
  )
}
