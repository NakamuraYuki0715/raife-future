"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "事業内容", en: "Services" },
    { href: "#works", label: "施工事例", en: "Works" },
    { href: "#concept", label: "私たちについて", en: "About Us" },
    { href: "#strengths", label: "強み", en: "Strengths" },
    { href: "#company", label: "会社概要", en: "Company" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F4F0]/90 backdrop-blur-md border-b border-[#E8E7E3] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo / Typography Logo */}
        <Link
          href="#"
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B8A7B] rounded"
        >
          <span className="text-xl md:text-2xl font-light tracking-[0.2em] text-[#262626] font-serif transition-opacity group-hover:opacity-80">
            RAIFE
          </span>
          <span className="text-[9px] tracking-[0.25em] text-[#777777] uppercase font-sans -mt-1">
            Future Co., Ltd.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-8"
          aria-label="デスクトップナビゲーション"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center text-xs tracking-widest text-[#262626] hover:text-[#8B8A7B] transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8B8A7B]"
            >
              <span className="font-medium">{link.label}</span>
              <span className="text-[9px] text-[#777777] tracking-wider transition-colors group-hover:text-[#8B8A7B]">
                {link.en}
              </span>
            </a>
          ))}

          {/* Contact CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-[#262626] text-white px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-[#8B8A7B] transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#262626]"
          >
            <span>お問い合わせ</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#262626] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B8A7B] rounded"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[73px] bg-[#F5F4F0]/98 backdrop-blur-lg z-40 lg:hidden flex flex-col justify-between px-8 py-10 transition-all border-t border-[#E8E7E3]"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between border-b border-[#E8E7E3] pb-3 text-sm text-[#262626] hover:text-[#8B8A7B] transition-colors"
              >
                <span className="tracking-widest font-medium">{link.label}</span>
                <span className="text-xs text-[#777777] tracking-wider">{link.en}</span>
              </a>
            ))}
          </div>

          <div className="pt-6">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-[#262626] text-white py-3.5 text-xs tracking-widest uppercase hover:bg-[#8B8A7B] transition-all"
            >
              <span>無料お見積もり・ご相談</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center text-[10px] text-[#777777] mt-4 tracking-wider">
              近畿地方全域対応 / 建築・リフォーム・店舗設計
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
