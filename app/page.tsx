"use client";
import { CometCard } from "@/components/ui/comet-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Roboto } from "next/font/google";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FocusCards } from "@/components/ui/focus-cards";
import Link from "next/link";


const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});


export default function Home() {
  const sectionOrder = ["Home", "About", "Certificate", "Projects", "Contact"] as const;
  type SectionId = (typeof sectionOrder)[number];

  const [activeSection, setActiveSection] = useState<SectionId>("Home");
  const activeSectionRef = useRef<SectionId>("Home");
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    Home: null,
    About: null,
    Certificate: null,
    Projects: null,
    Contact: null,
  });

  const getSectionElement = (id: SectionId) => {
    const heading = document.getElementById(id);
    if (heading) return heading;
    return sectionRefs.current[id];
  };

  const changeSection = (id: SectionId) => {
    const target = getSectionElement(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    }

    setActiveSection(id);
    if (window.location.hash.replace("#", "") !== id) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const syncSectionFromHash = () => {
      const hash = window.location.hash.replace("#", "") || "Home";
      if (sectionOrder.includes(hash as SectionId)) {
        const nextSection = hash as SectionId;
        setActiveSection(nextSection);
        activeSectionRef.current = nextSection;
      }
    };

    const updateActiveSectionFromScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestSection: SectionId = activeSectionRef.current;
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionOrder.forEach((id) => {
        const node = sectionRefs.current[id];
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = id;
        }
      });

      if (closestSection !== activeSectionRef.current) {
        setActiveSection(closestSection);
        activeSectionRef.current = closestSection;
        const currentHash = window.location.hash.replace("#", "");
        if (currentHash !== closestSection) {
          window.history.replaceState(null, "", `#${closestSection}`);
        }
      }
    };

    syncSectionFromHash();
    updateActiveSectionFromScroll();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        updateActiveSectionFromScroll();
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSectionFromScroll);
    window.addEventListener("hashchange", syncSectionFromHash);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSectionFromScroll);
      window.removeEventListener("hashchange", syncSectionFromHash);
    };
  }, []);

  const renderSection = (id: SectionId) => {
    const isActive = activeSection === id;

    const contentMap: Record<SectionId, ReactNode> = {
      Home: (
        <div id="Home" className="bg-auto md:bg-contain min-h-[78vh] md:min-h-[88vh] flex items-center py-8 md:py-12 mb-0 md:mb-0">
          <div className="w-full">
            <TypewriterEffectSmoothDemo />
          </div>
        </div>
      ),
      About: (
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-2 md:pt-3 pb-0">
          <h1 id="About" className="text-center text-white text-5xl md:text-6xl font-black tracking-tight pt-0 pb-2 md:pb-3 scroll-mt-[calc(var(--navbar-height)+1rem)]">About</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 scroll-m-35 items-center gap-8 lg:gap-12 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_60px_rgba(0,0,0,0.45)] mt-1 md:mt-2">
            <div className="flex items-center justify-center px-2 py-4 md:px-6 w-full">
              <CometCardDemo />
            </div>
            <div className="py-6 p-2 lg:p-10 text-white">
              <p className="mb-6 text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-justify max-w-4xl font-medium text-white/90">
                I'm <span className="font-bold text-white">Valentino Banyu</span>, a passionate fullstack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences and robust server-side solutions. My skill set includes proficiency in JavaScript, React, Node.js, PHP, Laravel and database management. I thrive on solving complex problems and continuously learning new technologies to stay at the forefront of the ever-evolving tech landscape. Let's connect and build something amazing together!
              </p>
              <footer className="text-sm md:text-base lg:text-lg text-white/70 border-t border-white/10 pt-5">
                Let's see what projects I have made!
              </footer>
            </div>
          </div>
        </div>
      ),
      Certificate: (
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-10 md:py-14">
          <div className="border-b-2 border-gray-600 w-11/12 md:w-5/12 mx-auto mt-2" />
          <h1 id="Certificate" className="text-center scroll-m-15 text-white text-5xl md:text-6xl font-black tracking-tight py-10">My Certificate</h1>
          <div className="m-4 md:m-10">
            <FocusCardsDemo />
          </div>
        </div>
      ),
      Projects: (
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-10 md:py-14">
          <div className="border-b-2 border-gray-600 w-11/12 md:w-5/12 mx-auto mt-2" />
          <h1 id="Projects" className="text-center scroll-m-15 text-white text-5xl md:text-6xl font-black tracking-tight py-10">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-10 xl:gap-12">
            <div className="h-full flex"><ThreeDCardDemo title="Codeflix" description="Website that streams movies and series. With Laravel, Midtrans as payment gateway, and MySQL database" imageUrl="/img/codeflix.png" /></div>
            <div className="h-full flex"><ThreeDCardDemo title="HRIS (Human resource information system)" description="Website that manage employees. With Laravel, Mazer, Brezee, and MySQL database" imageUrl="/img/mazer.png" /></div>
            <div className="h-full flex"><ThreeDCardDemo title="Android app" description="Android app for mobile devices that manage driving course. With KOTLIN and Supabase" imageUrl="/img/leadrive.png" /></div>
            <div className="h-full flex md:col-span-2 xl:col-span-1"><ThreeDCardDemo title="NANOConnect" description="NANOConnect is a fast, responsive full-stack web app built with React (Vite) and Supabase for seamless real-time data collaboration, securely hosted on Tencent EdgeOne Makers." imageUrl="/img/nanoconnect.png" link="https://nanoconnet.edgeone.dev/" /></div>
          </div>
        </div>
      ),
      Contact: (
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-10 md:py-14">
          <div className="border-b-2 border-gray-600 w-11/12 md:w-5/12 mx-auto mt-2" />
          <h1 id="Contact" className="text-center scroll-m-15 text-white text-5xl md:text-6xl font-black tracking-tight py-10">Contact</h1>
          <div className="max-w-4xl mx-auto py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center text-center">
              <div className="flex flex-col items-center">
                <a href="https://github.com/nyukkiw" className="group w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center transition-transform duration-300 hover:bg-[var(--accent)] hover:scale-110 focus:outline-none">
                  <img src="/img/Contact/github.svg" className="w-8 h-8 invert brightness-0 transition-transform duration-300 group-hover:scale-110" alt="" />
                </a>
                <span className="text-white mt-2 text-sm">Github</span>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://www.linkedin.com/in/valentino-banyu-756752311/" className="group w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center transition-transform duration-300 hover:bg-[var(--accent)] hover:scale-110 focus:outline-none">
                  <img src="/img/Contact/linkedin.svg" className="w-8 h-8 invert brightness-0 transition-transform duration-300 group-hover:scale-110" alt="" />
                </a>
                <span className="text-white mt-2 text-sm">LinkedIn</span>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://www.instagram.com/vlnbanyu?utm_source=qr&igsh=dTFtZnM4dm9oNHpt" className="group w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center transition-transform duration-300 hover:bg-[var(--accent)] hover:scale-110 focus:outline-none">
                  <img src="/img/Contact/instagram.svg" className="w-8 h-8 invert brightness-0 transition-transform duration-300 group-hover:scale-110" alt="" />
                </a>
                <span className="text-white mt-2 text-sm">Instagram</span>
              </div>

              <div className="flex flex-col items-center">
                <EmailCopyButton />
              </div>
            </div>
          </div>
        </div>
      ),
    };

    return (
      <div
        key={id}
        ref={(node) => {
          sectionRefs.current[id] = node;
        }}
        data-section={id}
        className={[
          "transition-[opacity,transform,filter] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          isActive
            ? "opacity-100 translate-y-0 scale-100 blur-0"
            : "opacity-30 translate-y-6 scale-[0.985] blur-[0.2px] md:opacity-40 md:translate-y-8",
        ].join(" ")}
        style={{
          willChange: "opacity, transform, filter",
          transitionDelay: isActive ? "80ms" : "0ms",
        }}
      >
        {contentMap[id]}
      </div>
    );
  };

  return (
   <>
    <div className="fixed left-0 right-0 top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-700/30">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-4 md:py-5 flex items-center justify-between">
        <div className="text-white font-extrabold text-2xl md:text-3xl">Nyukkiw&apos;s</div>
        <div className="hidden md:flex gap-10 text-white text-lg items-center">
          {sectionOrder.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => changeSection(id)}
              className={`transition-colors ${activeSection === id ? "text-white" : "text-white/70 hover:text-[var(--secondary)]"}`}
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </div>

    <div className="pt-20 md:pt-24">
      {sectionOrder.map((id) => renderSection(id))}
    </div>
  </>
  );
}



