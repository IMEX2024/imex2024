'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Pic from "./pic";
import { ReactLenis } from "lenis/dist/lenis-react";
import NumberMen from './number';



export default function SecondContainer() {
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [1000, 2000], [200, 0]);
    const x = useTransform(scrollY, [1000, 2000], [20, 0]);
    const scale = useTransform(scrollY, [1000, 2000], [1.3, 1]);



    return (
        <ReactLenis root>
            <div className=" bg-[#fffbf2] w-full h-3vh min-h-[65rem] items-center relative">
                <div className=" bg-[#fffbf2] w-full h-screen items-center flex gap-[5%] justify-center sticky top-0 overflow-hidden ">
                    <div className='  w-[50%] h-[70min] flex  '>
                        <NumberMen firstNum={1} secondNum={9} start={2500} end={3100} xStart={2000} xEnd={0} opaStart={1} opaEnd={0} scaleStart={1} scaleEnd={1.7} />
                        <NumberMen firstNum={8} secondNum={6} start={2700} end={3200} xStart={2000} xEnd={-700} opaStart={0} opaEnd={1} scaleStart={1} scaleEnd={1} />
                    </div>
                    <motion.div
                        style={{ y, x, scale }}
                        className="w-[40%] h-[60vmin] bg-white rounded-3xl overflow-hidden ">
                        <Pic />
                    </motion.div>
                </div>
            </div>
        </ReactLenis>
    );
}