"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TheEthos() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="h-[50vh] bg-neutral-900 border-y border-white/10 flex items-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <motion.div
                className="whitespace-nowrap flex items-center"
                style={{ x }}
            >
                <div className="flex gap-24 px-12">
                    {["FORM FOLLOWS CHAOS", "ENGINEERED DYSTOPIA", "SILENCE IS NOISE", "VONEX PROTOCOL"].map((text, i) => (
                        <h2 key={i} className={`text-[12vw] font-black tracking-tighter leading-none ${i % 2 === 0 ? 'text-white' : 'text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-600'}`}>
                            {text}
                        </h2>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs tracking-[0.5em] text-gray-500 uppercase"
                style={{ opacity }}
            >
                Scroll to Explore
            </motion.div>
        </section>
    );
}
