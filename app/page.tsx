import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});


export default function Home() {
  return (
   <>
   <div className="bg-auto md:bg-contain bg-blue-300">
      <TypewriterEffectSmoothDemo />
   </div>
    <div className="grid grid-cols-2"> 
      <div className="flex items-center text-center justify-center">
        <CometCardDemo/>
      </div>
      <div className="py-15">
        <h1 className="text-3xl font-bold">
          Hello everyone 
        </h1>
        <p>
          I'm <b>Valentino Banyu </b>, a passionate fullstack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences and robust server-side solutions. My skill set includes proficiency in JavaScript, React, Node.js, PHP, Laravel  and database management. I thrive on solving complex problems and continuously learning new technologies to stay at the forefront of the ever-evolving tech landscape. Let's connect and build something amazing together!
        </p>
      </div>
   </div>
   </>
  );
}



export function CometCardDemo() {
  return (
    <CometCard>
      <div className="flex justify-center items-center my-10">
      <button
        type="button"
        className="flex w-80 cursor-pointer flex-col items-stretch rounded-3xl border-0 bg-[#1F2121] p-2 md:p-4"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-3/4 w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-3xl bg-[#000000] object-cover contrast-75"
              alt="Invite background"
              src="/img/gambar1.jpg"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">Valentino Banyu</div>
          <div className="text-xs text-gray-300 opacity-50">Fullstack Developer</div>
        </div>
      </button>
      </div>
    </CometCard>
  );
}
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Modern",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Technology",
      className: "text-blue-500 dark:text-blue-500",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-160">
      <p className="text-white text-2xl mb-4 font-extrabold">
        Fullstack developer platform for modern web applications.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Get in touch 
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          About me
        </button>
      </div>
    </div>
  );
}

