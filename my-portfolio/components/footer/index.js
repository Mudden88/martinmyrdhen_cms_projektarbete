"use client"

export default function Footer() {
  return (
    <footer
      className="w-full text-white bg-gradient-to-r from-cyan-900 to-blue-950 py-4 mt-auto flex justify-between items-end px-4">
      <p className="text-center">&copy; 2024 Martin Myrdhèn. All rights reserved.</p>
      <div className="flex flex-col space-y-2">
        <p className="text-xl">Socials:</p>
        <a href="#" className="text-gray-50 hover:text-gray-300"><i className="fa-brands fa-facebook"></i> Facebook</a>
        <a href="#" className="text-gray-50 hover:text-gray-300"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/Mudden88" className="text-gray-50 hover:text-gray-300" target="_blank"><i className="fa-brands fa-github"></i> GitHub</a>
      </div>
    </footer>
  )
}
