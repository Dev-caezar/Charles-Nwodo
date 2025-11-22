import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const headerThemeStyles = {
  light: {
    bannerBg: "bg-black",
    bannerText: "text-white",
    navBg: "bg-gray-50",
    logoText: "text-gray-900",
    logoAccent: "text-blue-600",
    linkText: "text-gray-800 hover:text-blue-600",
    iconColor: "text-gray-700 hover:text-blue-600",
    mobileMenuBg: "bg-white",
    mobileBorder: "border-gray-100",
    mobileLinkText: "text-gray-800",
  },
  dark: {
    bannerBg: "bg-gray-800",
    bannerText: "text-gray-100",
    navBg: "bg-gray-900",
    logoText: "text-gray-100",
    logoAccent: "text-blue-400",
    linkText: "text-gray-300 hover:text-blue-400",
    iconColor: "text-gray-300 hover:text-blue-400",
    mobileMenuBg: "bg-gray-900",
    mobileBorder: "border-gray-800",
    mobileLinkText: "text-gray-300",
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const theme = isDarkMode ? headerThemeStyles.dark : headerThemeStyles.light;

  const navs = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`${theme.bannerBg} ${theme.bannerText} 
                   text-center py-2 px-4 text-[10px] md:text-sm font-medium transition-colors duration-300`}>
        <p>🚀 Elevate your brand with our award-winning design solutions!</p>
      </motion.div>

      <nav
        className={`${theme.navBg} py-2 lg:py-6 px-6 relative z-50 transition-colors duration-300`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[95%] mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className={`text-2xl font-bold ${theme.logoText} tracking-tight transition-colors duration-300`}>
              CGD
              <span className={theme.logoAccent}>Concepts</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navs.map(nav => (
              <a
                key={nav.name}
                href={nav.href}
                className={`${theme.linkText} font-medium text-lg transition duration-300`}>
                {nav.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${theme.iconColor} rounded-md p-2 transition-colors duration-300`}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </motion.div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`lg:hidden absolute top-full left-0 w-full ${theme.mobileMenuBg} shadow-lg py-4 border-t ${theme.mobileBorder} transition-colors duration-300`}>
            <div className="flex flex-col items-center space-y-6">
              {["Services", "Portfolio", "About Us", "Blog", "Contact"].map(
                name => (
                  <a
                    key={name}
                    href="/"
                    className={`${theme.mobileLinkText} hover:text-blue-600 dark:hover:text-blue-400 text-lg transition-colors duration-300`}
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
