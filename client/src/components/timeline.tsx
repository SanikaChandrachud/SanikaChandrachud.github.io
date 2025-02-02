import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineEvents = [
  {
    year: "Dec 2022 - Present",
    title: "Product Engineer (Mechanical)",
    subtitle: "ManuFutures",
    description: "Leading product development and prototyping using advanced manufacturing technologies. Expertise in 3D printing, laser cutting, and robotic systems.",
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
    year: "Mar 2021 - Dec 2021",
    title: "Design Engineer",
    subtitle: "Dispotronics",
    description: "Led product specifications and development, increasing company turnover by 150%. Expertise in CAD modeling and custom design solutions.",
    icon: Briefcase,
  },
  {
    year: "Jul 2019 - Feb 2021",
    title: "Simulia Developer",
    subtitle: "Dassault Systemes",
    description: "Developed optimization solutions for CAD models using C++ and Object Oriented Programming. Mentored high school students in design engineering.",
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
                  <h4 className="text-lg text-muted-foreground font-semibold mt-1">{event.subtitle}</h4>
                  <p className="text-muted-foreground mt-2">{event.description}</p>
                  <p className="text-sm font-semibold mt-2 text-primary/80">{event.year}</p>
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