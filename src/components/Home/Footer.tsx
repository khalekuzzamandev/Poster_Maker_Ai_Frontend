import React from "react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/#features" },
    { name: "How to Use", href: "/how-to-use" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 transition hover:text-blue-600"
          >
            PMA World
          </Link>

          {/* Footer Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-5 gap-y-3"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 transition-colors hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-7 border-t border-gray-200 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <Link
            href="/"
            className="font-semibold text-gray-900 hover:text-blue-600"
          >
            PMA World
          </Link>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;