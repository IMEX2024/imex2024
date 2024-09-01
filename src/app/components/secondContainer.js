'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Pic from "./pic";
import { ReactLenis } from "lenis/dist/lenis-react";
import NumberMen from './number';



export default function SecondContainer() {
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [1000, 2000], [400, 100]);
    const textY = useTransform(scrollY, [2500, 3200], [700, 0]);
    const x = useTransform(scrollY, [1000, 2000], [20, 0]);
    const scale = useTransform(scrollY, [1000, 2000], [1.3, 1]);
    const textOpa = useTransform(scrollY, [2500, 3200], [0, 1]);
    const exitY = useTransform(scrollY, [3500, 4000], [0, -800]);
    const exitOpa = useTransform(scrollY, [3600, 3800], [1, 0]);
    const picExitY = useTransform(scrollY, [3700, 4100], [0, -800]);
    const picExitOpa = useTransform(scrollY, [3800, 4100], [1, 0]);

    return (
        <ReactLenis root>
            <div className=" bg-[#fffbf2] w-full h-2.5vh min-h-[65rem] items-center relative flex flex-col">
                <div className=" bg-[#fffbf2] w-full h-screen items-center flex flex-col gap-[5%] justify-center sticky top-0 overflow-hidden ">
                    <div className='w-full flex justify-center items-center gap-[5%]'>
                        <motion.div
                            style={{ y: exitY, opacity: exitOpa }}
                            className='  w-[50%] h-[50vmin] flex relative  '>
                            <NumberMen firstNum={1} secondNum={9} start={1500} end={3100} xStart={1150} xEnd={0}
                                opaStartTime={3100} opaEndTime={3500} opaStart={1} opaEnd={0}
                                scaleStartTime={3100} scaleEndTime={3500} scaleStart={1.2} scaleEnd={2.5} />
                            <NumberMen firstNum={8} secondNum={6} start={1500} end={2900} xStart={1450} xEnd={0}
                                opaStartTime={3000} opaEndTime={3400} opaStart={0} opaEnd={1}
                                scaleStartTime={3100} scaleEndTime={3500} scaleStart={0.5} scaleEnd={1.2} />
                        </motion.div>
                        <motion.div 
                        style={{ y:picExitY, opacity:picExitOpa }}
                        className='w-[36.2%] h-[60vmin] '>
                            <motion.div
                                style={{ y, x, scale }}
                                className="w-full h-full bg-white rounded-3xl overflow-hidden ">
                                <Pic />
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div
                        style={{ y: textY, opacity: textOpa }}
                        className=' w-full h-[500px] flex place-content-between items-center px-10 '>
                        <span className='text-[2.7vmin] flex flex-col'>
                            <span>trajetória</span>
                            <span>começou em 1986.</span>
                        </span>
                        <p className='bg-[#fffbf2] w-[40%] font-semibold leading-[1.15em] text-[3.3vmin]'>
                            Desde então, desenvolvemos mais de 250 milhões de metros quadrados em diversos empreendimentos
                            de grande relevância e sucesso no Brasil e no exterior.
                        </p>
                    </motion.div>
                </div>
            </div>
        </ReactLenis>
    );
}