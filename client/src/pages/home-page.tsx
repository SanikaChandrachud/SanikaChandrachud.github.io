import GearAnimation from "@/components/gear-animation";
import Timeline from "@/components/timeline";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Digital Manufacturing Technology"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        <div className="container relative flex h-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="mb-6 text-5xl font-bold text-white tracking-tight">
              Engineering Portfolio
            </h1>
            <h2 className="mb-4 text-4xl font-semibold text-white">
              Mechanical Design Engineering Excellence
            </h2>
            <p className="text-xl text-gray-200">
              Transforming innovative ideas into precision-engineered solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-background py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto text-center"
          >
            <h2>Crafting Engineering Solutions</h2>
            <p>
              As a mechanical design engineer with expertise in both automotive and
              robotics sectors, I bring a unique perspective to engineering
              challenges. My work focuses on creating innovative solutions that
              combine functionality with elegant design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative bg-muted py-20">
        <GearAnimation />
        <div className="container relative">
          <h2 className="mb-12 text-center text-3xl font-bold">Professional Journey</h2>
          <Timeline />
        </div>
      </section>
    </div>
  );
}