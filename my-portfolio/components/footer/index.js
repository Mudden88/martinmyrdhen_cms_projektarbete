"use client"
import Link from "next/link"

export default function Footer() {
  return (

    // Links from contentful
    <footer
      className="w-full text-white bg-gradient-to-r from-cyan-900 to-blue-950 py-4 mt-auto flex justify-between items-end px-4">
      <p className="text-center">&copy; 2024 (ContentFul SiteTitle). All rights reserved.</p>
      <div className="flex flex-col space-y-2">
        <p className="text-xl">Socials:</p>
        <Link href="#" className="text-gray-50 hover:text-gray-300"><i className="fa-brands fa-facebook"></i> Facebook</Link>
        <Link href="#" className="text-gray-50 hover:text-gray-300"><i className="fa-brands fa-linkedin"></i> LinkedIn</Link>
        <Link href="https://github.com/Mudden88" className="text-gray-50 hover:text-gray-300" target="_blank"><i className="fa-brands fa-github"></i> GitHub</Link>
      </div>
    </footer>
  )
}
