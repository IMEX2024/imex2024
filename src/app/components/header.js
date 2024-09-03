'use client'
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import nikeLogo from "/public/nikelogo.png";
import slogan from "/public/slogan.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
    const [position, setPosition] = useState(0);
    const [padding, setPadding] = useState(6);
    const { scrollY, scrollYProgress } = useScroll();

    const backgroundColor = useTransform(scrollYProgress, [0.88, 0.92], ['rgba(255,251,242,1)', 'rgba(33,33,33,1)']);
    const circleColor = useTransform(scrollYProgress, [0.88, 0.92], ['rgba(0,0,0,1)', 'rgba(255,255,255,1)']);
    const textColor = useTransform(scrollYProgress, [0.88, 0.92], ['rgba(0,0,0,1)', 'rgba(255,255,255,1)']);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [position]);

    const handleScroll = useCallback(() => {
        const moving = window.scrollY;
        setPosition(moving);

    }, [position]);

    // console.log(scrollYProgress);

    return (
        <header className=" w-full fixed z-[99] " >
            <motion.div style={{backgroundColor}} className={` px-4 ${position > 0 ? 'pt-2' : 'pt-10'} bg-[#fffbf2] duration-[400ms] flex items-center place-content-between w-full h-full text-[10vmin] leading-[120%]`}>
                <Image src={nikeLogo} alt="logo" priority width={120} />
                {/* <Image src={slogan} alt="slogan" width={200} /> */}
                <div className=" h-[4vmin] font-bold flex gap-3 justify-center items-center" >
                    <motion.div style={{backgroundColor:circleColor}} className=" bg-black rounded-full w-4 h-4 mobile:w-2 mobile:h-2 "></motion.div>
                    <motion.p style={{color:textColor}} className=" text-black text-[20px] mobile:text-[3vmin]">MENU</motion.p>
                </div>
            </motion.div>
        </header>
    );
}
