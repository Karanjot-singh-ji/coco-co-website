import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Star, Leaf, Shield, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Strong Dark Overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-foreground/40" />
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-accent"
          animate={{ y: [-20, 20, -20], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-secondary"
          animate={{ y: [20, -20, 20], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-card"
          animate={{ y: [-15, 15, -15], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-8 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-card/95 backdrop-blur-md border border-secondary/40 shadow-xl"
          >
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xs md:text-sm font-semibold text-foreground">
              5,000+ Happy Customers
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-[1.1]"
          >
            <span className="block text-card drop-shadow-2xl">
              Pure.{" "}
              <span className="text-accent">Gentle.</span>{" "}
              Honest.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-card/95 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg"
          >
            Handcrafted organic soaps made from{" "}
            <span className="text-accent font-bold">edible-grade botanicals</span>.
            <br className="hidden sm:block" />
            Chemical-free • Cruelty-free • Eco-conscious
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12"
          >
            <button
              onClick={scrollToProducts}
              className="w-full sm:w-auto group relative px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Shop Our Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            <button
              onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 bg-card/20 backdrop-blur-md text-card rounded-full font-semibold text-sm md:text-base border-2 border-card/40 hover:bg-card/30 hover:border-card/60 transition-all duration-300"
            >
              Our Story
            </button>
          </motion.div>

          {/* Trust Indicators - Horizontal on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-row justify-center items-center gap-2 md:gap-6 flex-wrap"
          >
            <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-card/95 backdrop-blur-md rounded-full shadow-lg">
              <Leaf className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              <span className="text-xs md:text-sm font-semibold text-foreground">100% Organic</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-card/95 backdrop-blur-md rounded-full shadow-lg">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              <span className="text-xs md:text-sm font-semibold text-foreground">No Chemicals</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-card/95 backdrop-blur-md rounded-full shadow-lg">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-semibold text-foreground">4.9★ Rated</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToProducts}
          className="flex flex-col items-center gap-1 text-card/80 hover:text-accent transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
