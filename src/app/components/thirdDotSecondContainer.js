'use client'

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef, useState } from 'react';
import ExampleImg from "/public/secondImg.png";


export default function ThirdDotSecondContainer() {
    const ref = useRef(null);
    const scrollRef = useRef();
    const isInView = useInView(scrollRef);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],

    });

    const firstPicY = useTransform(scrollYProgress, [0.1, 0.45, 0.8], ['-200%', '0%', '200%']);
    const secondPicY = useTransform(scrollYProgress, [0.1, 0.45, 0.8], ['200%', '0%', '-200%']);
    const titleTextOpa = useTransform(scrollYProgress, [0.1, 0.45, 0.8], [0, 1, 0]);
    const textOpa = useTransform(scrollYProgress, [0.45, 0.8], [1, 0]);


    // console.log(scrollYProgress);

    // useEffect(() => {
    //     console.log("Element is in view: ", isInView)
    // }, [isInView])

    // console.log(isInView);
    return (
        <ReactLenis root>
            <div ref={ref} className=" bg-[#2400FF] w-full h-1vh relative flex mobile:flex-col items-center justify-center overflow-hidden ">
                <div ref={scrollRef} className=" w-[30%] mobile:w-full h-[60%] flex flex-col justify-center gap-[5%] text-white ">
                    <motion.p style={{ opacity: titleTextOpa }} className=" text-[2.5vmax]">Tokenomics</motion.p>
                    <motion.div style={{opacity: textOpa}} className=" flex flex-col ">
                        <p
                            style={{
                                transform: isInView ? "" : "translateX(-500px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                            }}
                            className=" text-white text-[0.8vmax] mobile:text-[1vmax] px-[15%]">The IMEX token serves as the central economic unit within the ImmersiX platform,
                            facilitating transactions for AR and 3D content across both consumer and business-to-business
                        </p>
                        <p
                            style={{
                                transform: isInView ? "" : "translateX(500px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                            }}
                            className=" text-white text-[0.8vmax] mobile:text-[1vmax] px-[15%]">(B2B) environments.
                            This utility token streamlines transactions, enhances platform engagement through rewards,
                            and supports the economic activities within the ecosystem.
                        </p>
                    </motion.div>
                </div>
                <div className=" w-[60%] mobile:w-full h-[60%] gap-[5%] flex items-center justify-center overflow-hidden">
                    <motion.div style={{ y: firstPicY }} className="w-[28vmax] h-[28vmax] bg-red-200 rounded-2xl overflow-hidden">
                        <div className="w-full h-full relative  ">
                            <Image src={ExampleImg} fill priority sizes="100vw, 100vw" />
                        </div>
                    </motion.div>
                    <motion.div style={{ y: secondPicY }} className="w-[28vmax] h-[28vmax] bg-red-400 relative rounded-2xl overflow-hidden">
                        <div className="w-full h-full relative  ">
                            <Image src={ExampleImg} fill priority sizes="100vw, 100vw" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </ReactLenis>
    );
}