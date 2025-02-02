import Timeline from "@/components/timeline";
import { motion } from "framer-motion";
import ParallaxBackground from "@/components/parallax-background";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Award } from "lucide-react";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <ParallaxBackground />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/tech-pattern.svg")' }}
          />
          <div className="absolute inset-0">
            <img
              src="/images/hero-image.jpg"
              alt="Advanced Engineering and Innovation"
              className="w-full h-full object-cover object-center brightness-90"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </motion.div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex h-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 
              className="mb-6 text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Engineering Portfolio
            </motion.h1>
            <motion.h2 
              className="mb-4 text-3xl sm:text-4xl font-semibold text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Advanced Manufacturing & Design
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-blue-100/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Innovating through precision engineering and cutting-edge technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link href="/projects">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Expertise Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground">Specializing in mechanical design and advanced manufacturing</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add expertise cards based on resume content */}
            <ExpertiseCard
              icon={<Briefcase className="h-8 w-8" />}
              title="Mechanical Design"
              description="Expert in CAD/CAM software, mechanical systems design, and prototype development"
            />
            <ExpertiseCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="Advanced Manufacturing"
              description="Proficient in additive manufacturing, CNC machining, and production optimization"
            />
            <ExpertiseCard
              icon={<Award className="h-8 w-8" />}
              title="Project Leadership"
              description="Successfully led cross-functional teams in complex engineering projects"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
            <p className="text-muted-foreground">A timeline of my engineering career and achievements</p>
          </motion.div>
          <Timeline />
        </div>
      </section>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-card border shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}