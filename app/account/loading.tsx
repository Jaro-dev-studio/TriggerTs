import { Skeleton } from "@/components/ui/skeleton";

/**
 * Account page loading skeleton
 * Matches the centered form/account layout
 */
export default function AccountLoading() {
  return (
    <div className="pt-20 sm:pt-24 pb-20">
      <div className="max-w-md mx-auto px-5 sm:px-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <Skeleton className="h-10 sm:h-12 w-48 mx-auto mb-2" />
            <Skeleton className="h-5 w-64 mx-auto" />
          </div>

          {/* Tab switcher */}
          <div className="flex bg-secondary rounded-full p-1">
            <Skeleton className="flex-1 h-10 rounded-full" />
            <Skeleton className="flex-1 h-10 rounded-full" />
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Email field */}
            <div>
              <Skeleton className="h-4 w-12 mb-2" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>

            {/* Password field */}
            <div>
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>

            {/* Forgot password link */}
            <Skeleton className="h-4 w-32" />

            {/* Submit button */}
            <Skeleton className="h-14 w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

