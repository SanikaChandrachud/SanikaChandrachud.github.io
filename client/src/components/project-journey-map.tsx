import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { SelectProject } from "@db/schema";
import { Link } from "wouter";

interface Props {
  projects: SelectProject[];
}

export default function ProjectJourneyMap({ projects }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<Array<{ start: DOMRect; end: DOMRect }>>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Calculate positions and update paths when component mounts or window resizes
  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current) return;
      
      const nodes = Array.from(containerRef.current.querySelectorAll('.project-node'));
      const newPaths = [];
      
      for (let i = 0; i < nodes.length - 1; i++) {
        const start = nodes[i].getBoundingClientRect();
        const end = nodes[i + 1].getBoundingClientRect();
        newPaths.push({ start, end });
      }
      
      setPaths(newPaths);
    };

    updatePaths();
    window.addEventListener('resize', updatePaths);
    return () => window.removeEventListener('resize', updatePaths);
  }, [projects]);

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
        ref={containerRef}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* SVG for connecting lines */}
        <svg 
          className="absolute inset-0 pointer-events-none z-0"
          style={{ 
            width: '100%',
            height: '100%',
            overflow: 'visible'
          }}
        >
          {paths.map((path, index) => (
            <motion.path
              key={index}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              d={`M ${path.start.x + path.start.width/2} ${path.start.y + path.start.height/2} 
                  C ${path.start.x + path.start.width + 50} ${path.start.y + path.start.height/2},
                    ${path.end.x - 50} ${path.end.y + path.end.height/2},
                    ${path.end.x + path.end.width/2} ${path.end.y + path.end.height/2}`}
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          ))}
        </svg>

        {/* Project nodes */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-node relative z-10 ${
              hoveredId === project.id ? 'scale-105' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link href={`/projects/${project.id}`}>
              <motion.div 
                className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 
                          shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-blue-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-200/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.split(',').map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
