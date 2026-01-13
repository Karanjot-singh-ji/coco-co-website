import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/coco-logo.png";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center">
            {/* Decorative leaves that part */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-32 h-32"
                initial={{ rotate: 0, x: 0 }}
                animate={{ rotate: -20, x: -80, opacity: 0 }}
                transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-secondary/30">
                  <path
                    d="M50 10 C20 30, 10 60, 50 90 C30 60, 40 30, 50 10"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>
              <motion.div
                className="absolute w-32 h-32"
                initial={{ rotate: 0, x: 0 }}
                animate={{ rotate: 20, x: 80, opacity: 0 }}
                transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-secondary/30">
                  <path
                    d="M50 10 C80 30, 90 60, 50 90 C70 60, 60 30, 50 10"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Logo reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <img
                src={logo}
                alt="COCO & CO."
                className="w-48 md:w-64 h-auto"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-6 font-serif text-lg text-primary/70 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Nature's Touch for You
            </motion.p>

            {/* Loading indicator */}
            <motion.div
              className="mt-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-secondary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
              />
              <motion.span
                className="w-2 h-2 rounded-full bg-secondary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.2 }}
              />
              <motion.span
                className="w-2 h-2 rounded-full bg-secondary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.4 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
