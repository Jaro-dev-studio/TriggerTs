"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Navigation, ProductCard, Footer, CartDrawer } from "@/components/storefront";
import { RevealText } from "@/components/storefront/animated-text";
import { CartProvider, useCart } from "@/components/storefront/cart-drawer";
import { products, categories } from "@/lib/products";
import { cn } from "@/lib/utils";

function ShopContent() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, openCart } = useCart();
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("featured");

  const filteredProducts = React.useMemo(() => {
    let filtered = activeCategory === "all" 
      ? products 
      : products.filter(p => p.category === activeCategory);

    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "newest":
        return [...filtered].reverse();
      default:
        return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartItemCount={items.length} onCartClick={openCart} />

      <main className="pt-20 sm:pt-24">
        {/* Header */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealText>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
                All Shirts
              </h1>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Every opinion, every statement, every chance to start a conversation. 
                Or end one.
              </p>
            </RevealText>
          </div>
        </section>

        {/* Filters */}
        <section className="border-y border-border sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
              {/* Category filters */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors",
                      activeCategory === category.id
                        ? "bg-foreground text-background"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {category.name}
                    <span className="ml-1.5 text-xs opacity-60">
                      ({category.count})
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-secondary text-foreground text-sm rounded-lg px-3 py-2 border-0 focus:ring-2 focus:ring-primary cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">
                  No products found. Try a different filter.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isOpen}
        onClose={closeCart}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <CartProvider>
      <ShopContent />
    </CartProvider>
  );
}
