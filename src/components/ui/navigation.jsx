import React from "react";

export function NavigationMenu({ children }) {
  return (
    <nav className="border p-4 bg-gray-200 text-black dark:bg-black dark:text-white transition-colors">
      {children}
    </nav>
  );
}
// export function NavigationMenu({ children }) {
//   return (
//     <nav className="p-4 bg-gray-200 text-black dark:bg-gray-800 dark:text-white transition-colors">
//       {children}
//     </nav>
//   );
// }

export function NavigationMenuList({ children }) {
  return <ul className="flex flex-col pl-[15px] md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 list-none">{children}</ul>;
}

export function NavigationMenuItem({ children }) {
  return <li className="relative list-none">{children}</li>;
}

export function NavigationMenuLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors"
    >
      {children}
    </a>
  );
}

export function NavigationMenuTrigger({ children }) {
  return (
    <button className="text-black font-semibold dark:text-white transition-colors">
      {children}
    </button>
  );
}

export function NavigationMenuContent({ children }) {
  return (
    <div className="absolute mt-4 bg-white text-black dark:bg-gray-800 dark:text-white shadow-lg transition-colors">
      {children}
    </div>
  );
}
