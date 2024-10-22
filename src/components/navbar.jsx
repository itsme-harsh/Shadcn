import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "./ui/navigation";
import ThemeToggler from "./ThemeToggler"; // Importing the ThemeToggler
import { Link } from "react-router-dom";

const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
];

function Navbar() {
    
    const [isMoreMenuVisible, setMoreMenuVisible] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMoreMenu = () => {
        setMoreMenuVisible((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <NavigationMenu>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <button className="md:hidden pr-2.5" onClick={toggleMobileMenu}>
                        {/* Hamburger Icon */}
                        <span className={`block w-7 h-1 bg-black dark:bg-white mb-1 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                        ></span>
                        <span className={`block w-7 h-1 bg-black dark:bg-white mb-1 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-7 h-1 bg-black dark:bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                    <Link className="text-2xl lg:pl-4 Logo font-bold cursor-pointer" to="/">The Company</Link>
                </div>
                <div className="ml-auto md:hidden" >
                    <ThemeToggler />
                </div>
                <div className="hidden md:flex md:space-x-4">
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            <NavigationMenuLink href={item.href}>
                                {item.title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <span onClick={toggleMoreMenu}>
                                More
                            </span>
                        </NavigationMenuTrigger>
                        {isMoreMenuVisible && (
                            <NavigationMenuContent>
                                <ul className="p-2 list-none">
                                    <li>
                                        <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href="/careers">Careers</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        )}
                    </NavigationMenuItem> */}
                    <span className="pl-10"></span>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/login">Sign in</NavigationMenuLink>
                    </NavigationMenuItem>
                    <ThemeToggler/>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4">
                    <NavigationMenuList>
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuLink href={item.href}>
                                    {item.title}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                <span onClick={toggleMoreMenu}>
                                    More
                                </span>
                            </NavigationMenuTrigger>
                            {isMoreMenuVisible && (
                                <NavigationMenuContent>
                                    <ul className="p-2 list-none">
                                        <li>
                                            <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href="/careers">Careers</NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            )}
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/login">Sign in</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </div>
            )}
        </NavigationMenu>
    );
}

export default Navbar;
