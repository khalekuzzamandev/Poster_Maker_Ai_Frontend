import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo */}
          <h2 className="text-xl font-bold text-gray-900">
            Logo
          </h2>
          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-black">
             How
            </a>
          
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Logo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;