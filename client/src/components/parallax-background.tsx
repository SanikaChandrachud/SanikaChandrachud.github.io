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

  // Define manufacturing and tech-themed SVG patterns
  const patterns = useMemo(() => ({
    factory: (
      <>
        <path d="M30 20h40v30l20 20v10H10V60l20-20V20z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none" />
        <path d="M25 70h10M45 70h10M65 70h10" 
              stroke="currentColor" 
              strokeWidth="1.5" />
        <rect x="35" y="30" width="10" height="10" 
              stroke="currentColor" 
              fill="none" />
      </>
    ),
    gear: (
      <>
        <path d="M50 25c-13.807 0-25 11.193-25 25s11.193 25 25 25 25-11.193 25-25-11.193-25-25-25zm0 40c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15z" />
        <path d="M50 35c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 25c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
      </>
    ),
    robot: (
      <>
        <rect x="35" y="20" width="30" height="40" rx="2" 
              stroke="currentColor" 
              fill="none" />
        <circle cx="50" cy="35" r="5" 
                stroke="currentColor" 
                fill="none" />
        <path d="M40 50h20M40 45h20M40 55h20" 
              stroke="currentColor" 
              strokeWidth="1.5" />
      </>
    ),
    circuit: (
      <>
        <path d="M20 50h60M50 20v60" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none" />
        <circle cx="50" cy="50" r="3" />
        <circle cx="20" cy="50" r="2" />
        <circle cx="80" cy="50" r="2" />
        <path d="M35 50a15 15 0 1 0 30 0 15 15 0 1 0-30 0" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              fill="none" />
      </>
    )
  }), []);

  // Define parallax layers with different depths and positions
  const layers = useMemo(() => [
    { depth: 1, left: "10%", top: "20%", size: "w-48 h-48", opacity: "0.06", pattern: "factory" },
    { depth: 0.8, left: "70%", top: "15%", size: "w-40 h-40", opacity: "0.05", pattern: "gear" },
    { depth: 0.6, left: "25%", top: "45%", size: "w-56 h-56", opacity: "0.04", pattern: "robot" },
    { depth: 0.4, left: "80%", top: "60%", size: "w-44 h-44", opacity: "0.03", pattern: "circuit" },
    { depth: 0.2, left: "15%", top: "75%", size: "w-48 h-48", opacity: "0.05", pattern: "factory" },
    { depth: 0.7, left: "60%", top: "85%", size: "w-40 h-40", opacity: "0.04", pattern: "gear" },
    { depth: 0.5, left: "40%", top: "30%", size: "w-52 h-52", opacity: "0.03", pattern: "robot" },
    { depth: 0.3, left: "85%", top: "40%", size: "w-44 h-44", opacity: "0.05", pattern: "circuit" },
  ], []);

  const parallaxElements = layers.map((layer) => ({
    ...layer,
    y: createParallaxValue(layer.depth)
  }));

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden bg-background">
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
            className="w-full h-full text-primary/20"
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