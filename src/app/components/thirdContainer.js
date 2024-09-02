'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef, useState } from 'react';

export default function ThirdContainer() {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth || 0 : 0);
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: ref,

    });

    const textY = useTransform(scrollYProgress, [0.51, 0.8], [0, -1000]);
    const circleX = useTransform(scrollYProgress, [0.75, 0.95], ['0%', `-${width/4}%`]);
    const textOpa = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    const x = useTransform(scrollYProgress, [0.005, 0.11], [-750, 0]);
    const circleScale = useTransform(scrollYProgress, [0.1, 0.5], [0.2, 2]);
    const circleOpa = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    const divOpa = useTransform(scrollYProgress, [0.66, 0.78], [1, 0]);

    console.log(scrollYProgress);

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
   

    return (
        <ReactLenis root>
            <div ref={ref} className=" bg-red-300 pt-[30%] w-full h-2.5vh items-center relative flex flex-col ">
                <motion.div
                    style={{ x }}
                    className=' bg-[#212121] w-full h-screen sticky top-0 rounded-tr-[550px] flex gap-[15%] items-center justify-center '>
                    <motion.div
                        style={{ opacity: divOpa }}
                        className=' overflow-hidden relative flex flex-col items-start pt-[2%] w-[45%] h-[30%] mb-[15%] text-[4rem] font-bold leading-[1.15]'>
                        <div className=' drop-shadow-[0_45px_10px_#212121] w-full h-[15%] bg-[#212121] absolute top-[-15%] opacity-100 z-20'></div>
                        <motion.div
                            style={{ y: textY, opacity: textOpa }}
                            className=' text-white ml-3'>A imersão profunda nos desafios e a soma
                            de expertises são o ponto de partida para criar
                            conceitos claros, impacto real e resultados consistentes.
                            Colaboramos com quem gera valor de maneira ampla e profunda, formando parcerias de longo
                            prazo, negócios de alto impacto e rendimento, e lugares que melhoram o nosso futuro.
                            <div className=' font-semibold relative mt-10 w-[35%] pr-3 leading-[180%] text-black bg-[#FFFBF2] text-[1.8vmin] text-center rounded-full'>
                                CONHECA A DEF
                                <div className='rounded-full w-[2rem] h-[2rem] bg-black absolute top-[50%] translate-y-[-50%] right-[5%]'></div>
                            </div>
                        </motion.div>
                        <div className=' drop-shadow-[0px_-45px_10px_#212121] w-full h-[15%] bg-[#212121] absolute bottom-[-15%] opacity-100 z-20'></div>
                    </motion.div>
                    <motion.div
                        style={{ scale: circleScale, opacity: circleOpa, x: circleX }}
                        className=' w-[15rem] h-[15rem] bg-white rounded-full mb-[10%] mr-[10%] '>
                    </motion.div>
                </motion.div>
            </div>
        </ReactLenis>
    );
}