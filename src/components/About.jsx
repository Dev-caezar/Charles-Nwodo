import React from "react";
import { motion } from "framer-motion";

// Icons
const IconUsers = props => (
  <motion.svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2a3 3 0 00-5.356-1.857M17 20h-2m-2 0h-2M10 20H4V2a2 2 0 012-2h12a2 2 0 012 2v18z"
    />
  </motion.svg>
);

const IconVision = props => (
  <motion.svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19V6l12-3v14L9 19zm0 0a2 2 0 110 4 2 2 0 010-4zm12 0a2 2 0 110 4 2 2 0 010-4z"
    />
  </motion.svg>
);

const IconMission = props => (
  <motion.svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </motion.svg>
);

const IconValues = props => (
  <motion.svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    initial={{ y: 10, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.28 2.28A8.003 8.003 0 0118.66 12L19 12h2M3 12h2M12 21v-2"
    />
  </motion.svg>
);

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const About = () => {
  return (
    <div className="bg-white py-16 sm:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* HERO TEXT */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}>
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            GET TO KNOW US
          </h2>

          <motion.p
            className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            Our Story & Commitment
          </motion.p>
        </motion.div>

        {/* WHO WE ARE */}
        <motion.div
          className="bg-blue-600 p-8 sm:p-12 rounded-xl shadow-lg border-l-4 border-grey-50 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <IconUsers className="w-7 h-7 text-white mr-3" />
            Who We Are
          </h3>

          <p className="text-lg text-white leading-relaxed">
            <strong>CGDConcepts</strong> is a creative studio based in Nigeria,
            offering design, printing, and product branding services with
            visuals that speak volumes and quality that endures.
          </p>
        </motion.div>

        {/* MISSION - VISION - VALUES */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {/* Mission */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md border-b-4 border-blue-500 hover:shadow-xl cursor-pointer">
            <IconMission className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Our Mission
            </h4>
            <p className="text-gray-600">
              To deliver high-quality design and print solutions that empower
              individuals and businesses to present their best.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md border-b-4 border-blue-500 hover:shadow-xl cursor-pointer">
            <IconVision className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
            <p className="text-gray-600">
              To become the most trusted and innovative creative brand across
              Africa and globally.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white p-8 rounded-xl shadow-md border-b-4 border-blue-500 hover:shadow-xl cursor-pointer">
            <IconValues className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Our Values</h4>
            <ul className="text-gray-600 space-y-1 pl-5 list-disc">
              <li>Creativity</li>
              <li>Quality</li>
              <li>Professionalism</li>
              <li>Timely Delivery</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
