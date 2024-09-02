'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef, useState } from 'react';
import Beach from "/public/beach.jpg";


export default function FourthContainer() {
    const [fourthWidth, setFourthWidth] = useState(typeof window !== 'undefined' ? window.innerWidth || 0 : 0);
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],

    });

    const beachScale = useTransform(scrollYProgress, [0.03, 0.31], [0.55, 1]);
    const textY = useTransform(scrollYProgress, [0, 0.12], [600, 0]);
    const textRotate = useTransform(scrollYProgress, [0.03, 0.13], [30, 0]);
    console.log(scrollYProgress);

    const handleResize = () => {
        setFourthWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ReactLenis root>
            <div ref={ref} className=" bg-[#212121] w-full h-screen items-center flex flex-col ">
                <div className=' bg-[#212121]  w-full h-screen flex gap-[15%] items-center justify-center overflow-hidden '>
                    <div className=' bg-[#212121]  w-full h-full flex justify-center items-start relative '>
                        <motion.div style={{scale:beachScale}} className=' w-[35vw] h-[35vw] rounded-2xl absolute top-0 left-[32.5%] translate-x-[-50%] '>
                            <div className=" bg-cover rounded-2xl" style={{ backgroundImage: `url(${Beach.src})`, width: '100%', height: '100%', }}></div>
                        </motion.div>
                        <motion.div style={{ y:textY, rotate:textRotate }} className={`w-full aspect-[3/1] font-semibold text-[#fffbf2] ${fourthWidth < 1425 ? 'text-[10vmin]' : 'text-[14vmin]'} absolute top-0 leading-[120%] flex flex-col justify-center items-center`}>
                            <p>CRIAMOS PROJETOS</p>
                            <p>COM VALOR-ES</p>
                        </motion.div>
                        <div className=' absolute bottom-0 mb-[5vmin]'>
                            <div className=' font-bold relative mt-10 w-[300px] pr-3 leading-[180%] text-black bg-[#FFFBF2] text-[16px] text-center rounded-full'>
                                VEJA NOSSO PORTFOLIO
                                <div className='rounded-full w-[2.3vmin] h-[2.3vmin] bg-black absolute top-[50%] translate-y-[-50%] right-[1%]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ReactLenis>
    );
}