import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Leaf, Sparkles, Shield, Heart, Droplets, Recycle } from "lucide-react";

const comparisonData = [
  {
    feature: "Ingredients",
    coco: "100% Organic & Edible-Grade",
    regular: "Synthetic Chemicals",
    icon: Leaf,
  },
  {
    feature: "Skin Feel",
    coco: "Soft, Nourished & Hydrated",
    regular: "Dry & Stripped",
    icon: Droplets,
  },
  {
    feature: "Safety",
    coco: "No Sulfates or Parabens",
    regular: "Harmful Additives",
    icon: Shield,
  },
  {
    feature: "Environment",
    coco: "Biodegradable & Eco-Friendly",
    regular: "Polluting Residues",
    icon: Recycle,
  },
  {
    feature: "Ethics",
    coco: "100% Cruelty-Free",
    regular: "Often Animal Tested",
    icon: Heart,
  },
  {
    feature: "Experience",
    coco: "Luxurious Self-Care Ritual",
    regular: "Basic Cleaning",
    icon: Sparkles,
  },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} id="comparison" className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-medium text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3 block">
            The Difference
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 md:mb-4">
            Why Choose <span className="text-secondary italic">COCO & CO.</span>?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            See how our organic approach compares to conventional soaps
          </p>
        </motion.div>

        {/* Desktop: Premium Comparison Table */}
        <motion.div
          className="hidden md:block max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bg-card rounded-3xl border border-border/30 overflow-hidden shadow-card">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-secondary/10 via-card to-muted/20 border-b border-border/30">
              <div className="p-6 flex items-center justify-center">
                <span className="font-semibold text-muted-foreground">Feature</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center border-x border-border/30 bg-secondary/10">
                <span className="font-serif text-xl font-bold text-secondary">COCO & CO.</span>
                <span className="text-xs text-muted-foreground mt-1">Pure & Organic</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center">
                <span className="font-serif text-xl font-semibold text-muted-foreground/70">Regular Soaps</span>
                <span className="text-xs text-muted-foreground mt-1">Mass Produced</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.feature}
                  className="grid grid-cols-3 border-b border-border/20 last:border-b-0 hover:bg-muted/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
                >
                  <div className="p-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-semibold text-foreground">{item.feature}</span>
                  </div>
                  <div className="p-5 flex items-center justify-center gap-2 border-x border-border/20 bg-secondary/5">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{item.coco}</span>
                  </div>
                  <div className="p-5 flex items-center justify-center gap-2">
                    <X className="w-5 h-5 text-destructive/60 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item.regular}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile: Stacked Cards */}
        <div className="md:hidden space-y-3">
          {comparisonData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.feature}
                className="bg-card rounded-2xl border border-border/30 overflow-hidden shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
              >
                {/* Feature Header */}
                <div className="flex items-center gap-3 p-4 bg-muted/30 border-b border-border/20">
                  <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="font-semibold text-foreground text-sm">{item.feature}</span>
                </div>

                {/* Comparison */}
                <div className="grid grid-cols-2 divide-x divide-border/20">
                  {/* COCO & CO */}
                  <div className="p-3 bg-secondary/5">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-wide">COCO & CO.</span>
                    </div>
                    <p className="text-xs text-foreground font-medium leading-relaxed">{item.coco}</p>
                  </div>

                  {/* Regular */}
                  <div className="p-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <X className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Regular</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.regular}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-r from-secondary/10 via-card to-accent/10 rounded-2xl md:rounded-full border border-secondary/20 shadow-soft">
            <p className="text-xs md:text-base text-foreground font-medium text-center sm:text-left">
              Ready to make the switch to <span className="text-secondary font-semibold">pure skincare</span>?
            </p>
            <button
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Shop Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
