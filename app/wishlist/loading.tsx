import { Skeleton } from "@/components/ui/skeleton";

/**
 * Wishlist page loading skeleton
 * Matches the header + product grid layout
 */
export default function WishlistLoading() {
  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      {/* Header */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Skeleton className="h-10 sm:h-12 md:h-14 w-48 mb-3 sm:mb-4" />
          <Skeleton className="h-5 sm:h-6 w-64" />
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clear button placeholder */}
          <div className="flex justify-end mb-6">
            <Skeleton className="h-5 w-16" />
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[3/4] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

