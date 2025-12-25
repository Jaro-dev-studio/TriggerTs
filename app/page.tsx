"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation, Hero, ProductGrid, Footer, CartDrawer } from "@/components/storefront";
import { RevealText } from "@/components/storefront/animated-text";
import { CartProvider, useCart } from "@/components/storefront/cart-drawer";
import { getFeaturedProducts } from "@/lib/products";

function HomeContent() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, openCart } = useCart();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartItemCount={items.length} onCartClick={openCart} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Featured Products */}
        <ProductGrid
          products={featuredProducts}
          title="Featured Statements"
          subtitle="The opinions people can't stop talking about."
          showFeatured
          columns={3}
        />

        {/* Brand Story Section */}
        <section className="py-20 sm:py-32 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <RevealText>
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
                    Not just shirts.
                    <br />
                    <span className="text-gradient">Statements.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    TriggerTs was born from a simple observation: the smartest people 
                    in the room often have the sharpest sense of humor. We make clothes 
                    for those who can laugh at the chaos while looking expensive doing it.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every piece is crafted with premium materials and printed with 
                    opinions that might make someone uncomfortable. That&apos;s the point.
                  </p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-primary font-medium animated-underline"
                    >
                      Read Our Story
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
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </RevealText>

              <RevealText delay={0.2}>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-card overflow-hidden glow-gold">
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-8xl font-display font-bold text-foreground/5">
                        Ts
                      </p>
                    </div>
                  </div>
                  {/* Floating accent */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-6 -right-6 px-6 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg"
                  >
                    <p className="text-sm font-medium">Premium Quality</p>
                    <p className="text-xs opacity-80">100% Organic Cotton</p>
                  </motion.div>
                </div>
              </RevealText>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealText>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  Browse by Mood
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find the perfect shirt for every occasion you&apos;re about to ruin.
                </p>
              </div>
            </RevealText>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "Corporate Satire", 
                  subtitle: "For the 9-5 dissenters",
                  href: "/collections/corporate" 
                },
                { 
                  title: "Internet Money", 
                  subtitle: "WAGMI (probably)",
                  href: "/collections/crypto" 
                },
                { 
                  title: "Tech Life", 
                  subtitle: "0 bugs, many opinions",
                  href: "/collections/tech" 
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={category.href}
                    className="group block relative aspect-[4/3] rounded-xl overflow-hidden bg-card"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {category.subtitle}
                      </p>
                    </div>
                    <motion.div
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <span className="text-sm text-primary font-medium">
                        Explore
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Quote Section */}
        <section className="py-20 sm:py-32 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RevealText>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground leading-relaxed mb-8">
                &ldquo;Finally, a brand that understands that having taste and 
                being insufferable aren&apos;t mutually exclusive.&rdquo;
              </blockquote>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Anonymous Customer</span>
                {" "}&mdash; Verified Purchase, 5 Stars
              </p>
            </RevealText>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RevealText>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Ready to make a statement?
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the thousands of people who&apos;ve decided their wardrobe 
                should reflect their personality. For better or worse.
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors"
                >
                  Shop All Shirts
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </RevealText>
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

export default function HomePage() {
  return (
    <CartProvider>
      <HomeContent />
    </CartProvider>
  );
}
