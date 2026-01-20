"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definitions ---
interface FashionSlideData {
    id: number;
    image: string;
    collection: string;
    lookName: string;
    description: string;
    ctaPrimary: string;
}

interface ProductData {
    id: number;
    image: string;
    hoverImage: string;
    name: string;
    price: string;
}

// --- Mock Data ---

const heroData: FashionSlideData[] = [
    {
        id: 1,
        image: "/images/hero-concrete.png",
        collection: "WINTER 2026 / DROP 01",
        lookName: "CONCRETE LAYERS",
        description: "Defining the silhouette of the modern metropolis. Oversized structures meets technical fabrics.",
        ctaPrimary: "SHOP THE LOOK"
    },
    {
        id: 2,
        image: "/images/hero-utility.png",
        collection: "WINTER 2026 / DROP 01",
        lookName: "MONOCHROME UTILITY",
        description: "Functional brutalism. Japanese denim paired with modular nylon accessories.",
        ctaPrimary: "EXPLORE"
    },
    {
        id: 3,
        image: "/images/hero-suit.png",
        collection: "ESSENTIALS",
        lookName: "THE NEW SUIT",
        description: "Tailoring deconstructed. Relaxed fits for a post-office world.",
        ctaPrimary: "VIEW EDIT"
    },
    {
        id: 4,
        image: "/images/hero-leather.png",
        collection: "ACCESSORIES",
        lookName: "LEATHER GOODS",
        description: "Italian calfskin structured for daily carry. Minimalist hardware details.",
        ctaPrimary: "SHOP BAGS"
    }
];

const curatedProducts: ProductData[] = [
    {
        id: 101,
        image: "/images/product-coat.png",
        hoverImage: "/images/product-coat-detail.png",
        name: "Structured Wool Coat / Charcoal",
        price: "$850.00"
    },
    {
        id: 102,
        image: "/images/product-tee.png",
        hoverImage: "/images/product-tee-detail.png",
        name: "Heavyweight Box Tee / Bone",
        price: "$120.00"
    },
    {
        id: 103,
        image: "/images/product-pant.png",
        hoverImage: "/images/product-pant-detail.png",
        name: "Cargo Tech Pant / Black",
        price: "$240.00"
    },
]

// --- Animation Variants ---
const textContainerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants = {
    initial: { y: 40, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

export default function FashionLandingStrip() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Derive active slide and thumbnails from stable data + activeIndex
    const activeSlide = heroData[activeIndex];

    // Calculate the next 3 slides for the thumbnail deck
    const thumbnails = [1, 2, 3].map((offset) => {
        const index = (activeIndex + offset) % heroData.length;
        return heroData[index];
    });

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % heroData.length);
    };

    const handlePrev = () => {
        setActiveIndex((current) => (current - 1 + heroData.length) % heroData.length);
    };

    // Auto-advance - resets whenever activeIndex changes (including manual navigation)
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [activeIndex]); // Reset timer on any index change

    return (
        <div className="w-full bg-[#111111] text-white font-sans">
            <main className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-black">

                {/* Navbar Removed - Uses Global Navbar */}

                {/* --- HERO IMAGE (CROSSFADE) --- */}
                <div className="relative w-full h-full">
                    <AnimatePresence mode="sync">
                        <motion.div
                            key={activeSlide.id}
                            className="absolute inset-0 w-full h-full z-0"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={activeSlide.image}
                                alt={activeSlide.lookName}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Editorial Content Block - Fades in/out separately */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSlide.id}
                            className="absolute bottom-[15%] left-6 md:left-24 max-w-[600px] z-20"
                            variants={textContainerVariants}
                            initial="initial"
                            animate="animate"
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        >
                            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                                <div className="h-[2px] w-12 bg-orange-600"></div>
                                <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-gray-300">{activeSlide.collection}</p>
                            </motion.div>

                            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
                                {activeSlide.lookName.split(' ').map((word, i) => (
                                    <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400 block" : "block"}>{word} </span>
                                ))}
                            </motion.h2>

                            <motion.p variants={itemVariants} className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-md font-mono">
                                {activeSlide.description}
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
                                <button className="px-8 py-4 bg-white text-black font-bold tracking-[0.2em] text-xs hover:bg-orange-600 hover:text-white transition-all uppercase flex items-center gap-2 group">
                                    {activeSlide.ctaPrimary}
                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 border border-white/30 text-white font-bold tracking-[0.2em] text-xs hover:border-white transition-all uppercase">
                                    LOOKBOOK
                                </button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- THUMBNAIL DECK --- */}
                <div className="absolute bottom-12 right-6 md:right-12 gap-4 z-40 hidden md:flex items-end">
                    {thumbnails.map((slide, idx) => (
                        <motion.div
                            key={slide.id}
                            className="relative w-32 h-48 md:w-40 md:h-60 rounded-sm overflow-hidden group cursor-pointer border-b-4 border-transparent hover:border-orange-600"
                            onClick={handleNext}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={slide.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={slide.lookName} />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all flex flex-col justify-end p-4">
                                <h4 className="font-bold text-xs uppercase tracking-wider truncate">{slide.lookName}</h4>
                                <p className="font-mono text-[10px] text-orange-500 tracking-widest">NEXT LOOK</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-12 left-auto right-6 md:left-24 md:right-auto flex gap-2 z-40">
                    <button onClick={handlePrev} className="p-4 bg-black/50 border-l border-t border-b border-white/20 backdrop-blur-md text-white hover:bg-orange-600 hover:border-orange-600 transition-all">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={handleNext} className="p-4 bg-black/50 border border-white/20 backdrop-blur-md text-white hover:bg-orange-600 hover:border-orange-600 transition-all">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </main>

            {/* Ticker Section */}
            <div className="bg-orange-600 text-black overflow-hidden py-3 relative z-20 font-bold tracking-[0.2em] text-xs uppercase flex border-y border-black">
                <motion.div
                    className="whitespace-nowrap flex gap-8"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    {[...Array(4)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span>/// NEW SEASON DROP LIVE</span>
                            <span>/// FREE WORLDWIDE SHIPPING OVER $300</span>
                            <span>/// LIMITED QUANTITIES AVAILABLE</span>
                            <span>/// TOKYO - PARIS - NEW YORK</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>

            {/* Product Grid */}
            <section className="px-6 md:px-12 py-24 bg-[#0a0a0a]">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h3 className="font-mono text-orange-600 tracking-widest text-sm mb-2">CURRENT UNIFORM</h3>
                        <h2 className="text-4xl font-black uppercase tracking-tighter">SHOP THE LOOKS</h2>
                    </div>
                    <button className="hidden md:block font-bold tracking-[0.2em] text-xs border-b-2 border-white pb-1 hover:text-orange-600 hover:border-orange-600 transition-all uppercase">
                        VIEW ALL ARRIVALS
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {curatedProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-3/4 overflow-hidden bg-neutral-900 mb-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={product.hoverImage} alt={product.name + " detail"} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105" />
                                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/20 flex items-end p-4 opacity-0 group-hover:opacity-100">
                                    <button className="w-full py-3 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-orange-600 hover:text-white transition-colors">QUICK ADD +</button>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <div className="w-3 h-3 rounded-full bg-[#333] border border-white/20"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#555] border border-transparent opacity-50"></div>
                                    </div>
                                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1">{product.name}</h3>
                                    <p className="text-xs font-mono text-gray-400">Technical Blend</p>
                                </div>
                                <p className="font-mono font-bold text-sm">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
