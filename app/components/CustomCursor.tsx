"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth physics for the trailing cursor
    const springConfig = { damping: 20, stiffness: 150 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center offset (32px / 2)
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none mix-blend-difference flex items-center justify-center backdrop-blur-xs"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    zIndex: 9999
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Center dot */}
                <div className="w-1 h-1 bg-white rounded-full"></div>
            </motion.div>

            {/* Global CSS to hide default cursor */}
            <style jsx global>{`
                body, a, button, input {
                    cursor: none;
                }
            `}</style>
        </>
    );
}
