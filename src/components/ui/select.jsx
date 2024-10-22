import * as React from "react";
import { cn } from "@/lib/utils"; // Adjust the import based on your project structure

const Select = React.forwardRef(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring",
      className
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

const SelectOption = React.forwardRef(({ className, children, ...props }, ref) => (
  <option ref={ref} className={cn("text-sm", className)} {...props}>
    {children}
  </option>
));
SelectOption.displayName = "SelectOption";

export { Select, SelectOption };
