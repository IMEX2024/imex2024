'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";


export default function NumberMen({firstNum, secondNum, start, end , xStart, xEnd, 
    opaStartTime, opaEndTime , opaStart, opaEnd, scaleStartTime, scaleEndTime, scaleStart, scaleEnd}) {
    const { scrollY, scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0.086, 0.13], [400, 150]);
    const x = useTransform(scrollYProgress, [start, end], [xStart, xEnd]);
    const opacity = useTransform(scrollYProgress, [opaStartTime, opaEndTime], [opaStart, opaEnd]);
    const scale = useTransform(scrollYProgress, [scaleStartTime, scaleEndTime], [scaleStart, scaleEnd]);
    const numOpa = useTransform(scrollYProgress, [0.129, 0.143], [0, 1]);


    // console.log('scroll', scrollYProgress);

    return (
        <ReactLenis root>
            <motion.div style={{x, y, opacity, scale}} className=" flex w-full h-full absolute text-black ">
                <motion.div style={{opacity:numOpa}} className="w-[50%] h-full opacity-0  font-bold text-[50vmin] leading-[80%] text-right ">{firstNum}</motion.div>
                <motion.div style={{opacity:numOpa}} className="w-[50%] h-full opacity-0  font-bold text-[50vmin] leading-[80%] text-left ">{secondNum}</motion.div>
            </motion.div>
        </ReactLenis>

    );
}