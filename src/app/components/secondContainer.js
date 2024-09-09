'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Pic from "./pic";
import { ReactLenis } from "lenis/dist/lenis-react";
import NumberMen from './number';
import { useRef, useState } from 'react';



export default function SecondContainer() {
    const [textOn, setTextOn] = useState(true);
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],
    });


    const y = useTransform(scrollYProgress, [0.07, 0.3], [400, 100]);
    const x = useTransform(scrollYProgress, [0.07, 0.3], [20, 0]);
    const moblieX =useTransform(scrollYProgress, [0.07, 0.3], [0, 5]);
    const scale = useTransform(scrollYProgress, [0.07, 0.3], [1.3, 1]);
    const textY = useTransform(scrollYProgress, [0.44, 0.7], [700, 0]);
    const textOpa = useTransform(scrollYProgress, [0.44, 0.7], [0, 1]);
    const exitY = useTransform(scrollYProgress, [0.7, 0.85], [0, -800]);
    const mobileExitY = useTransform(scrollYProgress, [0.7, 1], [0, -200]);
    const exitOpa = useTransform(scrollYProgress, [0.74, 0.9], [1, 0]);
    const picExitY = useTransform(scrollYProgress, [0.74, 1], [0, -800]);
    const picExitOpa = useTransform(scrollYProgress, [0.75, 0.8], [1, 0]);

    console.log(scrollYProgress);

    const controlText = () => {
        setTextOn(!textOn);
    }

    return (
        <ReactLenis root>
            <div ref={ref} className=" bg-black w-full h-2vh items-center relative flex flex-col">
                <div className=" bg-black w-full h-screen items-center flex flex-col gap-[5%] justify-center sticky top-0 overflow-hidden ">
                    <div className='w-full flex mobile:flex-col mobile:gap-[15%] justify-center items-center gap-[5%]'>
                        {/* normal */}
                        <motion.div
                            style={{ opacity: exitOpa }}
                            className='  w-[50%] h-[50vmin] flex relative mobile:hidden  '>
                            <NumberMen firstNum={'Experience'} secondNum={''} start={0.08} end={0.12} xStart={1000} xEnd={100}
                                opaStartTime={0.13} opaEndTime={0.16} opaRealEndTime={0.17} opaStart={1} opaEnd={0} opaRealEnd={0}
                                scaleStartTime={0.13} scaleEndTime={0.16} scaleStart={1} scaleEnd={2.5} />
                            <NumberMen firstNum={'the Difference'} secondNum={'with'} start={0.08} end={0.12} xStart={1000} xEnd={0}
                                opaStartTime={0.15} opaEndTime={0.18} opaRealEndTime={0.2} opaStart={0} opaEnd={1} opaRealEnd={0}
                                scaleStartTime={0.16} scaleEndTime={0.19} scaleStart={0.7} scaleEnd={1.1} />
                            <NumberMen firstNum={'Advanced AR'} secondNum={''} start={0.08} end={0.12} xStart={1000} xEnd={0}
                                opaStartTime={0.18} opaEndTime={0.22} opaRealEndTime={0.23} opaStart={0} opaEnd={1} opaRealEnd={1}
                                scaleStartTime={0.19} scaleEndTime={0.22} scaleStart={0.7} scaleEnd={2} />
                        </motion.div>
                        {/* mobile */}
                        <motion.div
                            style={{ x:moblieX, y: mobileExitY, opacity: exitOpa }}
                            className='  w-[50%] mobile:w-full h-[50vmin] hidden mobile:flex relative  '>
                            <NumberMen firstNum={'Experience'} secondNum={''} start={0.08} end={0.12} xStart={1000} xEnd={0}
                                opaStartTime={0.13} opaEndTime={0.16} opaRealEndTime={0.17} opaStart={1} opaEnd={0} opaRealEnd={0}
                                scaleStartTime={0.13} scaleEndTime={0.16} scaleStart={1} scaleEnd={2.5} />
                            <NumberMen firstNum={'the Difference'} secondNum={'with'} start={0.08} end={0.12} xStart={1000} xEnd={0}
                                opaStartTime={0.15} opaEndTime={0.18} opaRealEndTime={0.2} opaStart={0} opaEnd={1} opaRealEnd={0}
                                scaleStartTime={0.16} scaleEndTime={0.19} scaleStart={0.5} scaleEnd={2} />
                            <NumberMen firstNum={'Advanced AR'} secondNum={''} start={0.08} end={0.12} xStart={1000} xEnd={0}
                                opaStartTime={0.18} opaEndTime={0.22} opaRealEndTime={0.23} opaStart={0} opaEnd={1} opaRealEnd={1}
                                scaleStartTime={0.19} scaleEndTime={0.22} scaleStart={1} scaleEnd={2.5} />
                        </motion.div>
                        {/* picture */}
                        <motion.div
                            style={{ y: picExitY, opacity: picExitOpa }}
                            className='w-[35vmax] h-[35vmax] border-[1px] border-black'>
                            <motion.div
                                style={{ y, x, scale }}
                                className="w-full h-full bg-black rounded-3xl overflow-hidden relative ">
                                <Pic />
                                <div className={`bg-black ${textOn ? 'opacity-40' : 'opacity-0'} duration-500 ease-in-out w-full h-full absolute top-0`}></div>
                                <div onClick={controlText} className='absolute top-0 w-full h-full text-center flex justify-center items-center '>
                                    <p className={` text-white w-full font-normal font-AppleFont leading-[1.15em] text-[3.1vmin] duration-700 ease-in-out ${textOn === true ? 'opacity-100' : 'opacity-0'} `}>
                                    We provide the ultimate user experience, perfected with high-quality 3D rendering and motion-sickness-free stereoscopic technology. 
                                    Each piece of content immerses you with indistinguishable clarity and responsiveness from reality.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                    {/* optional text */}
                    {/* <motion.div
                        style={{ y: textY, opacity: textOpa }}
                        className=' w-full h-[500px] flex place-content-between items-center px-[5%] '>
                        <span className='text-[2.7vmin] flex flex-col text-white'>
                            <span>trajetória</span>
                            <span>começou em 1986.</span>
                        </span>
                    </motion.div> */}
                </div>
            </div>
        </ReactLenis>
    );
}