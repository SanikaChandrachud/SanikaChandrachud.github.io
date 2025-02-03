import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineEvents = [
  {
    year: "Dec 2022 - Present",
    title: "Product Engineer (Mechanical)",
    subtitle: "ManuFutures",
    description: "Leading product development and prototyping using advanced manufacturing technologies. Expertise in product design, 3D printing prototyping, and design for manufacturing strategies.",
    icon: Briefcase,
  },
  {
    year: "2020 - 2022",
    title: "Master of Engineering",
    subtitle: "Deakin University",
    description: "Dual Specialization in Product Design and Additive Manufacturing. Vice Chancellor's Professional Excellence Scholar with 100% meritorious scholarship.",
    icon: GraduationCap,
  },
  {
    year: "Jul 2019 - Feb 2021",
    title: "Simulia Developer",
    subtitle: "Dassault Systemes",
    description: "Developed optimization solutions for CAD models using C++ and Object Oriented Programming.",
    icon: Briefcase,
  },
  {
    year: "2015 - 2019",
    title: "Bachelor of Engineering (Mechanical)",
    subtitle: "Pune University",
    description: "Graduated with first class distinction (8.5 GPA). National finalist in Aakruti 2019, presented at Solidworks World 2019 in Dallas.",
    icon: GraduationCap,
  }
];

export default function Timeline() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="relative">
        {/* Curved road path with animated gradient */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 w-4 h-full"
          style={{
            background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.5), rgba(59, 130, 246, 0.2))",
            borderRadius: "4px",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
          }}
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Road markings */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: "linear-gradient(to bottom, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)",
                backgroundSize: "100% 20px",
                animation: "moveRoadMarkings 2s linear infinite"
              }}
            />
          </div>
        </motion.div>

        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <motion.div
                  className="group bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 shadow-lg hover:shadow-xl hover:border-blue-500/40 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(30, 41, 59, 0.7)"
                  }}
                  initial={{ x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ x: 0 }}
                  transition={{ 
                    duration: 0.5,
                    scale: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                >
                  <h3 className="text-xl font-bold text-blue-300">
                    {event.title}
                  </h3>
                  <h4 className="text-lg text-blue-200 font-semibold mt-1">
                    {event.subtitle}
                  </h4>
                  <p className="text-blue-100/70 mt-2">
                    {event.description}
                  </p>
                  <p className="text-sm font-semibold mt-2 text-blue-400">
                    {event.year}
                  </p>
                </motion.div>
              </div>

              {/* Timeline node with pulse effect */}
              <motion.div
                className="relative z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30"
                  whileHover={{ 
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  <event.icon className="h-6 w-6 text-white" />
                </motion.div>
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-500"
                  initial={{ opacity: 0.3, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.5 }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeOut"
                  }}
                />
              </motion.div>

              {/* Empty space for alignment */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes moveRoadMarkings {
          from { background-position: 0 0; }
          to { background-position: 0 20px; }
        }
      `}</style>
    </div>
  );
}