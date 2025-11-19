import React from "react";
import { Sparkles, Printer, Box } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Core Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver visual solutions that help you dominate the digital
            landscape.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isCenter = index === 1; // Middle card

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 
                  ${
                    isCenter
                      ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white"
                      : "bg-white text-gray-900"
                  }`}>
                {/* ICON WRAPPER */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 
                    ${isCenter ? "bg-white/20" : "bg-indigo-500/10"}
                  `}>
                  <service.icon
                    className={`w-8 h-8 
                      ${isCenter ? "text-white" : "text-indigo-500"}
                    `}
                  />
                </div>

                {/* TITLE */}
                <h3
                  className={`text-xl font-bold mb-3 
                    ${isCenter ? "text-white" : "text-gray-900"}
                  `}>
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`${
                    isCenter ? "text-white/90" : "text-gray-600"
                  } leading-relaxed`}>
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
