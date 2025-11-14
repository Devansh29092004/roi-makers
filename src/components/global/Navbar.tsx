"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { label: "Projects", link: "#projects" },
  { label: "Approach", link: "#approach" },
  { label: "About", link: "#about" },
  { label: "Career", link: "#career" },
  { label: "Blog", link: "#blog" },
  { label: "Team", link: "/team" },
  { label: "Contact", link: "#contact" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com" },
  { label: "Twitter", link: "https://twitter.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/roi-logo.webp"
              alt="Logo"
              width={110}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.link}
                className="text-black hover:text-[#FF9933] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative inline-flex items-center gap-2 bg-transparent border-0 cursor-pointer text-black font-medium"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span>{isOpen ? "Close" : "Menu"}</span>
            <span className="relative w-[14px] h-[14px]">
              <span
                className={`absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                  isOpen ? "-rotate-45" : "rotate-90"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-[#E9E4D7] z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.link}
                  className="text-black font-semibold text-4xl hover:text-[#FF9933] transition-colors uppercase tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <h3 className="text-base font-medium text-[#FF9933] mb-3">
              Socials
            </h3>
            <ul className="flex flex-row gap-4 flex-wrap">
              {socialItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-black hover:text-[#FF9933] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
