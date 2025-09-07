"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

// A reusable Link component for the navigation to avoid repeating classes
const NavLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) => (
  <li>
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 text-slate-600 transition-colors duration-300 hover:text-slate-900 font-semibold"
    >
      {label}
    </Link>
  </li>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Effect to disable body scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#", label: "Uploads" },
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "How it works" },
    { href: "#", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          {/* LEFT: Logo + Desktop Nav Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              aria-label="profiler.ai home"
              onClick={handleLinkClick}
            >
              <Logo />
            </Link>
            <ul className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <NavLink key={link.label} href={link.href} label={link.label} />
              ))}
            </ul>
          </div>

          {/* RIGHT: Desktop Auth Actions + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-sm">
              <Link
                href="#"
                className="font-semibold text-slate-700 transition-colors duration-300 hover:text-slate-900"
              >
                Log in
              </Link>
              <Link
                href="#"
                className="rounded-full bg-slate-200 px-4 py-2 font-semibold text-slate-700 transition-colors duration-300 hover:bg-slate-700 hover:text-white"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 h-8 w-8"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle Menu</span>
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-slate-800 transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-slate-800 transform transition duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-slate-800 transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-white h-screen transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pt-24">
          <ul className="grid gap-4 text-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                label={link.label}
                onClick={handleLinkClick}
              />
            ))}
          </ul>
          <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col gap-4 text-lg">
            <Link
              href="#"
              onClick={handleLinkClick}
              className="font-semibold text-slate-700"
            >
              Log in
            </Link>
            <Link
              href="#"
              onClick={handleLinkClick}
              className="rounded-full bg-slate-900 px-5 py-3 text-center font-semibold text-white"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
