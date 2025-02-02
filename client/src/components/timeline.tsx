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
    <div className="relative ml-8">
      <div className="absolute left-0 h-full w-0.5 bg-muted" />
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <event.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
              <p className="text-sm text-primary">{event.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}