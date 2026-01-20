"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TheArchive() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

    const imagesRow1 = [
        "/images/hero-concrete.png",
        "/images/texture-carbon.png",
        "/images/product-coat.png",
        "/images/hero-utility.png",
    ];

    const imagesRow2 = [
        "/images/texture-ripstop.png",
        "/images/hero-suit.png",
        "/images/product-tee.png",
        "/images/hero-leather.png",
    ];

    return (
        <section ref={containerRef} className="py-24 bg-neutral-950 overflow-hidden relative">

            {/* Background Details */}
            <div className="absolute top-12 left-12 font-mono text-[10px] text-gray-700 tracking-widest z-10">
                ARCHIVE_DB_V.04 <br />
                CLASSIFIED MATERIALS
            </div>

            {/* Row 1 (Moves Left) */}
            <motion.div style={{ x: x1 }} className="flex gap-4 mb-4 w-[200vw]">
                {[...imagesRow1, ...imagesRow1].map((src, i) => (
                    <div key={i} className="relative w-[400px] h-[300px] shrink-0 grayscale hover:grayscale-0 transition-all duration-500 cursor-none group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Archive Material" />
                        <div className="absolute inset-0 border border-white/10 group-hover:border-orange-600/50 transition-colors"></div>
                        <div className="absolute bottom-4 left-4 font-mono text-[10px] text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            FIG. {i + 1}
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Row 2 (Moves Right) */}
            <motion.div style={{ x: x2 }} className="flex gap-4 w-[200vw]">
                {[...imagesRow2, ...imagesRow2].map((src, i) => (
                    <div key={i} className="relative w-[400px] h-[300px] shrink-0 grayscale hover:grayscale-0 transition-all duration-500 cursor-none group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Archive Material" />
                        <div className="absolute inset-0 border border-white/10 group-hover:border-orange-600/50 transition-colors"></div>
                        <div className="absolute bottom-4 right-4 font-mono text-[10px] text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            REF. {i + 99}
                        </div>
                    </div>
                ))}
            </motion.div>

        </section>
    );
}
