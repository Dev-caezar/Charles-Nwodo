import React from "react";
import { useSelector } from "react-redux"; // <-- Import useSelector

import logo1 from "../assets/public/logo1.png";
import logo2 from "../assets/public/logo2.png";
import logo3 from "../assets/public/logo3.png";
import logo4 from "../assets/public/logo4.png";
import logo5 from "../assets/public/logo5.png";
import flyer1 from "../assets/public/flyer1.png";
import flyer2 from "../assets/public/flyer2.png";
import flyer3 from "../assets/public/flyer3.png";
import flyer4 from "../assets/public/flyer4.png";
import flyer5 from "../assets/public/flyer5.png";
import buz1 from "../assets/public/buz1.png";
import buz2 from "../assets/public/buz2.png";
import buz3 from "../assets/public/buz3.png";
import buz4 from "../assets/public/buz4.png";
import buz5 from "../assets/public/buz5.png";
import letter1 from "../assets/public/letter1.png";
import letter2 from "../assets/public/letter2.png";
import letter3 from "../assets/public/letter3.png";
import letter4 from "../assets/public/letter4.png";
import letter5 from "../assets/public/letter5.png";
import wedding1 from "../assets/public/wedding1.png";
import wedding2 from "../assets/public/wedding2.png";
import wedding3 from "../assets/public/wedding3.png";
import wedding4 from "../assets/public/wedding4.png";
import wedding5 from "../assets/public/wedding5.png";
import jotter1 from "../assets/public/jotter1.png";
import jotter2 from "../assets/public/jotter2.png";
import jotter3 from "../assets/public/jotter3.png";
import jotter4 from "../assets/public/jotter4.png";
import jotter5 from "../assets/public/jotter5.png";

// Define Theme Styles
const portfolioThemeStyles = {
  light: {
    // Header Section (Blue Primary)
    headerBg: "bg-blue-600",
    headerText: "text-white",

    // Content Section (White Primary)
    contentBg: "bg-white",
    introText: "text-[#666]", // Slightly darker gray for better legibility
    buttonBg: "bg-blue-600 hover:bg-[#002a91]",
    buttonText: "text-white",
    categoryTitle: "text-gray-700",
    placeholderText: "text-white",
  },
  dark: {
    // Header Section (Dark Blue Primary)
    headerBg: "bg-blue-800",
    headerText: "text-gray-100",

    // Content Section (Dark Gray Primary)
    contentBg: "bg-gray-900",
    introText: "text-gray-400",
    buttonBg: "bg-blue-700 hover:bg-blue-600",
    buttonText: "text-white",
    categoryTitle: "text-gray-200",
    placeholderText: "text-gray-100",
  },
};

const Portfolio = () => {
  // 1. Read the theme state from Redux
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  // 2. Select the current style set
  const theme = isDarkMode
    ? portfolioThemeStyles.dark
    : portfolioThemeStyles.light;

  const categories = [
    {
      name: "Logos",
      items: [
        { label: "Card 1", images: logo1 },
        { label: "Card 2", images: logo2 },
        { label: "Card 3", images: logo3 },
        { label: "Card 4", images: logo4 },
        { label: "Card 5", images: logo5 },
      ],
    },
    {
      name: "Flyers",
      items: [
        { label: "Card 1", images: flyer1 },
        { label: "Card 2", images: flyer2 },
        { label: "Card 3", images: flyer3 },
        { label: "Card 4", images: flyer4 },
        { label: "Card 5", images: flyer5 },
      ],
    },
    {
      name: "Business Cards",
      items: [
        { label: "Card A", images: buz1 },
        { label: "Card B", images: buz2 },
        { label: "Card C", images: buz3 },
        { label: "Card D", images: buz4 },
        { label: "Card E", images: buz5 },
      ],
    },
    {
      name: "Letterhead + Company Magazine + Log Book",
      items: [
        { label: "Banner 1", images: letter1 },
        { label: "Banner 2", images: letter2 },
        { label: "Banner 3", images: letter3 },
        { label: "Banner 4", images: letter4 },
        { label: "Banner 5", images: letter5 },
      ],
    },
    {
      name: "Wedding Card Designs",
      items: [
        { label: "Banner 1", images: wedding1 },
        { label: "Banner 2", images: wedding2 },
        { label: "Banner 3", images: wedding3 },
        { label: "Banner 4", images: wedding4 },
        { label: "Banner 5", images: wedding5 },
      ],
    },
    {
      name: "Jotters + ID Cards",
      items: [
        // These items use Tailwind classes for background color, which we'll keep as-is
        { label: "Banner 1", images: jotter1 },
        { label: "Banner 2", images: jotter2 },
        { label: "Banner 3", images: jotter3 },
        { label: "Banner 4", images: jotter4 },
        { label: "Banner 5", images: jotter5 },
      ],
    },
  ];

  return (
    <div
      className={`w-full min-h-screen flex flex-col ${theme.headerBg} transition-colors duration-300`}>
      {/* Header Section */}
      <div className="w-full flex justify-center items-center pt-10">
        <h2
          className={`text-2xl md:text-3xl font-bold uppercase tracking-widest ${theme.headerText} transition-colors duration-300`}>
          Portfolio Page
        </h2>
      </div>

      {/* Main Content Section */}
      <div
        className={`flex flex-col items-center pt-10 pb-16 mt-10 shadow-lg ${theme.contentBg} transition-colors duration-300`}>
        <div className="w-[85%] text-center flex flex-col gap-6 mb-12">
          {/* Intro Text */}
          <h4
            className={`text-[20px] md:text-[22px] leading-relaxed ${theme.introText} transition-colors duration-300`}>
            Here’s a collection of our past works — showcasing our expertise in
            design, print, and product branding. Quality Designs and affordable
            prints in Nigeria.
          </h4>

          {/* Categories Button */}
          <div
            className={`w-[200px] h-[60px] flex justify-center items-center rounded-[15px] mx-auto shadow-md cursor-pointer transition ${theme.buttonBg} ${theme.buttonText}`}>
            <h4 className={`text-[20px] font-medium ${theme.buttonText}`}>
              Categories
            </h4>
          </div>
        </div>

        {/* Portfolio Categories */}
        {categories.map((category, idx) => (
          <div key={idx} className="w-full mb-12">
            {/* Category Title */}
            <div className="w-[95%] mx-auto flex justify-start items-center mb-6">
              <h3
                className={`text-xl font-semibold ${theme.categoryTitle} transition-colors duration-300`}>
                {category.name}
              </h3>
            </div>

            {/* Image Carousel/Slider */}
            <div className="w-[95%] mx-auto relative">
              <div
                className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 pb-4"
                style={{ scrollbarWidth: "none" }}>
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex-none w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 snap-center">
                    <div className="h-60 rounded-[25px] overflow-hidden flex items-center justify-center">
                      {/* Conditional rendering for image or color placeholder */}
                      {item.images.startsWith("bg-") ? (
                        <div className={`w-full h-full ${item.images}`}>
                          <p
                            className={`font-bold text-center pt-10 ${theme.placeholderText}`}>
                            {item.label}
                          </p>
                        </div>
                      ) : (
                        <img
                          src={item.images}
                          alt={item.label}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
