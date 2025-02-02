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
    <div className="relative">
      <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-muted" />
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`flex items-center gap-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex-1 text-right">
              <h3 className="font-bold">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
              <p className="text-sm text-primary">{event.year}</p>
            </div>
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <event.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
