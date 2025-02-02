import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const skills = [
  "CAD/CAM Software",
  "3D Modeling",
  "Finite Element Analysis",
  "Product Design",
  "Prototyping",
  "Design for Manufacturing",
];

const certifications = [
  "Professional Engineer (PE) License",
  "Certified SolidWorks Professional (CSWP)",
  "Six Sigma Green Belt",
  "AutoCAD Certified Professional",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581091870598-36ce9bad5c77"
                alt="Woman Engineer"
                className="rounded-lg object-cover shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center"
            >
              <h1 className="mb-6 text-4xl font-bold">About Me</h1>
              <p className="mb-6 text-lg text-muted-foreground">
                As a woman in STEM, I've dedicated my career to pushing the
                boundaries of mechanical engineering. With experience spanning
                automotive design and robotics, I bring a unique perspective to
                every project.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-fit"
                onClick={() => window.open("/resume.pdf")}
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-card p-4 text-card-foreground shadow"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-card p-4 text-card-foreground shadow"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold">Beyond Engineering</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto"
          >
            <p>
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
