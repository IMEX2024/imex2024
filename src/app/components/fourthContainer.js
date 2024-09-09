'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef, useState } from 'react';
import Boss from "/public/boss_face.png";
import AlphaLogo from "/public/alpha_logo.png";
import { root } from 'postcss';
import Footer from './footer';
import Image from 'next/image';


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
    const titleTextOpa = useTransform(scrollYProgress, [0.05, 0.24], [0, 1]);
    const titleTextX = useTransform(scrollYProgress, [0.05, 0.24], ['-150%', '0%']);
    const textY = useTransform(scrollYProgress, [0.07, 0.22], ['300%', '0%']);
    const picX = useTransform(scrollYProgress, [0.1, 0.47], ['100%', '-22%']);
    const logoX = useTransform(scrollYProgress, [0.5, 0.6], ['100%', '0%']);
    const fourthLogoX = useTransform(scrollYProgress, [0.5, 0.6], ['-100%', '0%']);
    const logoDivOpa = useTransform(scrollYProgress, [0.4, 0.61], [0, 1]);
    const secondTitleTextX = useTransform(scrollYProgress, [0.45, 0.57], ['150%', '0%']);
    const secondTextY = useTransform(scrollYProgress, [0.47, 0.55], ['-300%', '0%']);
    const secondTextOpa = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
    const footerY = useTransform(scrollYProgress, [0.5, 0.65, 0.8], ['10%', '-40%', '0%']);


    console.log(scrollYProgress);

    return (
        <ReactLenis root>
            <div ref={ref} className=" bg-black w-full h-auto items-center flex flex-col ">
                <div className=' bg-black w-full h-2vh flex items-start justify-center '>
                    <div className=' bg-[#2400FF] flex flex-col gap-[2%] mobile:gap-0 py-[8%] items-center justify-center w-full h-1vh sticky top-0 rounded-br-[1000px] '>
                        <div className=' flex flex-col w-[80%] h-[25vmin] text-white'>
                            <motion.p style={{ opacity: titleTextOpa, x: titleTextX }} className=' font-bold text-[3.5vmax] mb-[2%]'>Core Team</motion.p>
                            <motion.p style={{ y: textY }} className=' font-normal text-[1.3vmax] pl-[5%]'>ImmersiX is powered by a diverse team of experts committed to revolutionizing the AR/VR landscape.
                                Our leadership brings together decades of experience across blockchain, AR/VR technology,
                                and digital content creation, ensuring that ImmersiX remains at the forefront of innovation.
                            </motion.p>
                        </div>
                        <motion.div style={{ x: picX }} className=' w-full flex mobile:flex-col mobile:mb-[25%]'>
                            <div className=' flex justify-center items-center w-[50%] h-[30vmax] mobile:w-full '>
                                <div className='w-[50%] mobile:w-[50%] h-full flex flex-col gap-[10%] justify-center items-center text-white'>
                                    <div className=' w-[18vmin] h-[18vmin] bg-white rounded-full relative overflow-hidden'>
                                        <Image src={Boss} fill priority sizes='100vw, 100vw' />
                                    </div>
                                    <p className=' font-normal text-[1vmax]'>Ethan Miller (CEO & Co-Founder)</p>
                                </div>
                                <div className='w-[50%] mobile:w-[50%] h-full flex flex-col gap-[10%] justify-center items-center text-white'>
                                    <div className=' w-[18vmin] h-[18vmin] bg-white rounded-full relative overflow-hidden'>
                                        <Image src={Boss} fill priority sizes='100vw, 100vw' />
                                    </div>
                                    <p className=' font-normal text-[1vmax]'>Ethan Miller (CEO & Co-Founder)</p>
                                </div>
                            </div>
                            <div className=' flex justify-center items-center w-[50%] mobile:w-full h-full'>
                                <div className='w-[50%] mobile:w-[50%] h-full flex flex-col gap-[10%] justify-center items-center text-white'>
                                    <div className=' w-[18vmin] h-[18vmin] bg-white rounded-full relative overflow-hidden'>
                                        <Image src={Boss} fill priority sizes='100vw, 100vw' />
                                    </div>
                                    <p className=' font-normal text-[1vmax]'>Ethan Miller (CEO & Co-Founder)</p>
                                </div>
                                <div className='w-[50%] mobile:w-[50%] h-full flex flex-col gap-[10%] justify-center items-center text-white'>
                                    <div className=' w-[18vmin] h-[18vmin] bg-white rounded-full relative overflow-hidden'>
                                        <Image src={Boss} fill priority sizes='100vw, 100vw' />
                                    </div>
                                    <p className=' font-normal text-[1vmax]'>Ethan Miller (CEO & Co-Founder)</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className=' bg-black flex flex-col gap-[2%] py-[8%] items-center justify-center w-full h-1vh'>
                    <div className=' flex flex-col justify-center items-end w-[80%] h-[25vmax] text-white '>
                        <motion.p style={{ x: secondTitleTextX }} className=' font-bold text-[3.5vmax] mb-[2%]'>Partners</motion.p>
                        <motion.p style={{ y: secondTextY, opacity: secondTextOpa }} className=' font-normal text-[1.3vmax] pl-[5%] text-end'>
                            At ImmersiX, we leverage strategic partnerships to enhance our technological capabilities and expand our market reach.
                            Our collaborations with industry leaders in AR/VR development and blockchain technology are vital in providing our users
                            with cutting-edge immersive experiences.
                        </motion.p>
                    </div>
                    <div className=' w-full h-full flex'>
                        <motion.div style={{ opacity: logoDivOpa }} className='w-full h-full flex mobile:flex-col justify-center items-center text-white'>
                            <div className=' flex justify-center items-center w-[50%] mobile:w-full h-full'>
                                <motion.div style={{ x: logoX }} className=' w-[50%] h-full relative overflow-hidden'>
                                    <Image src={AlphaLogo} fill priority sizes='100vw, 100vw' />
                                </motion.div>
                                <div className=' w-[50%] h-full relative overflow-hidden'>
                                    <Image src={AlphaLogo} fill priority sizes='100vw, 100vw' />
                                </div>
                            </div>
                            <div className=' flex justify-center items-center w-[50%] mobile:w-full h-full'>
                                <div className=' w-[50%] h-full relative overflow-hidden'>
                                    <Image src={AlphaLogo} fill priority sizes='100vw, 100vw' />
                                </div>
                                <motion.div style={{ x: fourthLogoX }} className=' w-[50%] h-full relative overflow-hidden'>
                                    <Image src={AlphaLogo} fill priority sizes='100vw, 100vw' />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.div className=' w-full h-1vh flex gap-[15%] items-start justify-center z-[99]'>
                    <Footer />
                </motion.div>
            </div>
        </ReactLenis>
    );
}