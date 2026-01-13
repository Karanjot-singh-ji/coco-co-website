import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "My skin has never felt this soft! The Lavender Calm soap is my absolute favorite. It's like a spa experience every day.",
    rating: 5,
    product: "Lavender Calm",
  },
  {
    name: "Rahul Mehta",
    location: "Delhi",
    text: "Finally found a soap that doesn't dry out my sensitive skin. COCO & CO. is now a household essential.",
    rating: 5,
    product: "Aloe Pure",
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    text: "The Kesar Chandan gives me that natural glow I always wanted. Worth every penny!",
    rating: 5,
    product: "Kesar Chandan",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    text: "As someone with eczema, finding the right soap was a nightmare. This brand changed everything for me.",
    rating: 5,
    product: "Honey Soothe",
  },
  {
    name: "Neha Gupta",
    location: "Chennai",
    text: "Love that it's eco-friendly and the packaging is so thoughtful. My whole family uses COCO & CO. now!",
    rating: 5,
    product: "Rose Reverie",
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad",
    text: "The Coffee Revive soap is amazing for my morning showers. Feels energizing and smells incredible!",
    rating: 5,
    product: "Coffee Revive",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isHovered && scrollContainer) {
        scrollPosition += scrollSpeed;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/50 via-background to-muted/30 overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase mb-6">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Customer Stories</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Review(s) from our <br className="hidden md:block" />
            <span className="text-secondary italic relative">
              Community
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentcolor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover why thousands have switched to our organic, handcrafted skincare soaps. Real stories from real people.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-40 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-40 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-20" />

        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-12 pt-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-[340px] md:w-[400px]"
            >
              <div className="h-full bg-card/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                {/* Large Background Quote */}
                <Quote className="absolute top-4 right-6 w-24 h-24 text-secondary/5 rotate-12 pointer-events-none" />

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent drop-shadow-sm" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 relative z-10 italic">
                  "{testimonial.text}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between relative z-10 pt-6 border-t border-border/40">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center text-secondary font-serif font-bold text-lg">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 bg-secondary text-white rounded-full shadow-sm">
                    {testimonial.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <div className="container mx-auto px-4 md:px-8 mt-4 md:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16"
        >
          <div className="flex items-center gap-4 px-8 py-4 bg-white/50 backdrop-blur-sm rounded-full border border-white/50 shadow-sm">
            <div className="p-2.5 bg-secondary/10 rounded-full">
              <Star className="w-6 h-6 text-secondary fill-secondary" />
            </div>
            <div className="text-left">
              <p className="font-serif text-2xl font-bold text-foreground leading-none">5,000+</p>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mt-1">Happy Customers</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-8 py-4 bg-white/50 backdrop-blur-sm rounded-full border border-white/50 shadow-sm">
            <div className="p-2.5 bg-accent/10 rounded-full">
              <Star className="w-6 h-6 text-accent fill-accent" />
            </div>
            <div className="text-left">
              <p className="font-serif text-2xl font-bold text-foreground leading-none">4.9/5</p>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mt-1">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
