import React from "react";
import { useSelector } from "react-redux"; // <-- Import useSelector
import { motion } from "framer-motion";

// Define Theme Styles
const aboutThemeStyles = {
  light: {
    sectionBg: "bg-white",
    subtitleText: "text-blue-600",
    headingText: "text-gray-900",
    whoWeAreBg: "bg-blue-600",
    whoWeAreText: "text-white",
    whoWeAreBorder: "border-grey-50",
    cardBg: "bg-white",
    cardShadow: "shadow-md hover:shadow-xl",
    cardBorder: "border-blue-500",
    cardTitleText: "text-gray-900",
    cardContentText: "text-gray-600",
    iconColor: "text-blue-600",
  },
  dark: {
    sectionBg: "bg-gray-900",
    subtitleText: "text-blue-400",
    headingText: "text-gray-100",
    whoWeAreBg: "bg-blue-800",
    whoWeAreText: "text-gray-100",
    whoWeAreBorder: "border-gray-700", // Adjusted border for dark mode
    cardBg: "bg-gray-800",
    cardShadow: "shadow-xl hover:shadow-2xl", // Stronger shadow for contrast
    cardBorder: "border-blue-400",
    cardTitleText: "text-gray-100",
    cardContentText: "text-gray-400",
    iconColor: "text-blue-400",
  },
};

// SVG Icons (Kept outside for cleanliness, they receive theme styles via props)
// NOTE: The motion attributes (initial, whileInView, transition, viewport) are kept on the SVG wrapper.
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
  // Read the theme state from Redux
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  // Select the current style set
  const theme = isDarkMode ? aboutThemeStyles.dark : aboutThemeStyles.light;

  return (
    <div
      className={`${theme.sectionBg} py-16 sm:py-20 px-4 overflow-hidden transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}>
          {/* Subtitle */}
          <h2
            className={`text-sm font-semibold uppercase tracking-wider ${theme.subtitleText} transition-colors duration-300`}>
            GET TO KNOW US
          </h2>

          {/* Main Heading */}
          <motion.p
            className={`mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl ${theme.headingText} transition-colors duration-300`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            Our Story & Commitment
          </motion.p>
        </motion.div>

        {/* Who We Are Section */}
        <motion.div
          className={`${theme.whoWeAreBg} p-8 sm:p-12 rounded-xl shadow-lg border-l-4 ${theme.whoWeAreBorder} mb-16 transition-colors duration-300`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h3
            className={`text-2xl font-bold ${theme.whoWeAreText} mb-4 flex items-center`}>
            {/* Icon color is determined by the parent text color for simplicity */}
            <IconUsers className={`w-7 h-7 mr-3 ${theme.whoWeAreText}`} />
            Who We Are
          </h3>

          <p className={`text-lg ${theme.whoWeAreText} leading-relaxed`}>
            <strong>CGDConcepts</strong> is a creative studio based in Nigeria,
            offering design, printing, and product branding services with
            visuals that speak volumes and quality that endures.
          </p>
        </motion.div>

        {/* Mission, Vision, Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {/* Mission Card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className={`p-8 rounded-xl ${theme.cardBg} ${theme.cardShadow} border-b-4 ${theme.cardBorder} cursor-pointer transition-all duration-300`}>
            <IconMission className={`w-10 h-10 mb-4 ${theme.iconColor}`} />

            <h4 className={`text-xl font-bold mb-3 ${theme.cardTitleText}`}>
              Our Mission
            </h4>
            <p className={`${theme.cardContentText}`}>
              To deliver high-quality design and print solutions that empower
              individuals and businesses to present their best.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className={`p-8 rounded-xl ${theme.cardBg} ${theme.cardShadow} border-b-4 ${theme.cardBorder} cursor-pointer transition-all duration-300`}>
            <IconVision className={`w-10 h-10 mb-4 ${theme.iconColor}`} />

            <h4 className={`text-xl font-bold mb-3 ${theme.cardTitleText}`}>
              Our Vision
            </h4>
            <p className={`${theme.cardContentText}`}>
              To become the most trusted and innovative creative brand across
              Africa and globally.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className={`p-8 rounded-xl ${theme.cardBg} ${theme.cardShadow} border-b-4 ${theme.cardBorder} cursor-pointer transition-all duration-300`}>
            <IconValues className={`w-10 h-10 mb-4 ${theme.iconColor}`} />

            <h4 className={`text-xl font-bold mb-3 ${theme.cardTitleText}`}>
              Our Values
            </h4>
            <ul className={`${theme.cardContentText} space-y-1 pl-5 list-disc`}>
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
