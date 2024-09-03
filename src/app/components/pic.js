'use client'

import Book from "/public/book.png";
import Wall from "/public/wall.jpg";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";


export default function Pic() {
    const { scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0.14, 0.3], ['0%', '-65%']);

    // console.log(scrollYProgress);

    return (
        <ReactLenis root>
            <motion.div style={{y}} className="w-full h-[2000px] flex flex-col " >
                <div className=" bg-cover bg-no-repeat " style={{ backgroundImage: `url(${Wall.src})`, width: '100%', height: '100%', }}></div>
                <div className=" bg-cover bg-no-repeat " style={{ backgroundImage: `url(${Book.src})`, width: '100%', height: '100%', }}></div>
            </motion.div>
        </ReactLenis>

    );
}