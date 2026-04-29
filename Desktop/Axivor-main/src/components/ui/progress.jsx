import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef(
  ({ className, indicatorClassName, value, showValue = false, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden bg-slate-100 dark:bg-slate-800", // Root container
        className
      )}
      {...props}
    >
      {/* Indicator */}
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full flex-1 bg-slate-900 transition-all dark:bg-slate-50", // Default styles for the filled bar
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }} // Width based on value
      />
      {/* Text showing percentage value */}
      {showValue && (
        <span
          className="absolute inset-0 flex items-center justify-center font-medium text-black font-monaSemi text-[17px] pointer-events-none"
        >
          {`${value || 0}%`}
        </span>
      )}
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
