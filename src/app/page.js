import FirstContainer from "./components/firstContainer";
import FourthContainer from "./components/fourthContainer";
import Pic from "./components/pic";
import SecondContainer from "./components/secondContainer";
import ThirdContainer from "./components/thirdContainer";


export default function Home() {
  return (
    <main className=" bg-[#fffbf2] flex min-h-screen flex-col items-center">
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <div className="w-full h-screen bg-blue-500"></div>
    </main>
  );
}
