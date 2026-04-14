"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Planos", href: "#planos" },
  { label: "Horários", href: "#horarios" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative w-36 h-12 shrink-0">
          <Image
            src="/logo.png.png"
            alt="1UP Complexo Esportivo"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        {/* Links — desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-gray-300 hover:text-[#F7941D] tracking-wide uppercase transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href="#planos"
          className="hidden lg:inline-flex items-center gap-2 bg-[#F7941D] hover:bg-[#e0850f] text-black font-black text-sm px-6 py-3 rounded-none tracking-widest uppercase transition-colors"
        >
          QUERO TREINAR
        </a>

        {/* Hamburger — mobile */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden bg-[#1a1a1a] border-t border-[#2a2a2a] px-6 py-6">
          <ul className="flex flex-col gap-5 mb-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-gray-300 hover:text-[#F7941D] uppercase tracking-wider transition-colors block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#planos"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#F7941D] hover:bg-[#e0850f] text-black font-black text-sm px-6 py-4 uppercase tracking-widest transition-colors"
          >
            QUERO TREINAR
          </a>
        </div>
      )}
    </header>
  );
}
