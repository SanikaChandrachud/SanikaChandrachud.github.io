import GearAnimation from "@/components/gear-animation";
import Timeline from "@/components/timeline";
import ModelViewer from "@/components/model-viewer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/engineering-hero.jpg"
          alt="3D Printing Technology"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex h-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 
              className="mb-6 text-4xl sm:text-5xl font-bold text-white tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Engineering Portfolio
            </motion.h1>
            <motion.h2 
              className="mb-4 text-3xl sm:text-4xl font-semibold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mechanical Design Engineering Excellence
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6,
                type: "spring",
                stiffness: 100 
              }}
            >
              Transforming innovative ideas into precision-engineered solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Summary Section with 3D Model */}
      <section className="bg-background py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Crafting Engineering Solutions</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                As a mechanical design engineer with expertise in both automotive and
                robotics sectors, I bring a unique perspective to engineering
                challenges. My work focuses on creating innovative solutions that
                combine functionality with elegant design.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ModelViewer className="shadow-xl rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative bg-muted py-12 sm:py-20">
        <GearAnimation />
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center">Professional Journey</h2>
          <Timeline />
        </motion.div>
      </section>
    </div>
  );
}