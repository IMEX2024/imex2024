'use client'
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import Logo from "/public/Logo.png";

export default function Footer() {
    const defRef = useRef();
    const isInView = useInView(defRef);

    // const svgStyle = {
    //     start: { y: 300 },
    //     end: { y: 0, transition: { duration: 0.5, delay: 0.2 } },
    // };
    // console.log(isInView);

    return (
        <footer className=" w-full h-full flex flex-col " >
            {/* <div className=" bg-[#fffbf2] w-full h-0.2vh px-[5%] rounded-t-2xl " >
                <div className=" w-full h-[65%] flex place-content-between items-center font-bold text-[1.2vmax] mobile:text-[1.2vmin]">
                    <p>DEF PROJETOS</p>
                    <p>URBANISMO + ARQUITETURA</p>
                    <div className=" w-[25%] flex gap-[5%] place-content-between">
                        <p>SOBRE</p>
                        <p>PROJETOS</p>
                        <p>CANTATO</p>
                    </div>
                </div>
                <div className=" w-full h-[35%] flex items-center justify-end 
                font-bold text-[1vmax] mobile:text-[1vmin] border-b-2 border-[rgba(0,0,0,0.1)]">
                    PRIVACIDADE & TERMOS
                </div>
            </div> */}
            <div className=" bg-[#2400FF] w-full h-0.2vh flex items-center place-content-between px-[5%] 
            text-[1.2vmax] mobile:text-[1.2vmin] font-bold rounded-t-2xl">
                <p>CONTATO@DEFPROJETOS.COM</p>
                <div className=" flex flex-col ">
                    <p>RJ +55 21 25416687</p>
                    <p>SP +55 11 3544 3000</p>
                </div>
                <div className="flex flex-col items-end w-[36%]">
                    <p>DESDE 1986 @ TODOS OS DIRETTOS RESERVADOS</p>
                    <div className=" w-full flex justify-end gap-[3%] font-semibold text-[0.75vmax] mobile:text-[0.75vmin]">
                        <p>BRANDING: WHERE</p>
                        <p>DESIGN: JARCOSWORK</p>
                        <p>BRANDING: PROGRAMARORIO</p>
                    </div>
                </div>
            </div>
            <div ref={defRef} className=" bg-[#2400FF] w-full h-0.8vh flex justify-center items-center px-[5%]
            text-[55vmin] leading-none">
                <div className="w-full mobile:h-[30%] h-[50%] relative">
                    <Image src={Logo} fill priority sizes="100vw, 100vw" />
                </div>
                {/* <AnimatePresence>
                    {isInView &&
                        <div className=" w-full flex justify-center gap-[1%]">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                                <motion.path
                                    initial={{
                                        fill: "rgba(255,251,242,1)", //색상과 투명도
                                        pathLength: 0, // 로고가 그려진 정도
                                        opacity: 0,
                                        // transform: "translate(0px, 200px)",
                                    }}
                                    animate={{
                                        fill: "rgba(0, 0, 0, 1)",
                                        pathLength: 1,
                                        opacity: 1,
                                        // transform: "translate(0px, 0px)",
                                    }}
                                    exit={{
                                        fill: "rgba(0, 0, 0, 1)",
                                        pathLength: 1,
                                        opacity: 1,
                                        // transform: "translate(0px, 0px)",
                                    }}
                                    transition={{
                                        // default: { duration: 3 }, // 모든 속성에 적용
                                        // fill: { duration: 2, delay: 1 }, // fill에만 
                                        duration: 1.5,
                                        ease: "easeInOut",
                                        delay: 1,
                                        // repeat: 1,
                                        // repeatType: "reverse",
                                        // repeatDelay: 1,
                                    }}
                                    strokeWidth={0.1} // 테두리 두께
                                    stroke="black" // 로고의 테두리
                                    d="m21.5,0H2.5C1.121,0,0,1.122,0,2.5v21.5h24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5ZM12.071,4h-5.071c-1.103,0-2,.897-2,2v12c0,1.103.897,2,2,2h5.071c3.82,0,6.929-3.108,6.929-6.929v-2.143c0-3.82-3.108-6.929-6.929-6.929Zm5.929,9.071c0,3.269-2.659,5.929-5.929,5.929h-5.071c-.552,0-1-.449-1-1V6c0-.551.448-1,1-1h5.071c3.27,0,5.929,2.66,5.929,5.929v2.143Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                                <motion.path
                                    initial={{
                                        fill: "rgba(255,251,242,1)", //색상과 투명도
                                        pathLength: 0, // 로고가 그려진 정도
                                        opacity: 0,
                                        // transform: "translate(0px, 200px)",
                                    }}
                                    animate={{
                                        fill: "rgba(0, 0, 0, 1)",
                                        pathLength: 1,
                                        opacity: 1,
                                        // transform: "translate(0px, 0px)",
                                    }}
                                    exit={{
                                        fill: "rgba(0, 0, 0, 1)",
                                        pathLength: 1,
                                        opacity: 1,
                                        // transform: "translate(0px, 0px)",
                                    }}
                                    transition={{
                                        // default: { duration: 3 }, // 모든 속성에 적용
                                        // fill: { duration: 2, delay: 1 }, // fill에만 
                                        duration: 1.8,
                                        ease: "easeInOut",
                                        delay: 1,
                                        // repeat: 1,
                                        // repeatType: "reverse",
                                        // repeatDelay: 1,
                                    }}
                                    strokeWidth={0.1} // 테두리 두께
                                    stroke="black" // 로고의 테두리
                                    d="m7,4h12v1H7c-.552,0-1,.449-1,1v5h10v1H6v6c0,.551.448,1,1,1h12v1H7c-1.103,0-2-.897-2-2V6c0-1.103.897-2,2-2Zm17-1.5v21.5H0V2.5C0,1.122,1.121,0,2.5,0h19c1.379,0,2.5,1.122,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v20.5h22V2.5Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                                <motion.path
                                    initial={{
                                        fill: "rgba(255,251,242,1)", //색상과 투명도
                                        pathLength: 0, // 로고가 그려진 정도
                                        opacity: 0,
                                        // transform: "translate(0px, 200px)",
                                    }}
                                    animate={{
                                        fill: "rgba(0, 0, 0, 1)",
                                        pathLength: 1,
                                        opacity: 1,
                                        // transform: "translate(0px, 0px)",
                                    }}
                                    exit={{
                                        fill: "rgba(0, 0, 0, 1)",
                                        pathLength: 1,
                                        opacity: 1,
                                        // transform: "translate(0px, 0px)",
                                    }}
                                    transition={{
                                        // default: { duration: 3 }, // 모든 속성에 적용
                                        // fill: { duration: 2, delay: 1 }, // fill에만 
                                        duration: 2.1,
                                        ease: "easeInOut",
                                        delay: 1,
                                        // repeat: 1,
                                        // repeatType: "reverse",
                                        // repeatDelay: 1,
                                    }}
                                    strokeWidth={0.1} // 테두리 두께
                                    stroke="black" // 로고의 테두리
                                    d="m21.5,0H2.5C1.122,0,0,1.122,0,2.5v21.5h24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5Zm-11-11h7v1c0,3.86-3.14,7-7,7s-7-3.14-7-7v-2c0-3.86,3.14-7,7-7,2.399,0,4.604,1.208,5.899,3.23l-.842.539c-1.11-1.734-3-2.77-5.057-2.77-3.309,0-6,2.691-6,6v2c0,3.309,2.691,6,6,6s6-2.691,6-6h-6v-1Z" />
                            </svg>
                        </div>


                    }
                </AnimatePresence> */}
            </div>
        </footer>
    );
}

