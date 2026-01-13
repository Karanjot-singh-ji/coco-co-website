import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your organic soaps. Can you help me?");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
      
      {/* Icon */}
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white fill-white relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-card text-foreground text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </motion.button>
  );
};

export default FloatingWhatsApp;
