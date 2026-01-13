import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

export interface Product {
    name: string;
    description: string;
    image: string;
    accent: string;
    price: string;
}

interface WishlistContextType {
    wishlist: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productName: string) => void;
    isInWishlist: (productName: string) => boolean;
    toggleWishlist: (product: Product) => void;
    clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState<Product[]>(() => {
        const saved = localStorage.getItem("wishlist");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product: Product) => {
        setWishlist((prev) => [...prev, product]);
        toast.success(`${product.name} added to wishlist`);
    };

    const removeFromWishlist = (productName: string) => {
        setWishlist((prev) => prev.filter((item) => item.name !== productName));
        toast.info(`${productName} removed from wishlist`);
    };

    const isInWishlist = (productName: string) => {
        return wishlist.some((item) => item.name === productName);
    };

    const toggleWishlist = (product: Product) => {
        if (isInWishlist(product.name)) {
            removeFromWishlist(product.name);
        } else {
            addToWishlist(product);
        }
    };

    const clearWishlist = () => {
        setWishlist([]);
    };

    return (
        <WishlistContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist, clearWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};
