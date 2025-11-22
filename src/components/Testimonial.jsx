import React, { useEffect, useState } from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { useSelector } from "react-redux"; // <-- Import useSelector

// Define the theme styles object for this component
const testimonialThemeStyles = {
  light: {
    sectionBg: "bg-gray-50",
    headingText: "text-gray-900",
    paragraphText: "text-gray-600",
    cardBg: "bg-white",
    cardBorder: "border-gray-100",
    messageText: "text-gray-700",
    nameText: "text-gray-900",
    roleText: "text-gray-500",
    dotActiveBg: "bg-indigo-600",
    dotInactiveBg: "bg-gray-300 hover:bg-gray-400",
    quoteIconColor: "text-indigo-500",
  },
  dark: {
    sectionBg: "bg-gray-900",
    headingText: "text-gray-100",
    paragraphText: "text-gray-400",
    cardBg: "bg-gray-800",
    cardBorder: "border-gray-700",
    messageText: "text-gray-300",
    nameText: "text-gray-100",
    roleText: "text-gray-500",
    dotActiveBg: "bg-indigo-400", // Brighter for dark background
    dotInactiveBg: "bg-gray-600 hover:bg-gray-500",
    quoteIconColor: "text-indigo-400", // Brighter for dark background
  },
};

const testimonials = [
  {
    name: "Sophia Daniels",
    role: "Brand Strategist",
    message:
      "CGDConcepts transformed my entire brand identity. Their creativity and speed blew me away.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Product Owner",
    message:
      "From packaging to digital design, everything came out better than I imagined.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Aisha Bello",
    role: "Entrepreneur",
    message:
      "My business saw massive improvement after the branding overhaul. Outstanding work!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Alan",
    role: "CEO",
    message:
      "Professional, modern and consistent design. They exceeded expectations.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aisha Bello",
    role: "Entrepreneur",
    message:
      "My business saw massive improvement after the branding overhaul. Outstanding work!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Alan",
    role: "CEO",
    message:
      "Professional, modern and consistent design. They exceeded expectations.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const Testimonial = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  // 1. Read the theme state from Redux
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  // 2. Select the current style set
  const theme = isDarkMode
    ? testimonialThemeStyles.dark
    : testimonialThemeStyles.light;

  const groups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groups.push(testimonials.slice(i, i + 3));
  }

  const shouldSlideDesktop = testimonials.length > 3;

  useEffect(() => {
    const onScroll = () => {
      const sec = document.getElementById("testimonials");
      if (!sec) return;
      if (sec.getBoundingClientRect().top < window.innerHeight - 150)
        setVisible(true);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!shouldSlideDesktop) return;

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % groups.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [groups.length, shouldSlideDesktop]);

  return (
    <section
      id="testimonials"
      className={`py-20 ${theme.sectionBg}  transition-colors duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          {/* Apply theme colors to heading */}
          <h2
            className={`text-4xl font-extrabold mb-4 ${theme.headingText} transition-colors duration-300`}>
            What Clients Say
          </h2>
          {/* Apply theme colors to paragraph */}
          <p
            className={`text-xl max-w-2xl mx-auto ${theme.paragraphText} transition-colors duration-300`}>
            Trusted by hundreds of brands, entrepreneurs, and businesses.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-6 px-2 no-scrollbar">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`min-w-[85%] snap-center p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 
                ${theme.cardBg} ${theme.cardBorder} border`}>
              {/* Quote Icon */}
              <BiSolidQuoteAltRight
                className={`w-4 h-4 mb-4 opacity-70 ${theme.quoteIconColor}`}
              />

              {/* Message */}
              <p className={`leading-relaxed mb-6 ${theme.messageText}`}>
                “{t.message}”
              </p>

              <div className="flex items-center gap-4 mt-4">
                <img
                  src={t.img}
                  className="w-14 h-14 rounded-full object-cover shadow"
                />
                <div>
                  {/* Name */}
                  <h4 className={`text-lg font-semibold ${theme.nameText}`}>
                    {t.name}
                  </h4>
                  {/* Role */}
                  <p className={`text-sm ${theme.roleText}`}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}>
            {groups.map((group, i) => (
              <div
                key={i}
                className="min-w-full grid grid-cols-3 gap-8 px-2 md:px-4">
                {group.map((t, idx) => (
                  <div
                    key={idx}
                    className={`p-4 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-500 
                      ${theme.cardBg} ${theme.cardBorder} border`}>
                    {/* Quote Icon */}
                    <BiSolidQuoteAltRight
                      className={`w-4 h-4 mb-4 opacity-70 ${theme.quoteIconColor}`}
                    />

                    {/* Message */}
                    <p className={`leading-relaxed mb-6 ${theme.messageText}`}>
                      “{t.message}”
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <img
                        src={t.img}
                        className="w-14 h-14 rounded-full object-cover shadow"
                      />
                      <div>
                        {/* Name */}
                        <h4 className="text-lg font-semibold text-gray-900">
                          {t.name}
                        </h4>
                        {/* Role */}
                        <p className={`text-sm ${theme.roleText}`}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {shouldSlideDesktop && (
            <div className="flex justify-center mt-4 gap-2">
              {groups.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                    current === i
                      ? `${theme.dotActiveBg} scale-125` // Active dot style
                      : `${theme.dotInactiveBg}` // Inactive dot style
                  }`}></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
