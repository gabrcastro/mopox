import Image from "next/image";
import FooterComponent from "./components/footer/footer";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between bg-zinc-950 bg-pattern">
      <div className="flex flex-row w-full p-5 justify-between items-center bg-zinc-950 border-b-[1px] border-b-zinc-700">
        <a href="/" className="text-zinc-300 font-medium text-xl">
          mopox
        </a>
      </div>

      <div className="w-[90%] flex flex-col items-center justify-center mt-32">
        <p className="text-2xl md:text-5xl text-center font-bold bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">
          Aumente sua produtividade, organizando suas tarefas com o mopox
        </p>

        <a
          href="/app"
          className="hover:brightness-125 rounded-full px-6 py-4 mt-10 shadow-shape bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-950 "
        >
          <span className="text-zinc-300 text-lg font-medium">
            Ir para mopox
          </span>
        </a>
      </div>

      <div className="relative my-20 flex items-center w-[80%] md:w-[70%]  ">
        <img src={"/images/app.png"} alt="" />
        {/* <img
          src={"/images/mobile.jpeg"}
          alt=""
          className="absolute right-0 bottom-0 -mr-20 -mb-20 h-[90%] justify-center rounded-xl border-[.5px] border-zinc-800 shadow-shape"
        /> */}
      </div>

      <FooterComponent />
    </div>
  );
}
