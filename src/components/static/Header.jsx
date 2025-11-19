import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navs = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <header className="sticky top-0 z-100 w-full">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white text-center py-2 px-4 text-sm font-medium">
        <p>🚀 Elevate your brand with our award-winning design solutions!</p>
      </motion.div>

      {/* Navbar */}
      <nav className="bg-gray-50 py-4 lg:py-6 px-6 relative z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[95%] mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-gray-900 tracking-tight">
              CGD<span className="text-blue-600">Concepts</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navs.map(nav => (
              <h4
                key={nav.name}
                className="text-gray-800 hover:text-blue-600 font-medium text-lg transition duration-300">
                {nav.name}
              </h4>
            ))}
          </div>

          {/* Mobile Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 rounded-md p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t border-gray-100">
            <div className="flex flex-col items-center space-y-6">
              {["Services", "Portfolio", "About Us", "Blog", "Contact"].map(
                name => (
                  <a
                    key={name}
                    href="/"
                    className="text-gray-800 hover:text-blue-600 text-lg"
                    onClick={() => setIsMenuOpen(false)}>
                    {name}
                  </a>
                )
              )}

              <a
                href="/get-a-quote"
                className="w-4/5 text-center py-3 px-6 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700">
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
