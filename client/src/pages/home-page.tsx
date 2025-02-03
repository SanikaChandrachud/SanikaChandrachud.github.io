import Timeline from "@/components/timeline";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Wrench, Bot } from "lucide-react";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900/95">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/images/manufacturing-bg.png")',
              opacity: 0.3 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900/70 to-slate-900/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
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
              Mechanical Design Engineer
            </motion.h1>
            <motion.h2 
              className="mb-4 text-3xl sm:text-4xl font-semibold text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Design • Prototype • Innovate
            </motion.h2>
            <motion.p
              className="text-xl text-blue-200/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Creating innovative solutions through advanced engineering and design excellence
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
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
            <h2 className="text-3xl font-bold mb-4 text-blue-300">Areas of Expertise</h2>
            <p className="text-blue-100/80">Specialized in advanced engineering solutions</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ExpertiseCard
              icon={<Wrench className="h-8 w-8" />}
              title="Product Design"
              description="Expert in mechanical design, CAD modeling, and design optimization"
            />
            <ExpertiseCard
              icon={<Cpu className="h-8 w-8" />}
              title="Advanced Manufacturing"
              description="Specialized in 3D printing, prototyping, and design for manufacturing"
            />
            <ExpertiseCard
              icon={<Bot className="h-8 w-8" />}
              title="Robotics and Automation"
              description="Experience with industrial robotics and automation solutions"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link href="/projects">
              <Button className="bg-blue-500 hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-lg px-8 py-6">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-900/50 relative">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"
          style={{
            backgroundImage: 'url("/images/tech-pattern.svg")',
            opacity: 0.05
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-300">Professional Journey</h2>
            <p className="text-blue-100/80">A timeline of achievements and growth</p>
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
      className="p-6 rounded-lg bg-slate-800/50 border border-blue-500/20 shadow-lg hover:shadow-xl hover:border-blue-500/40 transition-all duration-300"
    >
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-200">{title}</h3>
      <p className="text-blue-100/70">{description}</p>
    </motion.div>
  );
}