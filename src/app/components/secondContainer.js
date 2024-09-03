'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Pic from "./pic";
import { ReactLenis } from "lenis/dist/lenis-react";
import NumberMen from './number';
import { useRef } from 'react';



export default function SecondContainer() {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],
    });


    const y = useTransform(scrollYProgress, [0.07, 0.3], [400, 100]);
    const x = useTransform(scrollYProgress, [0.07, 0.3], [20, 0]);
    const scale = useTransform(scrollYProgress, [0.07, 0.3], [1.3, 1]);
    const textY = useTransform(scrollYProgress, [0.44, 0.7], [700, 0]);
    const textOpa = useTransform(scrollYProgress, [0.44, 0.7], [0, 1]);
    const exitY = useTransform(scrollYProgress, [0.7, 0.85], [0, -800]);
    const exitOpa = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
    const picExitY = useTransform(scrollYProgress, [0.65, 0.8], [0, -800]);
    const picExitOpa = useTransform(scrollYProgress, [0.65, 0.8], [1, 0]);

    // console.log(scrollYProgress);

    return (
        <ReactLenis root>
            <div ref={ref} className=" bg-[#fffbf2] w-full h-2.5vh items-center relative flex flex-col">
                <div className=" bg-[#fffbf2] w-full h-screen items-center flex flex-col gap-[5%] justify-center sticky top-0 overflow-hidden ">
                    <div className='w-full flex justify-center items-center gap-[5%]'>
                        <motion.div
                            style={{ y: exitY, opacity: exitOpa }}
                            className='  w-[50%] h-[50vmin] flex relative  '>
                            <NumberMen firstNum={1} secondNum={9} start={0.129} end={0.21} xStart={1000} xEnd={0}
                                opaStartTime={0.22} opaEndTime={0.3} opaStart={1} opaEnd={0}
                                scaleStartTime={0.22} scaleEndTime={0.3} scaleStart={1.2} scaleEnd={2.5} />
                            <NumberMen firstNum={8} secondNum={6} start={0.13} end={0.21} xStart={1450} xEnd={0}
                                opaStartTime={0.22} opaEndTime={0.3} opaStart={0} opaEnd={1}
                                scaleStartTime={0.22} scaleEndTime={0.3} scaleStart={0.5} scaleEnd={1.2} />
                        </motion.div>
                        <motion.div 
                        style={{ y:picExitY, opacity:picExitOpa }}
                        className='w-[35vmax] h-[35vmax] '>
                            <motion.div
                                style={{ y, x, scale }}
                                className="w-full h-full bg-white rounded-3xl overflow-hidden ">
                                <Pic />
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div
                        style={{ y: textY, opacity: textOpa }}
                        className=' w-full h-[500px] flex place-content-between items-center px-[5%] '>
                        <span className='text-[2.7vmin] flex flex-col text-black'>
                            <span>trajetória</span>
                            <span>começou em 1986.</span>
                        </span>
                        <p className='bg-[#fffbf2] text-black w-[40%] moblie:w-[55%] font-semibold leading-[1.15em] text-[3.3vmin]'>
                            Desde então, desenvolvemos mais de 250 milhões de metros quadrados em diversos empreendimentos
                            de grande relevância e sucesso no Brasil e no exterior.
                        </p>
                    </motion.div>
                </div>
            </div>
        </ReactLenis>
    );
}