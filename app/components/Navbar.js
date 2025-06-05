"use client";
import React, { useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import ConstructionIcon from '@mui/icons-material/Construction';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-gray-200">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center space-x-4">
                            <a href="/" className="flex items-center space-x-4">
                                {/* <div className="bg-red-700 p-2.5 rounded-lg shadow-md">
                                    <ConstructionIcon className="text-white h-6 w-6" />
                                </div> */}
                                <div className="flex flex-col">
                                    <span className="text-xl font-black text-gray-900">KNOLL</span>
                                    <span className="text-[10px] font-bold text-red-700 tracking-widest -mt-1">CRANE, INC.</span>
                                </div>
                            </a>
                        </div>

                        <div className="hidden lg:flex items-center gap-2">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <a href="/services">Services</a>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <a href="/equipment">Equipment</a>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <a href="/projects">Projects</a>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <a href="/about">About</a>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <a href="/contact">Contact</a>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            <div className="ml-8 pl-8 border-l border-gray-200">
                                <Button asChild className="bg-red-700 hover:bg-red-800 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 px-6 py-2.5 h-10 rounded-md">
                                    <a href="tel:815-675-9400" className="flex items-center gap-2">
                                        <PhoneIcon className="h-4 w-4" />
                                        <span className="text-sm">(815) 675-9400</span>
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <button
                            className="lg:hidden p-2 text-gray-700 hover:text-red-700 transition-colors rounded-md hover:bg-red-50"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 pt-20">
                    <div className="flex flex-col p-6 space-y-2 max-w-lg mx-auto">
                        <a href="/" className="text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100 px-4 py-3 rounded-md transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Home</a>
                        <a href="/services" className="text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100 px-4 py-3 rounded-md transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Services</a>
                        <a href="/equipment" className="text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100 px-4 py-3 rounded-md transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Equipment</a>
                        <a href="/projects" className="text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100 px-4 py-3 rounded-md transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                        <a href="/about" className="text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100 px-4 py-3 rounded-md transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>About</a>
                        <a href="/contact" className="text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-100 px-4 py-3 rounded-md transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                        <div className="pt-6 border-t border-gray-200 mt-6">
                            <Button asChild className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 h-12 rounded-md">
                                <a href="tel:815-675-9400" className="flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-4 w-4" />
                                    <span className="text-sm">(815) 675-9400</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 