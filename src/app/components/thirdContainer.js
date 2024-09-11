'use client'

import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef, useState } from 'react';
import ThirdCircle from "/public/blue_circle.png";


export default function ThirdContainer() {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth || 0 : 0);
    const num = (width > 1920 ? 9 : 4.5);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],

    });

    const textY = useTransform(scrollYProgress, [0.51, 0.6], ['0%', '-75%']);
    const circleX = useTransform(scrollYProgress, [0.65, 0.8], ['0%', `-${width / num}%`]);
    const textOpa = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
    const x = useTransform(scrollYProgress, [0.2, 0.35], [-950, 0]);
    const moblieX = useTransform(scrollYProgress, [0.02, 0.15], [-950, 0]);
    const titleX = useTransform(scrollYProgress, [0.35, 0.5], [-950, 0]);
    const circleScale = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.87], [0.2, 2, 2, 0.5]);
    const circleOpa = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.87], [0, 1, 1, 0]);
    const circleRotate = useTransform(scrollYProgress, [0.35, 0.6, 0.65, 0.87], ['0deg', '360deg', '360deg', '0deg']);
    const divOpa = useTransform(scrollYProgress, [0.61, 0.85], [1, 0]);

    // console.log(scrollYProgress);
    // console.log(width);
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // console.log(num);
    return (
        <ReactLenis root>
            <div ref={ref} className=" bg-black pt-[30%] mobile:pt-0 w-full h-4vh mobile:items-start relative flex ">
                {/* text */}
                <motion.div
                    style={{ x }}
                    className=' bg-[#2400FF] w-full h-screen sticky top-0 mobile:pt-[10%] rounded-tr-[1000px] mobile:rounded-tr-[150px] flex mobile:hidden mobile:flex-col gap-[15%] items-center justify-center '>
                    <motion.div style={{ opacity: divOpa }} className=" flex flex-col w-[45%] mobile:w-full h-[60%] gap-[5%] mb-[10%] ">
                        <motion.p style={{ opacity: textOpa, x: titleX }} className=" text-white text-[2.5vmax] mobile:text-[4vmin] mobile:pl-[5%] leading-tight">Mapping the Future of Immersive Experiences</motion.p>
                        <div className=' overflow-hidden relative flex flex-col items-start pt-[4%] w-full mobile:w-full h-full font-bold leading-[1.15]'>
                            <div className=' drop-shadow-[0_45px_7px_#2400FF] w-full h-[15%] bg-[#2400FF] absolute top-[-20%] mobile:top-[-25%] opacity-100 z-20'></div>
                            <motion.div
                                style={{ y: textY, opacity: textOpa }}
                                className=' text-white ml-[5%] font-light text-[1.2vmax] mobile:text-[2.5vmin] whitespace-pre-wrap'>

                                Q1 2024<br />Complete core technology research and platform architecture design. Begin development of IMEX token smart contracts.<br />

                                <br />Q2 2024<br />Develop prototypes for full 3D content viewing and motion-sickness-free stereoscopic technology. Start initial development of content creation tools.<br />

                                <br />Q3 2024<br />Prepare for beta testing and recruit initial test users. Complete the blockchain-based payment system.<br />

                                <br />Q4 2024<br />Begin beta testing and collect user feedback. Launch IMEX token sales  (ICO/IDO).<br />
                                <br />Q1 2025: Officially launch the ImmersiX platform and initiate major marketing campaigns. Establish the first partnerships and begin content distribution.<br />
                                <br />Q4 2025: Secure users and B2B customers, and expand the ecosystem. Start planning for global expansion and localization.<br />
                                <br />Beyond 2026: Continuously expand and enhance platform features. Fully e xpand into global markets and enhance B2B services.< br />
                            </motion.div>
                            <div className=' drop-shadow-[0px_-45px_7px_#2400FF] w-full h-[15%] bg-[#2400FF] absolute bottom-[-20%] mobile:bottom-[-40%] opacity-100 z-20'></div>
                        </div>
                    </motion.div>
                    {/* circle */}
                    <motion.div
                        style={{ scale: circleScale, opacity: circleOpa, rotate: circleRotate }}
                        className=' w-[15vw] h-[15vw] flex justify-center items-center bg-white rounded-full mb-[15%] mr-[10%]'>
                        <div className=" w-[85%] h-[85%] rounded-full relative ">
                            <Image src={ThirdCircle} alt="logo" fill sizes="100vw" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ x: moblieX }}
                    className=' bg-[#2400FF] w-full h-screen sticky top-0 mobile:pt-[10%] rounded-tr-[1000px] mobile:rounded-tr-[150px] hidden mobile:flex  mobile:flex-col gap-[15%] items-center justify-center '>
                    <motion.div style={{ opacity: divOpa }} className="  flex flex-col w-[45%] mobile:w-full h-[50%] gap-[5%] mb-[15%] ">
                        <motion.p style={{ opacity: textOpa, x: titleX }} className=" text-white text-[2.5vmax] mobile:text-[4vmin] mobile:pl-[5%]">Mapping the Future of Immersive Experiences</motion.p>
                        <div
                            className=' overflow-hidden relative flex flex-col items-start pt-[4%] w-full mobile:w-full h-full font-bold leading-[1.15]'>

                            <div className=' drop-shadow-[0_45px_7px_#2400FF] w-full h-[15%] bg-[#2400FF] absolute top-[-25%] mobile:top-[-30%] opacity-100 z-20'></div>
                            <motion.div
                                style={{ y: textY, opacity: textOpa }}
                                className=' text-white ml-[5%] font-light text-[1.7vmax] mobile:text-[3vmin] whitespace-pre-wrap'>

                                Q1 2024<br />Complete core technology research and platform architecture design. Begin development of IMEX token smart contracts.<br />

                                <br />Q2 2024<br />Develop prototypes for full 3D content viewing and motion-sickness-free stereoscopic technology. Start initial development of content creation tools.<br />

                                <br />Q3 2024<br />Prepare for beta testing and recruit initial test users. Complete the blockchain-based payment system.<br />

                                <br />Q4 2024<br />Begin beta testing and collect user feedback. Launch IMEX token sales  (ICO/IDO).<br />
                                <br />Q1 2025: Officially launch the ImmersiX platform and initiate major marketing campaigns. Establish the first partnerships and begin content distribution.<br />
                                <br />Q4 2025: Secure users and B2B customers, and expand the ecosystem. Start planning for global expansion and localization.<br />
                                <br />Beyond 2026: Continuously expand and enhance platform features. Fully e xpand into global markets and enhance B2B services.< br />
                            </motion.div>
                            <div className=' drop-shadow-[0px_-45px_7px_#2400FF] w-full h-[15%] bg-[#2400FF] absolute bottom-[-25%] mobile:bottom-[-30%] opacity-100 z-20'></div>
                        </div>
                    </motion.div>
                    {/* circle */}
                    <motion.div
                        style={{ scale: circleScale, opacity: circleOpa, rotate: circleRotate }}
                        className=' w-[15vw] h-[15vw] flex justify-center items-center bg-white rounded-full mb-[15%] mr-[10%]'>
                        <div className=" w-[85%] h-[85%] rounded-full relative ">
                            <Image src={ThirdCircle} alt="logo" fill sizes="100vw" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </ReactLenis>
    );
}