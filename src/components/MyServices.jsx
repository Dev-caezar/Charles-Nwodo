import React from "react";
import { FaFigma } from "react-icons/fa";
import { IoPrint } from "react-icons/io5";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerParent = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Colored Icon Badges
const IconDesignBadge = () => (
  <span className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  </span>
);

const IconPrintBadge = () => (
  <span className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full text-green-600">
    <IoPrint className="text-2xl" />
  </span>
);

const IconUXBadge = () => (
  <span className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full text-purple-600">
    <FaFigma className="text-2xl" />
  </span>
);

const MyServices = () => {
  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}>
          <h2 className="text-lg font-semibold text-blue-600 uppercase tracking-widest mb-1">
            SERVICES PAGE
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Boost your brand with our expertise
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Attention-grabbing visuals and quality packaging delivered through
            strategic creative services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerParent}>
          {/* Graphics Design Card (BLUE - Unchanged) */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ duration: 0.4 }}
            className="bg-blue-50 border border-blue-100 shadow-xl rounded-2xl p-8 flex flex-col hover:shadow-2xl transition duration-300">
            <IconDesignBadge />
            <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
              Graphics Design
            </h3>
            <p className="text-gray-600 leading-relaxed grow">
              We design everything—from logos and flyers to banners and social
              media content. Beautiful + strategic = **highly effective**
              designs.
            </p>
            <a
              href="#"
              className="mt-6 text-blue-600 font-semibold flex items-center group">
              Learn More
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>

          {/* Printing Card (NOW PURPLE) */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ duration: 0.4 }}
            className="bg-purple-50 border border-purple-100 shadow-xl rounded-2xl p-8 flex flex-col hover:shadow-2xl transition duration-300">
            <IconUXBadge /> {/* Swapped: Used IconUXBadge (Purple/Figma) */}
            <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
              Printing
            </h3>
            <p className="text-gray-600 leading-relaxed grow">
              Sharp, high-quality prints for flyers, business cards, T-shirts,
              banners, souvenirs, and more.
            </p>
            <a
              href="#"
              className="mt-6 text-blue-600 font-semibold flex items-center group">
              View Portfolio
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>

          {/* UI/UX Card (NOW GREEN) */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ duration: 0.4 }}
            className="bg-green-50 border border-green-100 shadow-xl rounded-2xl p-8 flex flex-col hover:shadow-2xl transition duration-300">
            <IconPrintBadge />{" "}
            {/* Swapped: Used IconPrintBadge (Green/Print) */}
            <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
              UI/UX
            </h3>
            <p className="text-gray-600 leading-relaxed grow">
              Clean, intuitive, visually appealing interfaces designed to create
              **smooth and enjoyable user experiences**.
            </p>
            <a
              href="#"
              className="mt-6 text-blue-600 font-semibold flex items-center group">
              Start a Project
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyServices;
