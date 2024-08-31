import FirstContainer from "./components/firstContainer";
import Pic from "./components/pic";
import SecondContainer from "./components/secondContainer";


export default function Home() {
  return (
    <main className=" bg-[#fffbf2] flex min-h-screen flex-col items-center">
      <FirstContainer />
      <SecondContainer />
      <div className="bg-pink-400 h-screen w-full">
      </div>
    </main>
  );
}
