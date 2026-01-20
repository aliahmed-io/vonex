"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "ARCHIVE", href: "#" },
        { name: "FRESH DROPS", href: "#" },
        { name: "THE LAB", href: "#" },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 w-full px-6 md:px-12 py-6 z-50 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'mix-blend-difference text-white'}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="flex items-center gap-6">
                    <Menu
                        size={24}
                        className="cursor-pointer hover:text-gray-300 transition-colors"
                        onClick={() => setIsMenuOpen(true)}
                    />
                    <Search size={24} className="hidden md:block cursor-pointer hover:text-gray-300 transition-colors" />
                </div>

                <h1 className="text-2xl md:text-3xl font-black tracking-[0.3em] uppercase absolute left-1/2 -translate-x-1/2 pointer-events-none">
                    VONEX
                </h1>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-6 mr-6">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="font-mono text-xs font-bold tracking-widest hover:text-gray-400 transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 cursor-pointer group">
                        <span className="hidden md:block font-mono text-xs font-bold tracking-widest group-hover:text-gray-300 transition-colors">STASH</span>
                        <div className="relative">
                            <ShoppingBag size={20} className="group-hover:text-gray-300 transition-colors" />
                            <span className="absolute -top-2 -right-2 bg-orange-600 text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-8 right-8 text-white hover:text-orange-600 transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500 hover:from-orange-600 hover:to-orange-400 transition-all uppercase tracking-tighter"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
