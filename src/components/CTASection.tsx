import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import ContactModal from "./ContactModal";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section id="cta" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium tracking-wide mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Begin Your Ritual
          </motion.span>

          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your Skin <span className="text-secondary italic">Deserves</span> Better
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Transform your daily cleansing from a routine into a ritual of pure indulgence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="#products"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-elevated"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Pure Soaps
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
            <motion.button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-primary/30 text-foreground rounded-full font-medium text-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isContactOpen && (
          <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
