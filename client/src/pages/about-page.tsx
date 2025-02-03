import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileDown, Award, Wrench, Code, BookOpen } from "lucide-react";

const skills = [
  { name: "CAD/CAM Software", icon: Code },
  { name: "3D Modeling", icon: Wrench },
  { name: "Finite Element Analysis", icon: BookOpen },
  { name: "Product Design", icon: Wrench },
  { name: "Prototyping", icon: Code },
  { name: "Design for Manufacturing", icon: Wrench },
];

const certifications = [
  { 
    name: "Certified SolidWorks Professional",
    issuer: "Dassault Systèmes",
    year: "2022"
  },
  {
    name: "Certified Kuka Robot Programming 2",
    issuer: "Kuka Robotics",
    year: "2022"
  },
  {
    name: "Certified Forklift Operator",
    issuer: "WorkSafe Victoria",
    year: "2023"
  },
  {
    name: "Certified Sheetmetal Professional",
    issuer: "Dassault Systèmes",
    year: "2022"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900/95">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-square relative rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/images/about-image.jpg"
                alt="Professional Engineer at Work"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center text-center md:text-left"
            >
              <h1 className="mb-6 text-4xl font-bold text-blue-300">About Me</h1>
              <p className="mb-6 text-lg text-blue-200/80 leading-relaxed">
                Product Engineer with over 3 years of experience in product design, development, and prototyping.
                Specialized in advanced manufacturing technologies including 3D printing, laser cutting, and robotic systems.
                Committed to pushing the boundaries of engineering innovation.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:scale-105 transition-transform border-blue-500/20 hover:border-blue-500/40"
                  onClick={() => window.open("/resume.pdf")}
                >
                  <FileDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 text-center"
            >
              <h2 className="text-2xl font-bold flex items-center justify-center text-blue-300">
                <Wrench className="mr-2 h-6 w-6" />
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="flex items-center justify-center p-4 rounded-lg bg-slate-800/50 border border-blue-500/20 hover:border-blue-500/40 text-blue-200/80 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <skill.icon className="mr-3 h-5 w-5" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 text-center"
            >
              <h2 className="text-2xl font-bold flex items-center justify-center text-blue-300">
                <Award className="mr-2 h-6 w-6" />
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="p-6 rounded-lg bg-slate-800/50 border border-blue-500/20 hover:border-blue-500/40 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="font-bold text-blue-200">{cert.name}</h3>
                    <p className="text-sm text-blue-200/60 mt-1">{cert.issuer}</p>
                    <p className="text-sm text-blue-400 mt-1">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl text-center px-4">
          <h2 className="mb-8 text-2xl font-bold text-blue-300">Education</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 rounded-lg p-8 shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-400">Master of Engineering</h3>
              <p className="text-lg font-semibold text-blue-200">Deakin University | 2020 - 2022</p>
              <ul className="mt-4 text-blue-200/80 space-y-2 text-left list-disc list-inside">
                <li>Dual Specialization in Product Design and Additive Manufacturing</li>
                <li>Vice Chancellor's Professional Excellence Scholar with 100% meritorious scholarship</li>
                <li>Postgraduate Student Award and Project Excellence Award recipient</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8 shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-400">Bachelor of Engineering (Mechanical)</h3>
              <p className="text-lg font-semibold text-blue-200">Pune University | 2015 - 2019</p>
              <ul className="mt-4 text-blue-200/80 space-y-2 text-left list-disc list-inside">
                <li>Graduated with first class distinction (8.5 GPA)</li>
                <li>National finalist in Aakruti 2019</li>
                <li>Presented at Solidworks World 2019 in Dallas</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}