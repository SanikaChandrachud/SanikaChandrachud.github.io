import { useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Create smoother scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Create different movement speeds and depths for each layer
  const createParallaxValue = useCallback((depth: number) => {
    return useTransform(smoothProgress, [0, 1], ["0%", `${depth * 50}%`]);
  }, [smoothProgress]);

  // Define tech-themed SVG patterns
  const patterns = useMemo(() => ({
    circuit: (
      <>
        <path d="M20 50h60M50 20v60M20 20h60M20 80h60" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none" />
        <circle cx="50" cy="50" r="4" />
        <circle cx="20" cy="20" r="2" />
        <circle cx="80" cy="20" r="2" />
        <circle cx="20" cy="80" r="2" />
        <circle cx="80" cy="80" r="2" />
        <path d="M35 50a15 15 0 1 0 30 0 15 15 0 1 0-30 0" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none" />
      </>
    ),
    gear: (
      <>
        <path d="M50 25c-13.807 0-25 11.193-25 25s11.193 25 25 25 25-11.193 25-25-11.193-25-25-25zm0 45c-11.046 0-20-8.954-20-20s8.954-20 20-20 20 8.954 20 20-8.954 20-20 20z" />
        <path d="M50 35c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 25c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
        <path d="M50 15v10M50 75v10M85 50h-10M25 50h-10" stroke="currentColor" strokeWidth="3"/>
      </>
    ),
    chip: (
      <>
        <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="30" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="30" y1="60" x2="20" y2="60" stroke="currentColor" strokeWidth="2"/>
        <line x1="70" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="70" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="2"/>
        <rect x="40" y="40" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
      </>
    ),
    binary: (
      <>
        <text x="20" y="30" fontSize="8" fill="currentColor">10110</text>
        <text x="50" y="45" fontSize="8" fill="currentColor">01001</text>
        <text x="30" y="60" fontSize="8" fill="currentColor">11010</text>
        <text x="60" y="75" fontSize="8" fill="currentColor">00101</text>
      </>
    )
  }), []);

  // Define parallax layers with different depths and positions
  const layers = useMemo(() => [
    { depth: 1, left: "10%", top: "20%", size: "w-40 h-40", opacity: "0.08", pattern: "circuit" },
    { depth: 0.8, left: "70%", top: "15%", size: "w-32 h-32", opacity: "0.06", pattern: "gear" },
    { depth: 0.6, left: "25%", top: "45%", size: "w-48 h-48", opacity: "0.04", pattern: "chip" },
    { depth: 0.4, left: "80%", top: "60%", size: "w-36 h-36", opacity: "0.05", pattern: "binary" },
    { depth: 0.2, left: "15%", top: "75%", size: "w-40 h-40", opacity: "0.03", pattern: "circuit" },
    { depth: 0.7, left: "60%", top: "85%", size: "w-32 h-32", opacity: "0.07", pattern: "gear" },
    { depth: 0.5, left: "40%", top: "30%", size: "w-44 h-44", opacity: "0.04", pattern: "chip" },
    { depth: 0.3, left: "85%", top: "40%", size: "w-38 h-38", opacity: "0.06", pattern: "binary" },
  ], []);

  const parallaxElements = layers.map((layer) => ({
    ...layer,
    y: createParallaxValue(layer.depth)
  }));

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      {parallaxElements.map((element, index) => (
        <motion.div
          key={index}
          style={{
            y: element.y,
            left: element.left,
            top: element.top,
          }}
          className={`absolute ${element.size} opacity-${element.opacity}`}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="currentColor"
          >
            {patterns[element.pattern as keyof typeof patterns]}
          </svg>
        </motion.div>
      ))}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90"
        style={{ mixBlendMode: 'overlay' }}
      />
    </div>
  );
};

export default ParallaxBackground;