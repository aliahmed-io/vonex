"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TheSyndicate() {
    return (
        <section className="py-32 px-6 md:px-12 bg-white text-black relative">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div>
                    <h3 className="font-mono text-black text-sm tracking-widest mb-4">THE SYNDICATE</h3>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                        Data is <br /> Currency.
                    </h2>
                    <p className="font-mono text-gray-600 max-w-md mb-12">
                        Join the inner circle. Early access to drops, classified lookbooks, and private sales. No spam, only signal.
                    </p>

                    <form className="flex flex-col gap-4">
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="ENTER_EMAIL_ADDRESS"
                                className="w-full bg-transparent border-b-2 border-black py-4 text-xl font-bold tracking-widest placeholder:text-gray-300 focus:outline-hidden focus:border-orange-600 transition-colors uppercase"
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity text-orange-600 font-mono text-xs">
                                // READY
                            </div>
                        </div>
                        <button className="self-start px-12 py-4 bg-black text-white font-bold tracking-[0.2em] text-sm hover:bg-orange-600 transition-colors uppercase mt-4">
                            INITIALIZE
                        </button>
                    </form>
                </div>

                <div className="relative h-[600px] bg-neutral-100 overflow-hidden flex items-center justify-center border border-black/5">
                    <div className="grid grid-cols-8 grid-rows-8 w-full h-full opacity-10 p-8">
                        {[...Array(64)].map((_, i) => (
                            <div key={i} className="border border-black flex items-center justify-center font-mono text-[8px]">{i}</div>
                        ))}
                    </div>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                    >
                        <div className="w-[400px] h-[400px] border-20 border-black/10 rounded-full border-t-black/90"></div>
                    </motion.div>
                    <div className="absolute font-black text-9xl tracking-tighter opacity-5">VONEX</div>
                </div>

            </div>
        </section>
    );
}
