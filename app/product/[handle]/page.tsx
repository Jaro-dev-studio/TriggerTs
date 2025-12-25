"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, Footer, CartDrawer, ProductCard } from "@/components/storefront";
import { RevealText } from "@/components/storefront/animated-text";
import { CartProvider, useCart } from "@/components/storefront/cart-drawer";
import { getProductByHandle, products } from "@/lib/products";
import { cn } from "@/lib/utils";

function ProductContent() {
  const params = useParams();
  const handle = params.handle as string;
  const product = getProductByHandle(handle);
  
  const { items, isOpen, closeCart, updateQuantity, removeItem, openCart, addItem } = useCart();
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const [isAdding, setIsAdding] = React.useState(false);

  const relatedProducts = products
    .filter(p => p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            This shirt doesn&apos;t exist. Yet.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary-hover transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    setIsAdding(true);
    setTimeout(() => {
      addItem({
        id: `${product.id}-${selectedSize}`,
        title: product.title,
        price: product.price,
        size: selectedSize,
        image: product.image,
      });
      setIsAdding(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartItemCount={items.length} onCartClick={openCart} />

      <main className="pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.title}</span>
          </nav>
        </div>

        {/* Product Details */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[12rem] font-display font-bold text-foreground/5">
                    {product.title.split(" ")[0].charAt(0)}
                  </p>
                </div>

                {/* Sale badge */}
                {product.compareAtPrice && (
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                      Save ${product.compareAtPrice - product.price}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {product.tags.includes("bestseller") && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      Bestseller
                    </span>
                  )}
                  {product.category && (
                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full capitalize">
                      {product.category}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                  {product.title}
                </h1>

                {/* Tagline */}
                <p className="text-xl text-muted-foreground italic mb-6">
                  &ldquo;{product.tagline}&rdquo;
                </p>

                {/* Price */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold text-foreground">
                    ${product.price}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.compareAtPrice}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Size selector */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">
                      Select Size
                    </span>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline">
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <motion.button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "h-12 min-w-[48px] px-4 rounded-lg font-medium transition-colors",
                          selectedSize === size
                            ? "bg-foreground text-background"
                            : "bg-secondary text-foreground hover:bg-border"
                        )}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                  <AnimatePresence>
                    {!selectedSize && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-muted-foreground mt-2"
                      >
                        Please select a size
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Add to cart */}
                <motion.button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || isAdding}
                  whileHover={{ scale: selectedSize ? 1.01 : 1 }}
                  whileTap={{ scale: selectedSize ? 0.99 : 1 }}
                  className={cn(
                    "w-full py-4 rounded-full font-medium text-lg transition-all",
                    selectedSize
                      ? "bg-primary text-primary-foreground hover:bg-primary-hover cursor-pointer"
                      : "bg-secondary text-muted-foreground cursor-not-allowed"
                  )}
                >
                  {isAdding ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Adding...
                    </span>
                  ) : (
                    "Add to Rotation"
                  )}
                </motion.button>

                {/* Additional info */}
                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free shipping on orders over $100</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>30-day returns, no questions asked</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>100% organic cotton, ethically made</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 sm:py-32 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealText>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">
                You Might Also Trigger People With
              </h2>
            </RevealText>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
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

export default function ProductPage() {
  return (
    <CartProvider>
      <ProductContent />
    </CartProvider>
  );
}
