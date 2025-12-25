"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
  priority?: boolean;
}

export function ProductCard({ product, index = 0, priority = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link href={`/product/${product.handle}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary mb-4">
          {/* Product image placeholder */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-card"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center p-6">
              <p className="text-4xl md:text-5xl font-display font-bold text-foreground/5 mb-1">
                {product.title.split(" ")[0]}
              </p>
            </div>
          </motion.div>

          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Tagline reveal on hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-foreground/80 italic">
              &ldquo;{product.tagline}&rdquo;
            </p>
          </motion.div>

          {/* Quick add button */}
          <motion.button
            className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </motion.button>

          {/* Sale / New badge */}
          {product.compareAtPrice && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                Sale
              </span>
            </div>
          )}
          {product.tags.includes("bestseller") && !product.compareAtPrice && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                Bestseller
              </span>
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="space-y-2">
          {/* Title with animated underline */}
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
            <span className="relative">
              {product.title}
              <motion.span
                className="absolute -bottom-0.5 left-0 h-[1px] bg-primary"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-foreground font-medium">
              ${product.price}
            </span>
            {product.compareAtPrice && (
              <span className="text-muted-foreground line-through text-sm">
                ${product.compareAtPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/**
 * Featured product card - larger with more details
 */
interface FeaturedProductCardProps {
  product: Product;
  reverse?: boolean;
}

export function FeaturedProductCard({ product, reverse = false }: FeaturedProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
        reverse && "md:direction-rtl"
      )}
    >
      {/* Image */}
      <Link
        href={`/product/${product.handle}`}
        className={cn("block", reverse && "md:order-2")}
      >
        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary group"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-card">
            <p className="text-6xl md:text-8xl font-display font-bold text-foreground/5">
              {product.title.split(" ")[0]}
            </p>
          </div>

          <motion.div
            className="absolute inset-0 bg-primary/10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>

      {/* Content */}
      <div className={cn("space-y-6", reverse && "md:order-1 md:text-right")}>
        {product.tags.includes("bestseller") && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Bestseller
          </span>
        )}

        <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          {product.title}
        </h3>

        <p className="text-xl text-muted-foreground italic">
          &ldquo;{product.tagline}&rdquo;
        </p>

        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-2xl font-bold text-foreground">
            ${product.price}
          </span>
          {product.compareAtPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${product.compareAtPrice}
            </span>
          )}
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href={`/product/${product.handle}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary-hover transition-colors"
          >
            View Details
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
    </motion.article>
  );
}
