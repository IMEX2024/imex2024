'use client'
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import nikeLogo from "/public/nikelogo.png";
import slogan from "/public/slogan.png";

export default function Header() {
    const [position, setPosition] = useState(0);
    const [padding, setPadding] = useState(6);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [position]);

    const handleScroll = useCallback(() => {
        const moving = window.scrollY;
        setPosition(moving);
        setPadding(moving > 0 ? 3 : 6);
    }, [position]);


    return (
        <header className=" bg-[#fffbf2] w-full fixed z-50 " >
            <div className={` px-4 pt-${padding} duration-[400ms] flex items-center place-content-between w-full h-full bg-[#fffbf2] text-[10vmin] leading-[120%]`}>
                <Image src={nikeLogo} alt="logo" width={120} />
                <Image src={slogan} alt="slogan" width={200} />
                <div className=" h-[4vmin] font-bold flex gap-3 justify-center items-center" >
                    <div className=" bg-black rounded-full w-4 h-4"></div>
                    <p className=" text-[20px]">MENU</p>
                </div>
            </div>
        </header>
    );
}
