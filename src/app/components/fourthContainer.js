'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef, useState } from 'react';
import Beach from "/public/beach.jpg";
import { root } from 'postcss';
import Footer from './footer';


export default function FourthContainer() {
    const [fourthWidth, setFourthWidth] = useState(typeof window !== 'undefined' ? window.innerWidth || 0 : 0);
    const ref = useRef(null);
    const containerRef = useRef(null);
    const scrollRef = useRef();
    const isInView = useInView(scrollRef);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],
    });

    const beachScale = useTransform(scrollYProgress, [0.03, 0.31], [0.55, 1]);
    const beachOpa = useTransform(scrollYProgress, [0.33, 0.447], [1, 0]);
    const footerY = useTransform(scrollYProgress, [0.27, 0.5, 0.66], ['30%', '-30%', '0%']);


    // console.log(scrollYProgress);

    const handleResize = () => {
        setFourthWidth(window.innerWidth);
    };

    // useEffect(() => {
    //     console.log("Element is in view: ", isInView)
    // }, [isInView])

    // console.log(isInView);
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ReactLenis root>
            <div ref={ref} className=" bg-[#212121] w-full h-auto items-center flex flex-col ">
                <div className=' bg-[#212121]  w-full h-screen flex gap-[15%] items-start justify-center '>
                    <motion.div style={{ opacity: beachOpa }} ref={scrollRef} className=' w-full flex flex-col gap-[5vmin] justify-center items-center relative overflow-hidden '>
                        <motion.div style={{ scale: beachScale }} className=' w-[35vmax] h-[35vmax] tablet:w-[50vmin] tablet:h-[50vmin] rounded-2xl '>
                            <div className=" bg-cover rounded-2xl" style={{ backgroundImage: `url(${Beach.src})`, width: '100%', height: '100%', }}></div>
                        </motion.div>
                        <div className={`w-full aspect-[3/1] font-semibold text-[#fffbf2] text-[9vmax] mobile:text-[10vmin] tablet:text-[10vmin] bigTablet: absolute top-[50%] translate-y-[-50%] leading-[120%] flex flex-col justify-center items-center`}>
                            <p

                                style={{
                                    transform: isInView ? "" : "translateY(200px)",
                                    rotate: isInView ? "" : "10deg",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                                }}

                            >CRIAMOS PROJETOS</p>
                            <p

                                style={{
                                    transform: isInView ? "" : "translateY(200px)",
                                    opacity: isInView ? 1 : 0,
                                    transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
                                }}
                            >COM VALOR-ES</p>
                        </div>
                        <div className=''>
                            <div className=' font-bold relative w-[15vmax] pr-3 leading-[180%] text-black bg-[#FFFBF2] text-[0.8vmax] text-center rounded-full'>
                                VEJA NOSSO PORTFOLIO
                                <div className='rounded-full w-[1.3vmax] h-[1.3vmax] bg-black absolute top-[50%] translate-y-[-50%] right-[3%]'></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div style={{y:footerY}} className=' w-full h-1.2vh flex gap-[15%] items-start justify-center z-[99]'>
                    <Footer />
                </motion.div>
            </div>
        </ReactLenis>
    );
}