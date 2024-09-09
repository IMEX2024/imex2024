'use client'

import SecondImg from "/public/secondImg.png";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";


export default function Pic() {
    const { scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0.14, 0.3], ['0%', '-80%']);

    // console.log(scrollYProgress);

    return (
        <ReactLenis root>
            <motion.div style={{y}} className="bg-black w-full h-[200%] flex flex-col " >
                <div className=" bg-cover bg-no-repeat " style={{ backgroundImage: `url(${SecondImg.src})`, width: '100%', height: '100%', }}></div>
                <div className=" bg-cover bg-no-repeat " style={{ backgroundImage: `url(${SecondImg.src})`, width: '100%', height: '100%', }}></div>
            </motion.div>
        </ReactLenis>

    );
}