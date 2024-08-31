'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";


export default function NumberMen({firstNum, secondNum, start, end , xStart, xEnd, opaStart, opaEnd, scaleStart, scaleEnd}) {
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [1000, 2000], [200, 0]);
    const x = useTransform(scrollY, [start, end], [xStart, xEnd]);
    const opacity = useTransform(scrollY, [start, end], [opaStart, opaEnd]);
    const scale = useTransform(scrollY, [start, end], [scaleStart, scaleEnd]);


    console.log('scroll', scrollY);

    return (
        <ReactLenis root>
            <motion.div style={{x, y, opacity, scale}} className="flex w-full h-full">
                <div className="w-[50%] h-full  font-bold text-[70vmin] leading-[80%] text-right ">{firstNum}</div>
                <div className="w-[50%] h-full  font-bold text-[70vmin] leading-[80%] text-left ">{secondNum}</div>
            </motion.div>
        </ReactLenis>

    );
}