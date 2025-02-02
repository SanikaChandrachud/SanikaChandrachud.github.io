import GearAnimation from "@/components/gear-animation";
import Timeline from "@/components/timeline";
import ModelViewer from "@/components/model-viewer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/tech-pattern.svg")' }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src="/images/3d-printing.png"
              alt="3D Printing Technology"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
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
              Mechanical Design Engineering Excellence
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-blue-100/80"
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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Summary Section with 3D Model */}
      <section className="bg-background py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Crafting Engineering Solutions
              </h2>
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
      <section className="relative bg-muted/50 py-12 sm:py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <GearAnimation />
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Professional Journey
          </h2>
          <Timeline />
        </motion.div>
      </section>
    </div>
  );
}