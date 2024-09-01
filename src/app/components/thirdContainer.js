'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis } from "lenis/dist/lenis-react";


export default function ThirdContainer() {
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
            <div className=" bg-[#fffbf2] pt-[800px] w-full h-4vh min-h-[65rem] items-center relative flex flex-col ">
                <motion.div
                    style={{ x }}
                    className=' bg-[#212121] w-full h-screen sticky top-0 rounded-tr-[550px] flex gap-[15%] items-center justify-center '>
                    <motion.div 
                    style={{ opacity:divOpa }}
                    className=' overflow-hidden relative flex flex-col items-start pt-[2%] w-[45%] h-[30%] mb-[15%] text-[4.2vmin] font-bold leading-[1.15]'>
                        <div className=' drop-shadow-[0_45px_10px_#212121] w-full h-[15%] bg-[#212121] absolute top-[-15%] opacity-100 z-20'></div>
                        <motion.p
                            style={{ y: textY, opacity:textOpa }}
                            className=' text-white ml-3'>A imersão profunda nos desafios e a soma
                            de expertises são o ponto de partida para criar
                            conceitos claros, impacto real e resultados consistentes.
                            Colaboramos com quem gera valor de maneira ampla e profunda, formando parcerias de longo
                            prazo, negócios de alto impacto e rendimento, e lugares que melhoram o nosso futuro.
                            <div className=' font-semibold relative mt-10 w-[35%] pr-3 h-[5%] leading-[180%] text-black bg-[#FFFBF2] text-[1.8vmin] text-center rounded-full'>
                                CONHECA A DEF
                                <div className='rounded-full w-[10%] h-[60%] bg-black absolute top-[50%] translate-y-[-50%] right-[5%]'></div>
                            </div>
                        </motion.p>
                        <div className=' drop-shadow-[0px_-45px_10px_#212121] w-full h-[15%] bg-[#212121] absolute bottom-[-15%] opacity-100 z-20'></div>
                    </motion.div>
                    <motion.div
                        style={{ scale: circleScale, opacity: circleOpa, x:circleX }}
                        className=' w-[15%] h-[20%] bg-white rounded-full mb-[10%] mr-[10%] '>

                    </motion.div>
                </motion.div>
            </div>
        </ReactLenis>
    );
}