import GearAnimation from "@/components/gear-animation";
import Timeline from "@/components/timeline";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9"
          alt="Engineering Facility"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="container relative flex h-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <h1 className="mb-6 text-5xl font-bold">
              Mechanical Design Engineering Excellence
            </h1>
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
            className="prose prose-lg mx-auto"
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

      {/* Featured Work Section */}
      <section className="bg-background py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Featured Work</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg bg-card p-6 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                alt="Engineering workspace"
                className="mb-4 aspect-video rounded-lg object-cover"
              />
              <h3 className="mb-2 text-xl font-bold">Precision Design</h3>
              <p className="text-muted-foreground">
                Creating innovative solutions through detailed engineering analysis
              </p>
            </motion.div>
            {/* Add more featured work items similarly */}
          </div>
        </div>
      </section>
    </div>
  );
}
