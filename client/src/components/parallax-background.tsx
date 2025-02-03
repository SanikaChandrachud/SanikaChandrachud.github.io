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
    return useTransform(smoothProgress, [0, 1], ["0%", `${depth * 20}%`]);
  }, [smoothProgress]);

  // Background images with manufacturing/tech theme
  const bgImages = [
    'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1581093806997-124204d6fa9d?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2000&q=80'
  ];

  // Preload images
  useEffect(() => {
    bgImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Define parallax layers with different depths and positions
  const layers = useMemo(() => [
    { depth: 0.1, opacity: 0.4, image: bgImages[0] },
    { depth: 0.2, opacity: 0.3, image: bgImages[1] },
    { depth: 0.3, opacity: 0.2, image: bgImages[2] }
  ], []);

  const parallaxElements = layers.map((layer) => ({
    ...layer,
    y: createParallaxValue(layer.depth)
  }));

  return (
    <div 
      ref={ref} 
      className="fixed inset-0 -z-10 overflow-hidden" 
      style={{ position: 'fixed' }}
    >
      {/* Dark background base */}
      <div className="absolute inset-0 bg-slate-900" />

      {/* Parallax layers */}
      {parallaxElements.map((element, index) => (
        <motion.div
          key={index}
          style={{
            y: element.y,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${element.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: element.opacity,
            willChange: 'transform',
          }}
          className="transition-opacity duration-300"
        />
      ))}

      {/* Gradient overlay for better text contrast */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/60"
      />
    </div>
  );
};

export default ParallaxBackground;