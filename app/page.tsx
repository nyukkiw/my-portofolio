"use client";
import { CometCard } from "@/components/ui/comet-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Roboto } from "next/font/google";
import {useState} from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FocusCards } from "@/components/ui/focus-cards";
import Link from "next/link";


const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});


export default function Home() {
  return (
   <>
   <div id="Home" className="bg-auto md:bg-contain">
      
      <TypewriterEffectSmoothDemo/>
      <div className="border-b-2 border-gray-600 w-5/12 mx-auto mt-2"></div>
    </div>
    <h1 className="text-center text-white text-3xl font-bold py-10">About</h1>
    
    <div id="About" className="grid grid-cols-1 sm:grid-cols-2 scroll-m-35">   
        <div className="flex items-center text-center justify-center m-8">
          <CometCardDemo/>
        </div>
        <div className="py-10 p-5 lg:p-20 text-white">
            <p className="mb-5">
              I'm <b>Valentino Banyu </b>, a passionate fullstack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences and robust server-side solutions. My skill set includes proficiency in JavaScript, React, Node.js, PHP, Laravel  and database management. I thrive on solving complex problems and continuously learning new technologies to stay at the forefront of the ever-evolving tech landscape. Let's connect and build something amazing together!
            </p>
            <footer>
              Let's see what projects I have made !
            </footer>

        </div>
  </div>

  
  
      <div className="border-b-2 border-gray-600 w-5/12 mx-auto mt-2"></div>

      <h1  id="Certificate" className="text-center scroll-m-15 text-white text-3xl font-bold py-6">My Certificate</h1>
      <div className="m-8">
        <FocusCardsDemo/>
      </div>
      <div className="border-b-2 border-gray-600 w-5/12 mx-auto mt-2"></div>


      <h1 id="Projects" className="text-center scroll-m-15 text-white text-3xl font-bold py-6">Projects</h1>
    <div  className="grid grid-cols-1 lg:grid-cols-3 gap-5" >

      <div><ThreeDCardDemo title="Codeflix" description="Website that streams movies and series. With Laravel, Midtrans as payment gateway, and MySQL database" imageUrl="/img/codeflix.png" /></div>
      <div><ThreeDCardDemo title="HRIS (Human resource information system)" description="Website that manage employees. With Laravel, Mazer, Brezee, and MySQL database" imageUrl="/img/mazer.png" /></div>
      <div><ThreeDCardDemo title="Android app" description="Android app for mobile devices that manage driving course. With KOTLIN and Supabase" imageUrl="/img/leadrive.png" /></div>
    </div>
    
    <div className="border-b-2 border-gray-600 w-5/12 mx-auto mt-2"></div>
    <h1 id="Contact" className="text-center scroll-m-15 text-white text-3xl font-bold py-6">Contact</h1>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 place-items-center">
      <div>
        <a href="https://github.com/nyukkiw" className="group w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:scale-110 focus:outline-none">
      <img src="/img/Contact/github.svg"   className="w-8 h-8 invert brightness-0 transition-all duration-300 group-hover:scale-110" alt="" />
      </a>
      <span className="text-white">Github</span>
      </div>
     
      <div>
          <a href="https://www.linkedin.com/in/valentino-banyu-756752311/" className="group w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:scale-110 focus:outline-none">
      <img src="/img/Contact/linkedin.svg"   className="w-8 h-8 invert brightness-0 transition-all duration-300 group-hover:scale-110" alt="" />
      </a>  
        <span className="text-white">LinkedIn</span>
      </div>

      <div>
        <a href="https://www.instagram.com/vlnbanyu?utm_source=qr&igsh=dTFtZnM4dm9oNHpt" className="group w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:scale-110 focus:outline-none">
      <img src="/img/Contact/instagram.svg"   className="w-8 h-8 invert brightness-0 transition-all duration-300 group-hover:scale-110" alt="" />
      </a>
        <span className="text-white">Instagram</span>
      </div>
      <div>
              <EmailCopyButton/>
      </div>  
    </div>
    </div>
    


  </>
  );
}



export function CometCardDemo() {
  return (
    <CometCard>
      <div className="flex justify-center items-center">
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
              className="absolute inset-0 h-full w-full rounded-3xl bg-[#000000] object-cover contrast-100"
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
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "awesome",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "apps",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "with",
      className: "text-blue-500 dark:text-blue-500",

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
        Welcome to Nyu website as fullstack developer
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <a href="#Contact" className=" hover:text-black w-40 h-10 rounded-xl bg-blue-500 border dark:border-white border-transparent text-white text-sm flex items-center justify-center">
            Get in touch 
          </a>
      </div>
    </div>
  );
}



export function ThreeDCardDemo({
  title = "",
  description = "",
  imageUrl = "",

}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-neutral-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          {title || "project title"}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description || "This is project description"}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="project picture"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          
          
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Developed a Human Resource Information System (HRIS)",
      src: "/img/Certificate/HRIS.jpg",
    },
    {
      title: "Cybersecurity Basic Certificate",
      src: "/img/Certificate/CybersecurityBasic.jpg",
    },
    {
      title: "Developed a Dynamic Web Application using Express and EJS",
      src: "/img/Certificate/DynamicWeb-express-ejs.jpg",
    },
    {
      title: "Developed a Fullstack Application with VUE, MONGO, EXPRESS, NODE",
      src: "/img/Certificate/fullstack-VUE-MONGO-EXPRESS-NODE.jpg",
    },
    {
      title: "Developed a Case Study Netflix using Laravel",
      src: "/img/Certificate/laravelcasestudynetflix.jpg",
    },
    {
      title: "Lesson integrating MongoDB with JavaScript",
      src: "/img/Certificate/mongoDBwithjavascript.jpg",
    },
    {
      title: "Lesson MySQL fundamental",
      src: "/img/Certificate/MySQL.jpg",
    },
   
  ];
 
  return <FocusCards cards={cards} />;
}


export function EmailCopyButton() {
  const [copied, setCopied] = useState(false);
  const email = "valentinobanyu0@gmail.com"; // Ganti dengan email Anda

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset setelah 2 detik
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback untuk browser lama
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="">
      <button
        onClick={copyEmail}
        className="group w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:scale-110 focus:outline-none"
        aria-label="Copy email address"
      >
        <img 
          src="/img/Contact/mail.svg" 
          alt="Email" 
          className="w-8 h-8 invert group-hover:invert-0"
        />
      </button>
      {/* <p className="text-white text-sm mt-2">
        {copied ? 'Copied!' : 'Email'}
      </p> */}

      <span className="text-white">{copied ? 'Copied!' : 'Email'}</span>
    </div>
  );
}


