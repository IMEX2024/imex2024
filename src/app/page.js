'use client'

import FirstContainer from "./components/firstContainer";
import FourthContainer from "./components/fourthContainer";
import Header from "./components/header";
import SecondContainer from "./components/secondContainer";
import ThirdContainer from "./components/thirdContainer";


export default function Home() {
  
  return (
    <main  className=" bg-black flex min-h-screen flex-col items-center">
      <Header />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
    </main>
  );
}
