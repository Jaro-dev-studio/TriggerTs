import { Skeleton } from "@/components/ui/skeleton";

/**
 * Shop page loading skeleton
 * Matches the header + filter bar + product grid layout
 */
export default function ShopLoading() {
  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      {/* Header */}
      <section className="py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Skeleton className="h-10 sm:h-12 md:h-14 lg:h-16 w-32" />
        </div>
      </section>

      {/* Filters Skeleton */}
      <section className="border-y border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 py-3 sm:py-4">
            {/* Category filters */}
            <div className="flex items-center gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-10 sm:h-9 w-20 sm:w-24 rounded-full flex-shrink-0" />
              ))}
            </div>
            {/* Sort */}
            <div className="flex items-center justify-between sm:justify-end gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 sm:h-9 w-40 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Skeleton */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[...Array(8)].map((_, i) => (
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

