import * as React from "react";
import { cn } from "@/lib/utils"; // Adjust the import based on your project structure

const Label = React.forwardRef(({ className, children, htmlFor, ...props }, ref) => (
  <label
    ref={ref}
    htmlFor={htmlFor}
    className={cn("text-sm font-medium leading-none", className)} // Basic styling, you can customize as needed
    {...props}
  >
    {children}
  </label>
));

Label.displayName = "Label";

export { Label };
