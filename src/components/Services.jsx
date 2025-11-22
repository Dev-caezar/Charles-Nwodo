import React from "react";
import { useSelector } from "react-redux"; // <-- Import useSelector
import { Sparkles, Printer, Box } from "lucide-react";
import { motion } from "framer-motion";

// 1. Define Theme Styles
const serviceThemeStyles = {
  light: {
    sectionBg: "bg-gray-50",
    headingText: "text-gray-900",
    paragraphText: "text-gray-600",

    // Default Card Styles (Light Mode)
    card: {
      bg: "bg-white",
      shadow: "shadow-xl border border-gray-100",
      titleText: "text-gray-900",
      descriptionText: "text-gray-600",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
    },

    // Highlighted Card Styles (Light Mode)
    highlight: {
      bg: "bg-linear-to-br from-blue-500 to-blue-700",
      titleText: "text-white",
      descriptionText: "text-white/90",
      iconBg: "bg-white/20",
      iconColor: "text-white",
    },
  },
  dark: {
    sectionBg: "bg-gray-900",
    headingText: "text-gray-100",
    paragraphText: "text-gray-400",

    // Default Card Styles (Dark Mode)
    card: {
      bg: "bg-gray-800",
      shadow: "shadow-2xl border border-gray-700", // Use darker shadow/border
      titleText: "text-gray-100",
      descriptionText: "text-gray-400",
      iconBg: "bg-indigo-500/20", // Slightly more visible icon background
      iconColor: "text-indigo-400",
    },

    // Highlighted Card Styles (Dark Mode) - Keep the blue gradient but adapt text
    highlight: {
      bg: "bg-linear-to-br from-blue-600 to-blue-800", // Slightly darker blue gradient
      titleText: "text-white",
      descriptionText: "text-white/80",
      iconBg: "bg-white/20",
      iconColor: "text-white",
    },
  },
};

const services = [
  {
    title: "Graphics Design",
    description:
      "Eye-catching and professional designs that communicate your message clearly.",
    icon: Sparkles,
  },
  {
    title: "Printing Services",
    description:
      "Quality prints for flyers, banners, business cards, souvenirs, and more — fast and affordable.",
    icon: Printer,
  },
  {
    title: "Product Design & Branding",
    description:
      "We help brands look great through custom packaging, labels, UI/UX and product identity creation.",
    icon: Box,
  },
];

const Services = () => {
  // 2. Read the theme state from Redux
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  // 3. Select the current style set
  const theme = isDarkMode ? serviceThemeStyles.dark : serviceThemeStyles.light;

  return (
    <section
      className={`py-20 ${theme.sectionBg} transition-colors duration-300`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2
            className={`text-4xl font-extrabold mb-4 ${theme.headingText} transition-colors duration-300`}>
            Our Core Expertise
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${theme.paragraphText} transition-colors duration-300`}>
            We deliver visual solutions that help you dominate the digital
            landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isCenter = index === 1;

            // 4. Select the specific styles based on index (isCenter)
            const cardStyle = isCenter ? theme.highlight : theme.card;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                // Apply combined styles
                className={`p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl 
                  ${cardStyle.bg} ${cardStyle.shadow} ${
                  isCenter ? "" : "text-gray-900"
                }
                `}>
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 
                    ${cardStyle.iconBg}
                  `}>
                  <service.icon className={`w-8 h-8 ${cardStyle.iconColor}`} />
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 ${cardStyle.titleText} transition-colors duration-300`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`${cardStyle.descriptionText} leading-relaxed transition-colors duration-300`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
