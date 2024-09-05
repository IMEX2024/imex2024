'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";


export default function NumberMen({firstNum, secondNum, start, end , xStart, xEnd, 
    opaStartTime, opaEndTime ,opaRealEndTime,opaRealEnd, opaStart, opaEnd, scaleStartTime, scaleEndTime, scaleStart, scaleEnd }) {
    const { scrollY, scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0.086, 0.13], [400, 200]);
    const x = useTransform(scrollYProgress, [start, end], [xStart, xEnd]);
    const opacity = useTransform(scrollYProgress, [opaStartTime, opaEndTime, opaRealEndTime], [opaStart, opaEnd, opaRealEnd]);
    const scale = useTransform(scrollYProgress, [scaleStartTime, scaleEndTime], [scaleStart, scaleEnd]);
    const numOpa = useTransform(scrollYProgress, [0.152, 0.166], [0, 1]);


    // console.log('scroll', scrollYProgress);

    return (
        <ReactLenis root>
            <motion.div style={{x, y, opacity, scale}} className={` flex flex-col w-full h-full absolute text-white `}>
                <motion.div style={{opacity:numOpa}} className={`w-full h-full opacity-0  font-bold text-[14vmin] mobile:text-[6vmin] leading-[200%] text-left `}>{firstNum}</motion.div>
                <motion.div style={{opacity:numOpa}} className={`w-full h-full opacity-0  font-bold text-[14vmin] mobile:text-[6vmin] leading-[80%] text-left `}>{secondNum}</motion.div>
            </motion.div>
        </ReactLenis>

    );
}