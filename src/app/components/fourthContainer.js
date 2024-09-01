'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";


export default function FourthContainer() {
    const { scrollY } = useScroll();

    const textY = useTransform(scrollY, [6445, 8745], [0, -700]);
    const circleX = useTransform(scrollY, [9045, 9700], [0, -1100]);
    const textOpa = useTransform(scrollY, [5845, 6445], [0, 1]);
    const x = useTransform(scrollY, [4599, 5750], [-750, 0]);
    const circleScale = useTransform(scrollY, [5845, 6445], [0.2, 2]);
    const circleOpa = useTransform(scrollY, [5745, 5845], [0, 1]);
    const divOpa = useTransform(scrollY, [8745, 9245], [1, 0]);

    return (
        <ReactLenis root>
            <div className=" bg-[#fffbf2] w-full h-screen min-h-[65rem] items-center flex flex-col ">
                <div className=' bg-blue-200 w-full h-screen flex gap-[15%] items-center justify-center '>
                    
                </div>
            </div>
        </ReactLenis>
    );
}