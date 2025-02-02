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

  // Define parallax layers with different depths and positions
  const layers = useMemo(() => [
    { depth: 1, left: "10%", top: "20%", size: "w-32 h-32", opacity: "0.08" },
    { depth: 0.8, left: "70%", top: "15%", size: "w-24 h-24", opacity: "0.06" },
    { depth: 0.6, left: "25%", top: "45%", size: "w-40 h-40", opacity: "0.04" },
    { depth: 0.4, left: "80%", top: "60%", size: "w-36 h-36", opacity: "0.05" },
    { depth: 0.2, left: "15%", top: "75%", size: "w-28 h-28", opacity: "0.03" },
  ], []);

  const parallaxElements = layers.map((layer, index) => ({
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
            {index % 2 === 0 ? (
              // Gear pattern
              <>
                <path d="M50 20c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30 16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30zm0 55c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25z" />
                <path d="M50 35c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 25c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
              </>
            ) : (
              // Circuit pattern
              <>
                <path d="M20 50h60M50 20v60" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="50" cy="50" r="5" />
                <circle cx="20" cy="50" r="3" />
                <circle cx="80" cy="50" r="3" />
                <circle cx="50" cy="20" r="3" />
                <circle cx="50" cy="80" r="3" />
              </>
            )}
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