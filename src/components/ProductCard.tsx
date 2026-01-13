import { motion } from "framer-motion";
import { MessageCircle, Heart } from "lucide-react";
import { useWishlist } from "./WishlistContext";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  accent: string;
  price: string;
}

const accentColors: Record<string, string> = {
  lavender: "from-lavender/20 to-lavender/5 border-lavender/30 hover:border-lavender/50",
  rose: "from-rose/20 to-rose/5 border-rose/30 hover:border-rose/50",
  sage: "from-sage/20 to-sage/5 border-sage/30 hover:border-sage/50",
  saffron: "from-saffron/20 to-saffron/5 border-saffron/30 hover:border-saffron/50",
  charcoal: "from-charcoal/10 to-charcoal/5 border-charcoal/30 hover:border-charcoal/50",
  honey: "from-honey/20 to-honey/5 border-honey/30 hover:border-honey/50",
  earth: "from-earth/20 to-earth/5 border-earth/30 hover:border-earth/50",
  coffee: "from-coffee/20 to-coffee/5 border-coffee/30 hover:border-coffee/50",
  aloe: "from-aloe/20 to-aloe/5 border-aloe/30 hover:border-aloe/50",
  cream: "from-cream/40 to-cream/10 border-cream/50 hover:border-cream/70",
  citrus: "from-citrus/20 to-citrus/5 border-citrus/30 hover:border-citrus/50",
  pink: "from-pink/20 to-pink/5 border-pink/30 hover:border-pink/50",
};

const ProductCard = ({ name, description, image, accent, price }: ProductCardProps) => {
  const accentClass = accentColors[accent] || accentColors.cream;

  const { toggleWishlist, isInWishlist } = useWishlist();
  const isLiked = isInWishlist(name);

  const handleOrderNow = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ordering ${name} (${price}).\n\nProduct Details:\n${description}`);
    window.open(`https://wa.me/919646409959?text=${message}`, "_blank");
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent potentially triggering parent click events if any
    toggleWishlist({ name, description, image, accent, price });
  };

  return (
    <motion.div
      className={`group relative bg-gradient-to-b ${accentClass} rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all duration-500 shadow-soft hover:shadow-card h-full`}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Wishlist Button */}
      <button
        onClick={handleWishlistClick}
        className={`absolute top-2.5 right-2.5 md:top-3 md:right-3 z-20 w-8 h-8 md:w-9 md:h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-md ${isLiked
          ? "bg-rose-100 opacity-100"
          : "bg-card/90 opacity-0 group-hover:opacity-100 hover:bg-card"
          }`}
      >
        <Heart className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${isLiked ? "text-rose-500 fill-rose-500" : "text-muted-foreground hover:text-rose-500 hover:fill-rose-500"
          }`} />
      </button>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-card to-muted/30">
        <img
          src={`/src/assets/products/${image}`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-3 md:p-5">
        {/* Price Tag */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs md:text-sm font-bold text-secondary bg-secondary/15 px-2.5 py-1 rounded-full">
            {price}
          </span>
          <span className="text-[10px] md:text-xs text-muted-foreground font-medium">100g</span>
        </div>

        <h3 className="font-serif text-sm md:text-lg font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors line-clamp-1">
          {name}
        </h3>
        <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3 md:mb-4">
          {description}
        </p>

        {/* Order Now Button */}
        <button
          onClick={handleOrderNow}
          className="w-full flex items-center justify-center gap-2 py-2.5 md:py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 group-hover:shadow-lg"
        >
          <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
          <span>Order Now</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
