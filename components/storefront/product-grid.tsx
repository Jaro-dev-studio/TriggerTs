"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ProductCard, FeaturedProductCard } from "./product-card";
import { RevealText } from "./animated-text";
import type { Product } from "@/lib/products";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  showFeatured?: boolean;
}

export function ProductGrid({
  products,
  title,
  subtitle,
  columns = 4,
  showFeatured = false,
}: ProductGridProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  if (showFeatured && products.length >= 2) {
    const featured = products.slice(0, 2);
    const rest = products.slice(2);

    return (
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          {(title || subtitle) && (
            <div className="text-center mb-16">
              {title && (
                <RevealText>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                    {title}
                  </h2>
                </RevealText>
              )}
              {subtitle && (
                <RevealText delay={0.1}>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                  </p>
                </RevealText>
              )}
            </div>
          )}

          {/* Featured products */}
          <div className="space-y-24 mb-24">
            {featured.map((product, index) => (
              <FeaturedProductCard
                key={product.id}
                product={product}
                reverse={index % 2 === 1}
              />
            ))}
          </div>

          {/* Rest of products */}
          {rest.length > 0 && (
            <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
              {rest.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <RevealText>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  {title}
                </h2>
              </RevealText>
            )}
            {subtitle && (
              <RevealText delay={0.1}>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {subtitle}
                </p>
              </RevealText>
            )}
          </div>
        )}

        {/* Product grid */}
        <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Horizontal scrolling product showcase
 */
interface ProductShowcaseProps {
  products: Product[];
  title?: string;
}

export function ProductShowcase({ products, title }: ProductShowcaseProps) {
  return (
    <section className="py-20 sm:py-32 overflow-hidden">
      {title && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <RevealText>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              {title}
            </h2>
          </RevealText>
        </div>
      )}

      <motion.div
        className="flex gap-6 pl-4 sm:pl-6 lg:pl-8"
        drag="x"
        dragConstraints={{ left: -((products.length - 1) * 340), right: 0 }}
        style={{ cursor: "grab" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="flex-shrink-0 w-[280px] sm:w-[320px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <ProductCard product={product} index={0} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
