import { Skeleton } from "@/components/ui/skeleton";

/**
 * About page loading skeleton
 * Matches the hero + story + values + CTA sections
 */
export default function AboutLoading() {
  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="space-y-3 mb-6 sm:mb-8">
            <Skeleton className="h-10 sm:h-12 md:h-14 lg:h-16 w-3/4 mx-auto" />
            <Skeleton className="h-10 sm:h-12 md:h-14 lg:h-16 w-1/2 mx-auto" />
          </div>
          <Skeleton className="h-5 sm:h-6 w-full max-w-xl mx-auto" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Skeleton className="aspect-[4/3] rounded-xl sm:rounded-2xl" />
            <div className="space-y-4 sm:space-y-6">
              <Skeleton className="h-8 sm:h-10 md:h-12 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-xl bg-card space-y-3">
                <Skeleton className="h-6 sm:h-7 w-24" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-14 w-full sm:w-48 rounded-full mx-auto" />
        </div>
      </section>
    </div>
  );
}

