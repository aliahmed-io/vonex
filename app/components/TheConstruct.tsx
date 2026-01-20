"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TheConstruct() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Layer Transforms
    // Base: Slight scale down and fade out slowly
    // Layer Transforms
    // Base: Fades out completely [1 -> 0]
    const baseScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const baseOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]); // Fades to 0

    // Detail: Slides LEFT
    const detailX = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
    const detailOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
    const detailScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

    // Wireframe: Slides RIGHT
    const wireX = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const wireOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
    const wireScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.2]);


    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black text-white">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Background Text */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0.5]) }}
                >
                    <h2 className="text-[15vw] font-black text-neutral-800 leading-none tracking-tighter text-center">
                        SYSTEM<br />ANALYSIS
                    </h2>
                </motion.div>

                {/* The Hoodie Layers */}
                <div className="relative w-full max-w-2xl aspect-3/4 z-10">

                    {/* Layer 1: Base (Back) */}
                    {/* Layer 1: Base (Center - Fades Out) */}
                    <motion.div
                        className="absolute inset-0"
                        style={{ scale: baseScale, opacity: baseOpacity }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/hoodie-base.png" alt="Hoodie Base" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Layer 2: Detail (Middle - Goes Up) */}
                    {/* Layer 2: Detail (Left) */}
                    <motion.div
                        className="absolute inset-0 mix-blend-screen"
                        style={{ x: detailX, opacity: detailOpacity, scale: detailScale }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/hoodie-detail.png" alt="Structure Analysis" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Layer 3: Wireframe (Front - Goes Down) */}
                    {/* Layer 3: Wireframe (Right) */}
                    <motion.div
                        className="absolute inset-0 mix-blend-screen"
                        style={{ x: wireX, opacity: wireOpacity, scale: wireScale }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/hoodie-wireframe.png" alt="Wireframe Mesh" className="w-full h-full object-contain" />
                    </motion.div>

                </div>

                {/* Overlay UI Info */}
                <div className="absolute bottom-12 left-12 font-mono text-xs text-orange-500 z-20">
                    <p>FIG. 01 — DECONSTRUCTION</p>
                    <p>THERMAL REGULATION MATRIX</p>
                </div>

                <div className="absolute top-1/2 right-12 font-mono text-xs text-white z-20 hidden md:block text-right">
                    <motion.div style={{ opacity: detailOpacity }}>
                        <p className="mb-2 w-32 border-b border-orange-500 pb-1">LAYER 02</p>
                        <p className="text-gray-400">BALLISTIC NYLON CORE</p>
                    </motion.div>
                    <motion.div className="mt-8" style={{ opacity: wireOpacity }}>
                        <p className="mb-2 w-32 border-b border-white pb-1 ml-auto">LAYER 03</p>
                        <p className="text-gray-400">STRUCTURAL MESH</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
