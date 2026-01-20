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

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center offset (32px / 2)
            cursorY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Attach listeners to interactive elements
        // We use event delegation or periodic scaling for simplicity with broad selectors
        const addHoverListeners = () => {
            const targets = document.querySelectorAll('a, button, input, .cursor-pointer');
            targets.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        window.addEventListener('mousemove', moveCursor);
        addHoverListeners();

        // Re-attach listeners on DOM changes (simple mutation observer alternative for Single Page Apps)
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            observer.disconnect();
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
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent"
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
