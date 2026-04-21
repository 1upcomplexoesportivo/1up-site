"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { waLink } from "@/app/lib/contact";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "História", href: "#historia" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Horários", href: "#horarios" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cta = waLink("experimental");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#262626] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="shrink-0 flex items-center" aria-label="1UP Complexo Esportivo — Início">
          <Image
            src="/logo-dark.png"
            alt="1UP Complexo Esportivo"
            width={120}
            height={50}
            priority
            className="h-[42px] w-auto object-contain"
          />
        </a>

        {/* Links — desktop */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] font-semibold text-gray-300 hover:text-[#F7941D] tracking-[0.2em] uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href={cta}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden lg:inline-flex items-center gap-2 bg-[#F7941D] hover:bg-[#e0850f] text-black font-black text-[11px] px-5 py-3 tracking-[0.22em] uppercase transition-colors duration-300"
        >
          Aula Experimental
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Hamburger — mobile */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
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
        <div className="lg:hidden bg-[#0a0a0a] border-t border-[#262626] px-6 py-6">
          <ul className="flex flex-col gap-5 mb-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-gray-300 hover:text-[#F7941D] uppercase tracking-[0.18em] transition-colors block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cta}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#F7941D] hover:bg-[#e0850f] text-black font-black text-sm px-6 py-4 uppercase tracking-[0.22em] transition-colors"
          >
            Aula Experimental →
          </a>
        </div>
      )}
    </header>
  );
}
