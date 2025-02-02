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
    name: "Professional Engineer (PE) License",
    issuer: "State Board of Engineering",
    year: "2023"
  },
  {
    name: "Certified SolidWorks Professional (CSWP)",
    issuer: "Dassault Systèmes",
    year: "2022"
  },
  {
    name: "Six Sigma Green Belt",
    issuer: "ASQ",
    year: "2021"
  },
  {
    name: "AutoCAD Certified Professional",
    issuer: "Autodesk",
    year: "2020"
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
    <div className="min-h-screen bg-background px-4 md:px-8">
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-square relative rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/images/engineer-profile.svg"
                alt="Professional Engineer"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center text-center md:text-left"
            >
              <h1 className="mb-6 text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">About Me</h1>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                As a woman in STEM, I've dedicated my career to pushing the
                boundaries of mechanical engineering. With experience spanning
                automotive design and robotics, I bring a unique perspective to
                every project.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:scale-105 transition-transform"
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
      <section className="py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 text-center"
            >
              <h2 className="text-2xl font-bold flex items-center justify-center">
                <Wrench className="mr-2 h-6 w-6" />
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="flex items-center justify-center p-4 rounded-lg bg-card hover:bg-primary/5 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300"
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
              <h2 className="text-2xl font-bold flex items-center justify-center">
                <Award className="mr-2 h-6 w-6" />
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="p-6 rounded-lg bg-card hover:bg-primary/5 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="font-bold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    <p className="text-sm text-primary mt-1">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond Engineering Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="mb-8 text-2xl font-bold">Beyond Engineering</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto dark:prose-invert"
          >
            <p className="text-center mx-auto max-w-2xl">
              When I'm not designing mechanical systems, you can find me mentoring
              young women in STEM, participating in robotics competitions, and
              exploring the intersection of art and engineering through metal
              sculpture.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}