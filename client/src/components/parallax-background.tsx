import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Create different movement speeds for each layer
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const elements = [
    { style: { y: y1, left: "10%", top: "20%" } },
    { style: { y: y2, left: "70%", top: "40%" } },
    { style: { y: y3, left: "30%", top: "60%" } },
  ];

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          style={element.style}
          className="absolute w-24 h-24 opacity-5"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="currentColor"
          >
            {/* Engineering-themed gear pattern */}
            <path d="M50 25c-13.807 0-25 11.193-25 25s11.193 25 25 25 25-11.193 25-25-11.193-25-25-25zm0 45c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20z" />
            <path d="M50 35c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 25c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
    </div>
  );
};

export default ParallaxBackground;
