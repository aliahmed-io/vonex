"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">

                {/* Brand Column */}
                <div className="col-span-1">
                    <h2 className="text-4xl font-black tracking-tighter mb-6">VONEX</h2>
                    <p className="font-mono text-xs text-gray-500 max-w-xs leading-relaxed">
                        ENGINEERED FOR THE URBAN VOID. <br />
                        FORM FOLLOWS CHAOS. <br />
                        EST. 2026
                    </p>
                </div>

                {/* Logistics */}
                <div className="col-span-1">
                    <h4 className="font-mono text-orange-600 text-xs tracking-widest mb-6">LOGISTICS</h4>
                    <ul className="flex flex-col gap-4 font-bold text-sm tracking-wider uppercase">
                        {['Worldwide Shipping', 'Order Tracking', 'Returns Portal', 'Duty Calculator'].map(item => (
                            <li key={item}>
                                <a href="#" className="hover:text-gray-400 transition-colors flex items-center gap-2 group">
                                    {item}
                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Protocols */}
                <div className="col-span-1">
                    <h4 className="font-mono text-orange-600 text-xs tracking-widest mb-6">PROTOCOLS</h4>
                    <ul className="flex flex-col gap-4 font-bold text-sm tracking-wider uppercase">
                        {['Terms of Service', 'Privacy Policy', 'Cookie Consent', 'Accessibility'].map(item => (
                            <li key={item}>
                                <a href="#" className="hover:text-gray-400 transition-colors flex items-center gap-2 group">
                                    {item}
                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Comms */}
                <div className="col-span-1">
                    <h4 className="font-mono text-orange-600 text-xs tracking-widest mb-6">COMMS</h4>
                    <ul className="flex flex-col gap-4 font-bold text-sm tracking-wider uppercase">
                        {['Support Channel', 'Press Inquiries', 'Wholesale', 'Careers'].map(item => (
                            <li key={item}>
                                <a href="#" className="hover:text-gray-400 transition-colors flex items-center gap-2 group">
                                    {item}
                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-mono text-[10px] text-gray-600">© 2026 VONEX INC. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-4">
                    <span className="font-mono text-[10px] text-gray-600">V.2.0.1 [BETA]</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
            </div>
        </footer>
    );
}
