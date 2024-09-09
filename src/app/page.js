'use client'

import FirstContainer from "./components/firstContainer";
import FourthContainer from "./components/fourthContainer";
import Header from "./components/header";
import SecondContainer from "./components/secondContainer";
import ThirdContainer from "./components/thirdContainer";
import ThirdDotSecondContainer from "./components/thirdDotSecondContainer";


export default function Home() {
  
  return (
    <main  className=" bg-black flex min-h-screen flex-col items-center">
      <Header />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <ThirdDotSecondContainer />
      <FourthContainer />
    </main>
  );
}
