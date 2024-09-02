'use client'
import Image from "next/image";
import CityPic from "/public/city.jpg";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function FirstContainer() {
    const [mainPicScale, setMainPicScale] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`],
    });

    const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

    const y = useTransform(scrollYProgress, [0.6, 1], [0, -300]);

    useEffect(() => {
        if(mainPicScale === 100) {
            return 
        }
        
        setMainPicScale(100);
    },[])

    return (
        <ReactLenis root>
            <motion.div
                ref={ref}
                style={{ opacity, y }}
                className=" bg-[#fffbf2] w-full h-screen items-center flex flex-col justify-center relative ">
                <div className=" w-full flex justify-center absolute ">
                    <div className=" z-10 w-[45vmin] rounded-full overflow-hidden relative ">
                        <div className=" z-[6] top-[50%] translate-y-[-50%] absolute w-full h-[15vmin] flex justify-center whitespace-nowrap overflow-hidden duration-300 text-white font-bold text-[13vmin] text-center leading-[150%]">
                            <div className=" animate-textloop">&ensp;URBANISMO + ARQUITETURA&ensp;</div>
                            <div className=" animate-textloop"> &ensp;URBANISMO + ARQUITETURA&ensp; </div>
                            <div className=" animate-textloop"> &ensp;URBANISMO + ARQUITETURA&ensp; </div>
                            <div className=" animate-textloop"> &ensp;URBANISMO + ARQUITETURA&ensp; </div>
                        </div>
                        <div className={` z-[5] h-[45vmin] relative ${mainPicScale === 100 ? 'scale-100' : 'scale-0'} duration-300 `} >
                            <Image src={CityPic} alt="city" priority fill sizes="100%, 100%" />
                        </div>
                    </div>
                </div>
                <div className=" text-black z-[3] w-full h-[15vmin] flex justify-center whitespace-nowrap overflow-hidden duration-300 absolute font-bold text-[13vmin] text-center leading-[150%]">
                    <div className=" animate-textloop">&ensp;URBANISMO + ARQUITETURA&ensp;</div>
                    <div className=" animate-textloop"> &ensp;URBANISMO + ARQUITETURA&ensp; </div>
                    <div className=" animate-textloop"> &ensp;URBANISMO + ARQUITETURA&ensp; </div>
                    <div className=" animate-textloop"> &ensp;URBANISMO + ARQUITETURA&ensp; </div>
                </div>

                <div

                    className=" w-full flex justify-end absolute bottom-20">
                    <div className=" text-black  w-[35%] text-[2.1vmin] p-6 font-semibold">
                        <p>Do urbanismo à arquitetura, trabalhamos</p>
                        <p>com criatividade e pragmatismo, com foco na </p>
                        <p>construção de soluções estratégicas, singulares e viáveis, que geram valor de maneira ampla e profunda.</p>
                    </div>
                </div>
                <div className=" text-black absolute bottom-3 w-full font-bold text-[20px] flex items-center place-content-between pt-[50px]">
                    <p> CONTATO@</p>
                    <p>RJ +55 21 25416887</p>
                    <p>SP +55 11 3544 3000</p>
                </div>

            </motion.div>
        </ReactLenis>
    );
}