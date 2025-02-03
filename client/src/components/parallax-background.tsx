import { useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ParallaxBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
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
    return useTransform(smoothProgress, [0, 1], ["0%", `${depth * 15}%`]);
  }, [smoothProgress]);

  // Define parallax layers with different depths and patterns
  const layers = useMemo(() => [
    { depth: 0.1, opacity: 0.15, color: "from-blue-600/30 to-purple-600/30" },
    { depth: 0.2, opacity: 0.1, color: "from-cyan-500/20 to-blue-500/20" },
    { depth: 0.3, opacity: 0.05, color: "from-indigo-500/10 to-blue-600/10" }
  ], []);

  const parallaxElements = layers.map((layer) => ({
    ...layer,
    y: createParallaxValue(layer.depth)
  }));

  return (
    <div 
      ref={ref} 
      className="fixed inset-0 -z-10 overflow-hidden bg-slate-900"
    >
      {/* Base tech pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Parallax gradient layers */}
      {parallaxElements.map((element, index) => (
        <motion.div
          key={index}
          style={{
            y: element.y,
            opacity: element.opacity,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${element.color}`}
        >
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 25%, transparent 50%)',
              backgroundSize: '200% 100%',
              animation: 'shine 8s infinite linear'
            }}
          />
        </motion.div>
      ))}

      {/* Additional tech pattern overlay */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(255,255,255,0.02) 25%, transparent 25%)`,
          backgroundSize: '4px 4px',
          opacity: 0.1
        }}
      />

      {/* Final gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50" />
    </div>
  );
};

export default ParallaxBackground;