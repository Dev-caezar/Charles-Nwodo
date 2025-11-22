import React from "react";
import { useSelector } from "react-redux"; // <-- Import useSelector
import { Figma, Paintbrush, FileText, Image, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import service1 from "../assets/public/service1.png";
import service2 from "../assets/public/service2.png";
import service3 from "../assets/public/service3.png";

// Define Theme Styles
const servicesThemeStyles = {
  light: {
    sectionBg: "bg-white",
    subtitleText: "text-blue-600",
    headingText: "text-gray-900",
    cardBg: "bg-white",
    cardShadow: "shadow-xl",
    cardTitleText: "text-blue-600",
    cardDescriptionText: "text-gray-700",
    toolBg: "bg-gray-100",
    toolIcon: "text-gray-700",
    subText: "text-gray-500",
  },
  dark: {
    sectionBg: "bg-gray-900", // Dark background for the whole section
    subtitleText: "text-blue-400", // Lighter blue subtitle
    headingText: "text-gray-100", // White heading text
    cardBg: "bg-gray-800", // Darker card background
    cardShadow: "shadow-2xl shadow-blue-900/50", // Stronger/themed shadow
    cardTitleText: "text-blue-400",
    cardDescriptionText: "text-gray-300",
    toolBg: "bg-gray-700",
    toolIcon: "text-gray-100", // White icons
    subText: "text-gray-400",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Tool icon logic updated to use theme styles
const getToolIcon = (tool, iconColorClass) => {
  switch (tool) {
    case "Figma":
      return <Figma className={`w-5 h-5 ${iconColorClass}`} />;
    case "Sketch":
      return <PenTool className={`w-5 h-5 ${iconColorClass}`} />;
    case "P":
      return <Paintbrush className={`w-5 h-5 ${iconColorClass}`} />;
    case "Ps":
      return <Image className={`w-5 h-5 ${iconColorClass}`} />;
    case "Ai":
      return <PenTool className={`w-5 h-5 ${iconColorClass}`} />;
    default:
      return null;
  }
};

const MyServices = () => {
  // 1. Read the theme state from Redux
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  // 2. Select the current style set
  const theme = isDarkMode
    ? servicesThemeStyles.dark
    : servicesThemeStyles.light;

  const services = [
    {
      title: "Graphics design",
      description:
        "We design everything — from logos and flyers to banners and social media content. We blend creativity with strategy to ensure your designs are not only beautiful, but effective.",
      subText: "attention-grabbing visuals and quality packaging",
      imageSrc: service1,
      imageAlt: "A person working on a laptop with a graphic design interface",
      tools: ["P", "Ps", "Ai"],
      reverseLayout: false,
    },
    {
      title: "Printing",
      description:
        "Whether it's large format or digital printing, we deliver sharp, high-quality prints for all your needs—flyers, business cards, T-shirts, roll-up banners, souvenirs, and more.",
      subText: null,
      imageSrc: service2,
      imageAlt:
        "An astronaut in a workshop, symbolizing advanced printing technology",
      tools: [],
      reverseLayout: true,
    },
    {
      title: "UI/UX",
      description:
        "We craft user-friendly and visually engaging interfaces that give your brand a seamless digital experience. From wireframes to final design, our focus is on usability, accessibility, and aesthetics—ensuring your website or app not only looks great but feels intuitive to use.",
      subText: null,
      imageSrc: service3,
      imageAlt: "A close-up of a phone showing design and calculator app icons",
      tools: ["Figma", "Sketch"],
      reverseLayout: false,
    },
  ];

  return (
    <div
      className={`w-full min-h-screen py-12 px-4 flex flex-col items-center font-sans ${theme.sectionBg} transition-colors duration-300`}>
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}>
        {/* Subtitle */}
        <h2
          className={`text-lg font-semibold uppercase tracking-widest mb-1 ${theme.subtitleText} transition-colors duration-300`}>
          SERVICES PAGE
        </h2>

        {/* Heading */}
        <p
          className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl ${theme.headingText} transition-colors duration-300`}>
          Boost your brand with our expertise
        </p>
      </motion.div>

      <div className="w-full md:w-4/5 lg:w-4/5 h-auto p-4 sm:p-6 md:p-8 flex flex-col items-center gap-6 md:gap-10">
        <div className="w-full flex flex-col items-center gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              // Card container styling
              className={`w-full rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center transition-colors duration-300
                          ${theme.cardBg} ${theme.cardShadow}
                          ${
                            service.reverseLayout ? "md:flex-row-reverse" : ""
                          }`}>
              {/* Image Column */}
              <motion.div
                className="md:w-1/2 w-full p-3 md:p-4"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}>
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="w-full h-auto object-cover rounded-[35px]"
                />
              </motion.div>

              {/* Text Content Column */}
              <motion.div
                initial={{
                  x: service.reverseLayout ? 80 : -80,
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/2 w-full h-full p-4 md:p-8 flex flex-col justify-center rounded-[40px]">
                {(service.tools.length > 0 || service.subText) && (
                  <div className="flex items-center space-x-2 mb-3">
                    {service.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        // Tool background styling
                        className={`p-2 rounded-full ${theme.toolBg} transition-colors duration-300`}>
                        {/* Pass the icon color class to the helper function */}
                        {getToolIcon(tool, theme.toolIcon)}
                      </div>
                    ))}
                    {service.subText && (
                      // Subtext styling
                      <span
                        className={`hidden sm:block text-xs sm:text-sm font-medium ml-2 ${theme.subText} transition-colors duration-300`}>
                        {service.subText}
                      </span>
                    )}
                  </div>
                )}

                {/* Title */}
                <h3
                  className={`text-3xl sm:text-4xl font-extrabold mb-2 ${theme.cardTitleText} transition-colors duration-300`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base font-medium ${theme.cardDescriptionText} transition-colors duration-300`}>
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
