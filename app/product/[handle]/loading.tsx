import { Skeleton } from "@/components/ui/skeleton";

/**
 * Product detail page loading skeleton
 * Matches the breadcrumb + image gallery + product info layout
 */
export default function ProductLoading() {
  return (
    <div className="pt-16 sm:pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <span className="text-muted-foreground">/</span>
            <Skeleton className="h-4 w-12" />
            <span className="text-muted-foreground">/</span>
            <Skeleton className="h-4 w-32" />
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <Skeleton className="aspect-[3/4] rounded-2xl" />
            
            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="w-20 h-24 rounded-lg flex-shrink-0" />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            {/* Title */}
            <Skeleton className="h-10 sm:h-12 lg:h-14 w-full" />
            <Skeleton className="h-10 sm:h-12 lg:h-14 w-3/4" />

            {/* Price */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 sm:h-10 w-28" />
              <Skeleton className="h-6 w-20" />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div className="flex flex-wrap gap-3">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <Skeleton key={size} className="min-w-[48px] h-12 px-4 rounded-lg" />
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-4">
              <Skeleton className="h-14 w-full rounded-full" />
            </div>

            {/* Product Details */}
            <div className="border-t border-border pt-6 space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Skeleton className="w-5 h-5 rounded-full flex-shrink-0" />
                  <div className="space-y-1 flex-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

