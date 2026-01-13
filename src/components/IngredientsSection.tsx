import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Leaf, FlowerIcon, Sun, Sparkles } from "lucide-react";

const ingredients = [
  { name: "Coconut Oil", description: "Deep nourishment", icon: Droplets, color: "from-cream to-cream/50" },
  { name: "Neem", description: "Natural cleansing", icon: Leaf, color: "from-sage to-sage/50" },
  { name: "Aloe Vera", description: "Soothing hydration", icon: Leaf, color: "from-aloe/30 to-aloe/10" },
  { name: "Multani Mitti", description: "Gentle purification", icon: Sun, color: "from-earth/30 to-earth/10" },
  { name: "Rose Petals", description: "Radiant glow", icon: FlowerIcon, color: "from-rose to-rose/50" },
  { name: "Honey", description: "Golden moisture", icon: Droplets, color: "from-honey/40 to-honey/20" },
  { name: "Saffron", description: "Luxurious radiance", icon: Sparkles, color: "from-saffron/40 to-saffron/20" },
  { name: "Sandalwood", description: "Calming essence", icon: Leaf, color: "from-earth/20 to-earth/10" },
  { name: "Almonds", description: "Silky softness", icon: Droplets, color: "from-cream to-cream/50" },
  { name: "Milk Extracts", description: "Creamy richness", icon: Droplets, color: "from-cream to-cream/50" },
];

const IngredientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ingredients" ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-secondary font-medium text-sm tracking-widest uppercase mb-4">
            <Leaf className="w-4 h-4" />
            Pure Botanicals
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Nature's <span className="text-secondary italic">Finest</span> Ingredients
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            We use only edible-grade, naturally-sourced ingredients. Nothing synthetic, nothing hidden.
          </p>
        </motion.div>

        {/* Desktop: Premium Horizontal Cards */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-5 mb-6">
            {ingredients.slice(0, 5).map((ingredient, index) => {
              const IconComponent = ingredient.icon;
              return (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={`group relative bg-gradient-to-br ${ingredient.color} rounded-2xl p-6 h-full border border-border/30 hover:border-secondary/40 transition-all duration-500 hover:shadow-card`}>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-card/80 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-foreground text-center mb-1 group-hover:text-secondary transition-colors">
                      {ingredient.name}
                    </h3>
                    <p className="text-xs text-muted-foreground text-center">
                      {ingredient.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="grid grid-cols-5 gap-5">
            {ingredients.slice(5, 10).map((ingredient, index) => {
              const IconComponent = ingredient.icon;
              return (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: (index + 5) * 0.1, duration: 0.5 }}
                >
                  <div className={`group relative bg-gradient-to-br ${ingredient.color} rounded-2xl p-6 h-full border border-border/30 hover:border-secondary/40 transition-all duration-500 hover:shadow-card`}>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-card/80 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-foreground text-center mb-1 group-hover:text-secondary transition-colors">
                      {ingredient.name}
                    </h3>
                    <p className="text-xs text-muted-foreground text-center">
                      {ingredient.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Elegant Two-column grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {ingredients.map((ingredient, index) => {
            const IconComponent = ingredient.icon;
            return (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <div className={`bg-gradient-to-br ${ingredient.color} rounded-xl p-4 h-full border border-border/30`}>
                  <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-card/80 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-serif text-sm font-semibold text-foreground text-center mb-0.5">
                    {ingredient.name}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center">
                    {ingredient.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust statement */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-secondary/10 via-card to-accent/10 rounded-full shadow-soft border border-secondary/20">
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm md:text-base text-foreground font-medium">
              Every ingredient is <span className="text-secondary font-semibold">edible-grade certified</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IngredientsSection;
