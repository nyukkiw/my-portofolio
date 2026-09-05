"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const btnRef = useRef(null);

    const touchStartRef = useRef(0);
    const touchDeltaRef = useRef(0);

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";

        const handleResize = () => {
            if (window.innerWidth >= 768) setOpen(false);
        };

        const handleClickOutside = (e) => {
            if (!menuRef.current || !btnRef.current) return;
            if (open && !menuRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        const handleTouchStart = (e) => {
            touchStartRef.current = e.touches ? e.touches[0].clientY : e.clientY;
            touchDeltaRef.current = 0;
        };

        const handleTouchMove = (e) => {
            const currentY = e.touches ? e.touches[0].clientY : e.clientY;
            touchDeltaRef.current = currentY - touchStartRef.current;
        };

        const handleTouchEnd = () => {
            // swipe up fast enough (negative delta) => close
            if (touchDeltaRef.current < -40) setOpen(false);
            touchDeltaRef.current = 0;
            touchStartRef.current = 0;
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("pointerdown", handleClickOutside);
        document.addEventListener("touchstart", handleTouchStart, { passive: true });
        document.addEventListener("touchmove", handleTouchMove, { passive: true });
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("pointerdown", handleClickOutside);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
            document.body.style.overflow = "";
        };
    }, [open]);
    return(
        <nav className="fixed top-0 left-0 w-full z-60 bg-black/80 backdrop-blur-xs border-b border-neutral-700/30">
           
            <div className="max-w-7xl mx-auto px-6 py-5 md:py-6 flex items-center justify-between">
                    <div className="text-white font-extrabold text-2xl md:text-3xl">Nyukkiw's</div>

                    <div className="hidden md:flex gap-10 text-white text-lg items-center">
                        <a href="#Home" className="hover:text-[var(--secondary)] px-1">Home</a>
                        <a href="#About" className="hover:text-[var(--secondary)] px-1">About</a>
                        <a href="#Certificate" className="hover:text-[var(--secondary)] px-1">Certificate</a>
                        <a href="#Projects" className="hover:text-[var(--secondary)] px-1">Projects</a>
                        <a href="#Contact" className="hover:text-[var(--secondary)] px-1">Contact</a>
                    </div>

                     <button
                        ref={btnRef}
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        >
                        <img src="/img/hamburger.svg" className="w-8 h-8 invert brightness-0" alt="menu" />
                    </button>
                </div>


                        <div className="md:hidden relative">
                            <div ref={menuRef}
                                    className={`absolute left-0 right-0 top-full bg-black/90 backdrop-blur-xs z-40 overflow-hidden transform-gpu transition-[max-height,opacity,transform] duration-300 ease-in-out ${open ? "max-h-64 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
                                onTouchStart={(e)=>{ /* ensure capture inside menu */ }}
                                >
                                    <div className="text-white flex flex-col gap-4 px-4 pb-4 pt-4">
                                        <a href="#Home" onClick={() => setOpen(false)} className="hover:text-[var(--secondary)]">Home</a>
                                        <a href="#About" onClick={() => setOpen(false)} className="hover:text-[var(--secondary)]">About</a>
                                        <a href="#Certificate" onClick={() => setOpen(false)} className="hover:text-[var(--secondary)]">Certificate</a>
                                        <a href="#Projects" onClick={() => setOpen(false)} className="hover:text-[var(--secondary)]">Projects</a>
                                        <a href="#Contact" onClick={() => setOpen(false)} className="hover:text-[var(--secondary)]">Contact</a>
                                    </div>
                                </div>
                        </div>

        </nav>
    )
}