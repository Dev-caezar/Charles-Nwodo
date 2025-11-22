import React from "react";
import { IoIosStar } from "react-icons/io";
import HeroImg from "../assets/public/hero_img.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const heroThemeStyles = {
  light: {
    sectionBg: "bg-gray-50",
    radialBg: "from-white/70 via-gray-50 to-gray-100",
    headingText: "text-gray-900",
    paragraphText: "text-gray-600",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    imageCardBg: "bg-white",
  },
  dark: {
    sectionBg: "bg-gray-900",
    radialBg: "from-gray-800/70 via-gray-900 to-black",
    headingText: "text-gray-100",
    paragraphText: "text-gray-400",
    badgeBg: "bg-blue-900/50",
    badgeText: "text-blue-300",
    imageCardBg: "bg-gray-800",
  },
};

const Hero = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const theme = isDarkMode ? heroThemeStyles.dark : heroThemeStyles.light;

  return (
    <section
      className={`relative min-h-[90%] flex items-center justify-center overflow-hidden pt-20 pb-12 ${theme.sectionBg} transition-colors duration-300`}>
      <div
        className={`absolute inset-0 bg-radial-gradient ${theme.radialBg} pointer-events-none transition-colors duration-300`}></div>

      <div className="container mx-auto px-6 md:px-14 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left lg:w-1/2">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`inline-flex items-center space-x-2 ${theme.badgeBg} ${theme.badgeText} px-4 py-2 rounded-full mb-6 transition-colors duration-300`}>
            <IoIosStar className="w-5 h-5 text-yellow-500" />
            <span>Design & Branding Experts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-xl sm:text-3xl lg:text-6xl font-bold ${theme.headingText} mb-6 tracking-tighter leading-tight transition-colors duration-300`}>
            We Build <br />
            Brands That{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500">
              Stand Out
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-xl ${theme.paragraphText} mb-10 max-w-xl lg:max-w-none transition-colors duration-300`}>
            At CGDConcepts, we transform ideas into powerful visual identities —
            through branding, graphics, printing, and product design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start">
            <button className="w-[200px] h-[45px] bg-blue-500 hover:bg-blue-600 text-white rounded-2xl transition-colors">
              Explore our work
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div
            className={`shadow-2xl rounded-3xl max-w-lg w-full overflow-hidden ${theme.imageCardBg} transition-colors duration-300`}>
            <img
              src={HeroImg}
              alt="Designer"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
