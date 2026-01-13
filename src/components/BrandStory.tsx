import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Sparkles, Shield } from "lucide-react";
import cocoLogo from "@/assets/coco-logo.png";

const values = [
  { icon: Leaf, label: "100% Organic", description: "Pure botanicals only" },
  { icon: Shield, label: "Chemical-Free", description: "No harmful additives" },
  { icon: Heart, label: "Cruelty-Free", description: "Never tested on animals" },
  { icon: Sparkles, label: "Handcrafted", description: "Made with love" },
];

const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-secondary font-medium text-sm tracking-widest uppercase mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              A Vision to{" "}
              <span className="text-secondary italic">Democratize</span>
              <br className="hidden md:block" />
              Purity
            </h2>
            <div className="space-y-4 md:space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                At COCO & CO., we exist to transform the everyday ritual of
                cleansing into an art of indulgence. Each bar is meticulously
                handcrafted from the world's purest edible-grade botanicals.
              </p>
              <p>
                We are the custodians of purity, marrying ancient craft with modern
                elegance, to unveil soaps that are not merely skincare, but a
                sensorial journey into refinement, wellness, and enduring luxury.
              </p>
              <p className="font-medium text-foreground text-base md:text-lg">
                "Because your daily cleansing deserves to be a ritual, not a routine."
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  className="flex items-center gap-3 p-3 md:p-4 bg-card rounded-xl border border-border/50 shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{value.label}</p>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative background shapes */}
              <motion.div 
                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-full blur-3xl -z-10"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-40 h-40 md:w-56 md:h-56 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-full blur-3xl -z-10"
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.4, 0.6] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated bg-gradient-to-br from-card via-card to-muted/50 border border-border/50">
                <div className="aspect-square md:aspect-[4/5] flex flex-col items-center justify-center p-8 md:p-12">
                  {/* Logo */}
                  <motion.div
                    className="relative mb-6 md:mb-8"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center p-3 shadow-soft">
                      <img 
                        src={cocoLogo} 
                        alt="COCO & CO. Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Decorative rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-secondary/10 animate-ping" style={{ animationDuration: "3s" }} />
                  </motion.div>

                  {/* Quote */}
                  <div className="text-center">
                    <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground italic leading-relaxed mb-4">
                      "Nature's Touch
                      <br />
                      <span className="text-secondary">for You</span>"
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-px bg-secondary/40" />
                      <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Est. 2024</span>
                      <div className="w-8 h-px bg-secondary/40" />
                    </div>
                  </div>

                  {/* Bottom decorative elements */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary/5 to-transparent" />
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute top-1/4 -left-4 md:-left-6 w-8 h-8 md:w-12 md:h-12 bg-secondary/20 rounded-2xl rotate-12"
                animate={{ y: [-5, 5, -5], rotate: [12, 18, 12] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/3 -right-3 md:-right-5 w-6 h-6 md:w-10 md:h-10 bg-accent/30 rounded-xl -rotate-12"
                animate={{ y: [5, -5, 5], rotate: [-12, -18, -12] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
