import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const products = [
  {
    name: "Lavender Calm",
    description: "Soothing relaxation with French lavender essence",
    image: "lavender-calm.jpg",
    accent: "lavender",
    price: "₹299",
  },
  {
    name: "Rose Reverie",
    description: "Romantic rose petals for radiant, soft skin",
    image: "rose-reverie.jpg",
    accent: "rose",
    price: "₹349",
  },
  {
    name: "Jasmine Ritual",
    description: "Exotic jasmine blooms for a luxurious cleanse",
    image: "jasmine-ritual.jpg",
    accent: "cream",
    price: "₹329",
  },
  {
    name: "Neem Sanctuary",
    description: "Purifying neem for deep antibacterial care",
    image: "neem-sanctuary.jpg",
    accent: "sage",
    price: "₹279",
  },
  {
    name: "Aloe Pure",
    description: "Cooling aloe vera for sensitive, calm skin",
    image: "aloe-pure.jpg",
    accent: "aloe",
    price: "₹289",
  },
  {
    name: "Kesar Chandan",
    description: "Royal saffron & sandalwood for golden glow",
    image: "kesar-chandan.jpg",
    accent: "saffron",
    price: "₹399",
  },
  {
    name: "Honey Soothe",
    description: "Golden honey for deep moisture & healing",
    image: "honey-soothe.jpg",
    accent: "honey",
    price: "₹319",
  },
  {
    name: "Multani Purité",
    description: "Fuller's earth for oil control & purity",
    image: "multani-purite.jpg",
    accent: "earth",
    price: "₹269",
  },
  {
    name: "Coffee Revive",
    description: "Energizing coffee for exfoliation & glow",
    image: "coffee-revive.jpg",
    accent: "coffee",
    price: "₹309",
  },
  {
    name: "Pur Noir",
    description: "Activated charcoal for deep detox cleanse",
    image: "pur-noir.jpg",
    accent: "charcoal",
    price: "₹329",
  },
  {
    name: "Almond Scrub",
    description: "Gentle almond exfoliation for silky skin",
    image: "almond-scrub.jpg",
    accent: "cream",
    price: "₹299",
  },
  {
    name: "Milk Silk",
    description: "Creamy milk proteins for baby-soft skin",
    image: "milk-silk.jpg",
    accent: "cream",
    price: "₹289",
  },
  {
    name: "Orange Papaya",
    description: "Citrus brightening with tropical papaya",
    image: "orange-papaya.jpg",
    accent: "citrus",
    price: "₹309",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <section
      id="products"
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-secondary/10 border border-secondary/20"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Handcrafted with Love</span>
          </motion.div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our <span className="text-secondary italic">Collection</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            Each soap is a masterpiece of nature — handcrafted with organic botanicals,
            designed to transform your daily cleanse into a luxurious ritual.
          </p>
        </motion.div>

        {/* Products Grid - Enhanced */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: Math.min(index * 0.08, 0.4), duration: 0.5 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <motion.div
          className="mt-10 md:mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-card border border-border/50 rounded-full font-medium text-foreground hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 shadow-soft hover:shadow-card"
          >
            <span>{showAll ? "Show Less" : "View All Products"}</span>
            {showAll ? (
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            )}
          </button>
        </motion.div>

        {/* WhatsApp Order Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-secondary/10 via-card to-accent/10 rounded-2xl md:rounded-3xl border border-secondary/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </div>
          
          <div className="relative z-10">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-5 max-w-lg mx-auto">
              Message us on WhatsApp for quick ordering, custom bundles, and exclusive deals.
            </p>
            <a
              href="https://wa.me/919999999999?text=Hi! I'm interested in COCO %26 CO. soaps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
