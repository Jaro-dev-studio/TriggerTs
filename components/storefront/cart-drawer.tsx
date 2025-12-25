"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface CartItem {
  id: string;
  title: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-background border-l border-border shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                Your Cart ({items.length})
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    Your cart is empty.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Time to make a statement.
                  </p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/shop"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary-hover transition-colors"
                    >
                      Browse Collection
                    </Link>
                  </motion.div>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      {/* Product image */}
                      <div className="w-20 h-24 rounded-lg bg-secondary flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-foreground/10 font-display text-lg">
                          TT
                        </div>
                      </div>

                      {/* Product info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Size: {item.size}
                        </p>
                        <p className="text-sm font-medium text-foreground mt-1">
                          ${item.price}
                        </p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-border rounded-full">
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
                              }
                              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 12H4"
                                />
                              </svg>
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-foreground">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Shipping and taxes calculated at checkout.
                </p>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary-hover transition-colors"
                >
                  Proceed Anyway
                </motion.button>
                <button
                  onClick={onClose}
                  className="w-full py-3 text-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Simple cart context for state management
 */
interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = React.createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
