import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, MessageCircle } from "lucide-react";
import { useWishlist } from "./WishlistContext";

interface WishlistDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const WishlistDrawer = ({ isOpen, onClose }: WishlistDrawerProps) => {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

    const handleCheckout = () => {
        if (wishlist.length === 0) return;

        const productList = wishlist
            .map((item, index) => `${index + 1}. ${item.name} (${item.price})`)
            .join("\n");

        const totalPrice = wishlist.reduce((acc, item) => {
            const price = parseInt(item.price.replace(/[^0-9]/g, ''));
            return acc + (isNaN(price) ? 0 : price);
        }, 0);

        const message = encodeURIComponent(
            `Hi! I'd like to place an order for the following items from my wishlist:\n\n${productList}\n\nTotal Value: ₹${totalPrice}\n\nPlease let me know the availability.`
        );

        window.open(`https://wa.me/919646409959?text=${message}`, "_blank");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-border flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-secondary" />
                                <h2 className="font-serif text-xl font-semibold">Your Wishlist</h2>
                                <span className="bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded-full">
                                    {wishlist.length}
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-muted rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>

                        {/* List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {wishlist.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground space-y-4">
                                    <ShoppingBag className="w-16 h-16 opacity-20" />
                                    <p>Your wishlist is empty.</p>
                                    <button
                                        onClick={onClose}
                                        className="text-secondary font-medium hover:underline"
                                    >
                                        Browse Products
                                    </button>
                                </div>
                            ) : (
                                wishlist.map((item, index) => (
                                    <motion.div
                                        key={`${item.name}-${index}`}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex items-center gap-4 p-3 rounded-xl bg-card border border-border/50 group"
                                    >
                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                                            <img
                                                src={`/src/assets/products/${item.image}`}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-foreground">{item.name}</h4>
                                            <p className="text-sm text-secondary font-semibold">{item.price}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromWishlist(item.name)}
                                            className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {wishlist.length > 0 && (
                            <div className="p-6 bg-muted/30 border-t border-border space-y-4">
                                <div className="flex items-center justify-between text-base font-medium">
                                    <button
                                        onClick={clearWishlist}
                                        className="text-xs text-muted-foreground hover:text-destructive transition-colors underline"
                                    >
                                        Clear Wishlist
                                    </button>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-green-900/20"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Order All via WhatsApp</span>
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WishlistDrawer;
