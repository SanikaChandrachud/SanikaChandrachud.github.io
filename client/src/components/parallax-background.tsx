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

  // Create different movement speeds for each layer
  const createParallaxValue = useCallback((depth: number) => {
    return useTransform(smoothProgress, [0, 1], ["0%", `${depth * 50}%`]);
  }, [smoothProgress]);

  // Define parallax layers with different depths and positions
  const layers = useMemo(() => [
    { depth: 1, opacity: 1, scale: 1.1 },
    { depth: 0.8, opacity: 0.95, scale: 1.2 },
    { depth: 0.6, opacity: 0.9, scale: 1.3 },
  ], []);

  const parallaxElements = layers.map((layer) => ({
    ...layer,
    y: createParallaxValue(layer.depth)
  }));

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
      {parallaxElements.map((element, index) => (
        <motion.div
          key={index}
          style={{
            y: element.y,
            scale: element.scale,
          }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/tech-manufacturing.png")',
              opacity: element.opacity,
              filter: 'brightness(0.7) contrast(1.2)'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ParallaxBackground;