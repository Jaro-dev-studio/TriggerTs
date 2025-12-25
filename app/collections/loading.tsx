import { Skeleton } from "@/components/ui/skeleton";

/**
 * Collections page loading skeleton
 * Matches the header + collections grid layout
 */
export default function CollectionsLoading() {
  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      {/* Header */}
      <section className="py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Skeleton className="h-10 sm:h-12 md:h-14 lg:h-16 w-64 mb-3 sm:mb-4" />
          <Skeleton className="h-5 sm:h-6 w-full max-w-md" />
        </div>
      </section>

      {/* Collections Grid Skeleton */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[4/5] rounded-2xl" />
                <Skeleton className="h-7 sm:h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

