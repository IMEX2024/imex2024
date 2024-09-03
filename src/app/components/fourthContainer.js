'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef, useState } from 'react';
import Beach from "/public/beach.jpg";
import { root } from 'postcss';


export default function FourthContainer() {
    const [fourthWidth, setFourthWidth] = useState(typeof window !== 'undefined' ? window.innerWidth || 0 : 0);
    const ref = useRef(null);
    const containerRef =useRef(null);
    const scrollRef = useRef({ root:containerRef });
    const isInView = useInView(scrollRef);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],

    });

    const beachScale = useTransform(scrollYProgress, [0.03, 0.31], [0.55, 1]);

    // console.log(scrollYProgress);

    const handleResize = () => {
        setFourthWidth(window.innerWidth);
    };

    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])


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
                <div ref={containerRef} className=' bg-[#212121]  w-full h-screen flex gap-[15%] items-center justify-center '>
                    <div className=' bg-[#212121]  w-full h-full flex justify-center items-start relative overflow-hidden '>
                        <motion.div style={{ scale: beachScale }} className=' w-[35vw] h-[35vw] rounded-2xl absolute top-0 left-[32.5%] translate-x-[-50%] '>
                            <div className=" bg-cover rounded-2xl" style={{ backgroundImage: `url(${Beach.src})`, width: '100%', height: '100%', }}></div>
                        </motion.div>
                        <div className={`w-full aspect-[3/1] font-semibold text-[#fffbf2] text-[11vmin] absolute top-0 leading-[120%] flex flex-col justify-center items-center`}>
                            <p
                                ref={scrollRef}
                                style={{
                                    transform: isInView ? "" : "translateY(200px)",
                                    rotate: isInView ? "" : "10deg",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                                }}
                                
                            >CRIAMOS PROJETOS</p>
                            <p
                                ref={scrollRef}
                                style={{
                                    transform: isInView ? "" : "translateY(200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                                }}
                            >COM VALOR-ES</p>
                        </div>
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