export function CometCardDemo() {
  return (
    <CometCard>
      <div className="flex justify-center items-center w-full">
        <button
          type="button"
          className="mx-auto flex w-full max-w-xs sm:max-w-sm md:max-w-[36rem] lg:max-w-[42rem] cursor-pointer flex-col items-stretch rounded-3xl border-0 bg-[#1F2121] p-3 md:p-5"
          aria-label="View invite F7RA"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
            opacity: 1,
          }}
        >
          <div className="flex-1 w-full">
            <div className="relative mt-1 aspect-3/4 w-full">
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
          <div className="mt-3 flex flex-col gap-1 p-4 text-center font-mono text-white text-sm md:text-base sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="font-semibold">Valentino Banyu</div>
            <div className="text-gray-300 opacity-80">Fullstack Developer</div>
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
    <div className="flex flex-col items-center justify-center w-full px-4 py-8">
      <p className="text-white text-2xl md:text-3xl mb-4 font-extrabold text-center w-full max-w-3xl">
        Welcome to Nyu website as fullstack developer
      </p>
      <div className="w-full flex justify-center">
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <a href="#Contact" className=" hover:text-black w-40 h-10 rounded-xl bg-[var(--primary)] border dark:border-white border-transparent text-white text-sm flex items-center justify-center">
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
  link = "",
}) {
  const content = (
    <CardContainer className="inter-var w-full max-w-[420px]">
      <CardBody className="bg-neutral-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-full rounded-xl p-6 md:p-7 xl:p-8 border flex flex-col min-h-[560px] md:min-h-[620px]">
        {/* accessibility badge: shows whether project has a live link */}
        <span
          className={`absolute -top-3 left-3 z-50 px-3 py-1 text-xs font-semibold rounded-full shadow-md ${
            link ? "bg-emerald-600 text-white" : "bg-neutral-700 text-white"
          }`}
          aria-hidden="false"
          aria-label={link ? `${title} is live` : `${title} has no live demo`}
          title={link ? "Live — klik untuk membuka" : "No live demo"}
        >
          {link ? "Live" : "No live"}
        </span>
        {/* hover overlay: Visit button + external icon */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 pointer-events-auto">
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[var(--primary)] text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14" /></svg>
                Visit
              </a>
            ) : (
              <span className="inline-flex items-center gap-3 bg-neutral-700 text-white px-4 py-2 rounded-full shadow-lg">Visit</span>
            )}
          </div>
        </div>
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
        <CardItem translateZ="100" className="w-full mt-4 relative">
          <img
            src={imageUrl}
            srcSet={`${imageUrl} 1x, ${imageUrl} 2x`}
            height="1000"
            width="1000"
            className="h-64 md:h-[20rem] lg:h-[24rem] xl:h-[28rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={`${title} project picture`}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* external icon in corner (shows when link present) */}
          {link && (
            <span className="absolute top-3 right-3 bg-black/60 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14" /></svg>
            </span>
          )}
        </CardItem>
        <div className="flex justify-between items-center mt-20"></div>
      </CardBody>
    </CardContainer>
  );

  if (link) {
    const openLink = () => {
      try {
        window.open(link, "_blank", "noopener,noreferrer");
      } catch (e) {
        // fallback
        window.location.href = link;
      }
    };

    return (
      <div
        role="button"
        tabIndex={0}
        onClick={openLink}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openLink();
        }}
        aria-label={`Open ${title} project`}
        className="cursor-pointer focus:outline-none focus:ring-4 focus:ring-[var(--secondary)] focus:ring-offset-2 rounded-xl"
      >
        {content}
      </div>
    );
  }

  return content;
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


