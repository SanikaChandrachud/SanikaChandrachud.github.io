import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  alt?: string;
  className?: string;
}

export default function AdaptiveHeroImage({ src, alt, className = "" }: Props) {
  const [contrast, setContrast] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw image to canvas
      ctx.drawImage(img, 0, 0);

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Calculate average brightness
      let totalBrightness = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        // Calculate perceived brightness using relative luminance formula
        const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        totalBrightness += brightness;
      }

      const avgBrightness = totalBrightness / (data.length / 4);
      // Adjust contrast value for better text visibility
      const contrastValue = Math.max(0.4, Math.min(0.7, 1 - avgBrightness));
      setContrast(contrastValue);
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="hidden" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      >
        {/* Remove the motion.div gradient overlay as we'll control it from the parent */}
      </div>
    </div>
  );
}