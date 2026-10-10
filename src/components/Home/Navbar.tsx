import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">
          its logo place
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-black"
          >
            Home sfadf
          </a>

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-black"
          >
            About
          </a>

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-black"
          >
            Services
          </a>

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-black"
          >
            Projects 
          </a>

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-black"
          >
            all your skill
          </a>

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-black"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;