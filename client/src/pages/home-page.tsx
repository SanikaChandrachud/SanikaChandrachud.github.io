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
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Digital Manufacturing Technology"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex h-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="mb-6 text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Engineering Portfolio
            </h1>
            <h2 className="mb-4 text-3xl sm:text-4xl font-semibold text-white">
              Mechanical Design Engineering Excellence
            </h2>
            <p className="text-lg sm:text-xl text-gray-200">
              Transforming innovative ideas into precision-engineered solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary Section with 3D Model */}
      <section className="bg-background py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
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
              transition={{ delay: 0.2 }}
            >
              <ModelViewer className="shadow-xl rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative bg-muted py-12 sm:py-20">
        <GearAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center">Professional Journey</h2>
          <Timeline />
        </div>
      </section>
    </div>
  );
}