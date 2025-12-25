"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedHeadline, RevealText } from "./animated-text";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating accent elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-1/4 left-[10%] w-96 h-96 rounded-full bg-accent/5 blur-3xl"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Pre-headline */}
        <RevealText delay={0.2}>
          <motion.p 
            className="text-sm sm:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6"
          >
            Luxury Meets Internet Money
          </motion.p>
        </RevealText>

        {/* Main headline */}
        <AnimatedHeadline
          lines={[
            "Wear Your",
            "Opinion."
          ]}
          delay={0.4}
          className="mb-8"
          lineClassName="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9]"
        />

        {/* Tagline */}
        <RevealText delay={1}>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Ironic. Intelligent. Unapologetic.
            <br className="hidden sm:block" />
            <span className="text-foreground">T-shirts for people who get it.</span>
          </p>
        </RevealText>

        {/* CTA buttons */}
        <RevealText delay={1.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary-hover transition-colors btn-press"
              >
                <span>Browse Collection</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 text-foreground font-medium rounded-full border border-border hover:bg-secondary transition-colors btn-press"
              >
                <span>Our Story</span>
              </Link>
            </motion.div>
          </div>
        </RevealText>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/**
 * Alternative hero with product showcase
 */
export function HeroWithProduct() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            <RevealText delay={0.2}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                New Collection
              </span>
            </RevealText>

            <AnimatedHeadline
              lines={["Quiet Luxury.", "Loud Opinions."]}
              delay={0.4}
              lineClassName="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]"
            />

            <RevealText delay={0.9}>
              <p className="text-lg text-muted-foreground mt-6 mb-8 max-w-md leading-relaxed">
                Premium t-shirts for the discerning internet native. 
                Because taste and trolling aren&apos;t mutually exclusive.
              </p>
            </RevealText>

            <RevealText delay={1.1}>
              <div className="flex items-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors"
                >
                  Shop Now
                </Link>
                <Link
                  href="/collections"
                  className="text-muted-foreground hover:text-foreground transition-colors animated-underline"
                >
                  View Collections
                </Link>
              </div>
            </RevealText>
          </div>

          {/* Product preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary glow-gold">
              {/* Placeholder for product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-6xl font-display font-bold text-foreground/10 mb-2">
                    TriggerTs
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Featured Product
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity hover:opacity-100"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-4 top-8 px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full shadow-lg"
            >
              Bestseller
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
