'use client'

import Book from "/public/book.png";
import Wall from "/public/wall.jpg";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";


export default function Pic() {
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [2000, 2700], [0, -1050]);

    return (
        <ReactLenis root>
            <motion.div style={{y}} className="w-full h-[2000px] flex flex-col " >
                <div className=" bg-cover" style={{ backgroundImage: `url(${Wall.src})`, width: '100%', height: '100%', }}></div>
                <div className=" bg-cover" style={{ backgroundImage: `url(${Book.src})`, width: '100%', height: '100%', }}></div>
            </motion.div>
        </ReactLenis>

    );
}