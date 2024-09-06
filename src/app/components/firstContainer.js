'use client'
import Image from "next/image";
import EffectOrigin from "/public/effect_origin.png";
import EffectLogoPic from "/public/effect_logo.png";
import EffectCirclePic from "/public/effect_circle.png";
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
        if (mainPicScale === 100) {
            return
        }

        setMainPicScale(100);
    }, [])
    console.log(mainPicScale);
    return (
        <ReactLenis root>
            <motion.div
                ref={ref}
                style={{ opacity, y }}
                className=" bg-black w-full h-screen items-center flex flex-col justify-center relative ">
                <div className=" w-full flex justify-center absolute ">
                    <div className=" z-10 w-[55vmin] h-[53vmin] rounded-full overflow-hidden relative ]">
                        <div className=" z-[6] top-[50%] translate-y-[-70%] absolute w-full h-[15vmin] flex justify-center whitespace-nowrap overflow-hidden duration-300 text-black font-bold text-[13vmin] text-center leading-[150%]">
                            <div className=" animate-textloop">&ensp;Unlocking the Future of Digital Interaction&ensp;</div>
                            <div className=" animate-textloop"> &ensp;Unlocking the Future of Digital Interaction&ensp; </div>
                            <div className=" animate-textloop"> &ensp;Unlocking the Future of Digital Interaction&ensp; </div>
                            <div className=" animate-textloop"> &ensp;Unlocking the Future of Digital Interaction&ensp; </div>
                        </div>
                    </div>
                </div>
                <div className=" mb-[3.2%] mobile:mb-[5.5%] text-white z-[3] w-full h-[15vmin] flex justify-center whitespace-nowrap overflow-hidden duration-300 absolute font-bold text-[13vmin] text-center leading-[150%]">
                    <div className=" animate-textloop">&ensp;Unlocking the Future of Digital Interaction&ensp;</div>
                    <div className=" animate-textloop"> &ensp;Unlocking the Future of Digital Interaction&ensp; </div>
                    <div className=" animate-textloop"> &ensp;Unlocking the Future of Digital Interaction&ensp; </div>
                    <div className=" animate-textloop"> &ensp;Unlocking the Future of Digital Interaction&ensp; </div>
                </div>
                <div className=" absolute flex justify-center items-center w-full h-full mobile:w-[60vmin] mobile:h-[60vmin] ">
                    <div className={` z-[5] w-[150vmin] h-full relative ${mainPicScale === 100 ? 'scale-100' : 'scale-0'} duration-300 `} >
                        <Image className=" mobile:hidden " src={EffectOrigin} alt="biglogo" priority fill sizes="100%, 100%" />
                        <Image className=" hidden mobile:block " src={EffectCirclePic} alt="logo" priority fill sizes="100%, 100%" />
                    </div>
                </div>

                <div className=" w-full flex justify-end absolute bottom-20">
                    <div className=" text-white  w-[35vmax] mobile:w-full mobile:text-center text-[1.3vmax] mobile:text-[3vmin] p-6 font-normal">
                        {/* <p>Do urbanismo à arquitetura, trabalhamos</p>
                        <p>com criatividade e pragmatismo, com foco na </p> */}
                        <p className=" font-AppleFont ">ImmersiX delivers immersive digital experiences to both
                            users and businesses through cutting-edge AR/VR technology. Here,
                            the future of the digital world begins. a future where technology connects, enhances,
                            and expands the possibilities of your digital interactions like never before.</p>
                    </div>
                </div>
                <div className=" text-white absolute bottom-3 w-full font-AppleFont text-[1.2vmax] mobile:text-[2vmin] flex items-center place-content-between px-[1.5%] pt-[2%]">
                    <p>OFFICIAL@IMMERSIX.XYZ</p>
                    <p className=" underline">+00 00 000000</p>
                    <p className=" underline">@FDASDFD</p>
                </div>

            </motion.div>
        </ReactLenis>
    );
}