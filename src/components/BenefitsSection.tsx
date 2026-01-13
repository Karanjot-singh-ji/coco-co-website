import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Sparkles, Heart, Leaf, Recycle, Package } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Deep Hydration",
    description: "Natural oils lock in moisture for all-day softness",
    color: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Sparkles,
    title: "Natural Glow",
    description: "Botanical extracts reveal your skin's radiance",
    color: "from-amber-500/20 to-amber-500/5 border-amber-500/30",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Heart,
    title: "Gentle Care",
    description: "Safe for sensitive skin, loved by all ages",
    color: "from-rose-500/20 to-rose-500/5 border-rose-500/30",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Pure edible-grade ingredients you can trust",
    color: "from-green-500/20 to-green-500/5 border-green-500/30",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Biodegradable formulas, minimal packaging",
    color: "from-teal-500/20 to-teal-500/5 border-teal-500/30",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600",
  },
  {
    icon: Package,
    title: "Travel Ready",
    description: "Compact bars perfect for on-the-go lifestyle",
    color: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-medium text-xs md:text-sm tracking-widest uppercase mb-2 block">
            Why Choose Natural
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 md:mb-4">
            Benefits That <span className="text-secondary italic">Matter</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Experience the difference of truly natural skincare
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className={`relative group bg-gradient-to-br ${benefit.color} rounded-2xl md:rounded-3xl p-4 md:p-6 border transition-all duration-300 hover:shadow-card hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
              >
                {/* Icon */}
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${benefit.iconBg} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-5 h-5 md:w-7 md:h-7 ${benefit.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-sm md:text-lg text-foreground mb-1 md:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
