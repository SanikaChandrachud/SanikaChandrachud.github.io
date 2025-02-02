import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineEvents = [
  {
    year: "2018",
    title: "Bachelor's in Mechanical Engineering",
    description: "Graduated with honors",
    icon: GraduationCap,
  },
  {
    year: "2018-2020",
    title: "Design Engineer",
    description: "Worked on automotive projects",
    icon: Briefcase,
  },
  {
    year: "2020-2022",
    title: "Master's in Mechanical Engineering",
    description: "Specialized in robotics",
    icon: GraduationCap,
  },
  {
    year: "2022-Present",
    title: "Senior Design Engineer",
    description: "Leading innovation projects",
    icon: Briefcase,
  },
];

export default function Timeline() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="relative">
        {/* Center line */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5 }}
        />

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
                  className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  initial={{ x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                  <p className="text-muted-foreground mt-2">{event.description}</p>
                  <p className="text-sm font-semibold mt-2">{event.year}</p>
                </motion.div>
              </div>

              {/* Center Icon */}
              <motion.div
                className="relative z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <event.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </motion.div>

              {/* Empty space for alignment */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}