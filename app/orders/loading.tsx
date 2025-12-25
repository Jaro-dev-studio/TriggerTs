import { Skeleton } from "@/components/ui/skeleton";

/**
 * Orders page loading skeleton
 * Matches the header + order cards layout
 */
export default function OrdersLoading() {
  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      {/* Header */}
      <section className="py-8 sm:py-12 md:py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <Skeleton className="h-10 sm:h-12 md:h-14 w-52 mb-4" />
          <Skeleton className="h-5 w-48" />
        </div>
      </section>

      {/* Orders */}
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-5 w-20 rounded-full" />
                    </div>
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-7 w-20" />
                    <Skeleton className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

