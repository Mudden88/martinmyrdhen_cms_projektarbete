"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useMetadata } from "@/app/context/metadataContext";

export default function Navbar() {
  const metadata = useMetadata();

  const navigation = [
    { href: "/", label: "Start" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  useEffect(() => {
    const menuButton = document.querySelector('[data-collapse-toggle="navbar-menu"]');
    const menu = document.getElementById('navbar-menu');

    const toggleMenu = () => {
      if (menu) {
        menu.classList.toggle('hidden');
      }
    };

    // Ensure the menuButton is found before adding event listener
    if (menuButton) {
      menuButton.addEventListener('click', toggleMenu);
    }

    return () => {
      if (menuButton) {
        menuButton.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <nav className="p-2 bg-gradient-to-r from-cyan-900 to-blue-950">
      <div className="container flex items-center">
        <Link href="/">
          <span className="text-white font-bold border-r pr-2">{metadata ? metadata[0]?.siteTitle : "Loading"}</span>
        </Link>
        <div className="flex items-center space-x-10">
          <ul className="hidden md:flex space-x-5 ms-2 me-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="text-white hover:text-black" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4 ms-auto">
          <div className="relative hidden md:block">
            <input type="text" id="search-navbar"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
              placeholder="Search..." />
          </div>
          <button data-collapse-toggle="navbar-menu" type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-menu" className="hidden md:hidden">
        <ul className="space-y-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link className="text-white hover:text-black" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <input type="text" id="search-navbar"
          className="block w-full p-2 text-sm mt-2 text-gray-900 border border-gray-300 rounded-lg bg-white"
          placeholder="Search..." />
      </div>

    </nav>
  );
}
