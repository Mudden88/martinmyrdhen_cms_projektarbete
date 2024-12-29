"use client"
import { useEffect } from "react";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Start" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {

  useEffect(() => {
    const menuButton = document.querySelector('[data-collapse-toggle="navbar-menu"]');
    const menu = document.getElementById('navbar-menu');

    const toggleMenu = () => {
      menu.classList.toggle('hidden');
    };

    menuButton.addEventListener('click', toggleMenu);
  }, [])

  return (
    <nav className=" p-2 bg-gradient-to-r from-cyan-900 to-blue-950">
      <div className="container flex items-center">
        <Link href="/">
          <span className="text-white font-bold border-r pr-2">ContentFul SiteTitle</span></Link>
        <div className="flex items-center space-x-10">
          <ul className="hidden md:flex space-x-5 ms-2 me-2">
            {
              navigation.map((item) => (
                <li key={item.href}>
                  <Link className="text-white hover:text-black" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="flex items-center space-x-4 ms-auto">
          <div className="relative hidden md:block">
            <input type="text" id="search-navbar"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
              placeholder="Search..." />
          </div>
          <button data-collapse-toggle="navbar-menu" type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden md:hidden" id="navbar-menu">
        <ul className="flex flex-col space-y-2 p-4">
          {
            navigation.map((item) => (
              <li key={item.href}>
                <Link className="text-white hover:text-black" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))
          }
          <li>
            <input type="text" id="search-navbar-mobile"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search..." />
          </li>
        </ul>
      </div>
    </nav>
  )
}
