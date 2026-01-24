"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return(
        <nav className="fixed top-0 left-0 w-full z-60 bg-black/80 backdrop-blur-xs border-b-4">
           
            <div className="mx-auto px-4 py-4 flex justify-between">
                <div className="text-white font-bold text-lg">Nyukkiw's</div>

                <div className="hidden md:flex gap-6 text-white text-sm lg:has-disabled:">
                    <a href="#Home" className="hover:text-blue-400">Home</a>
                    <a href="#About" className="hover:text-blue-400">About</a>
                    <a href="#Projects" className="hover:text-blue-400">Projects</a>
                    <a href="#Certificate" className="hover:text-blue-400">Certificate</a>
                    <a href="#Contact" className="hover:text-blue-400">Contact</a>
                </div>

                 <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    >
                    <img src="/img/hamburger.svg" className="w-8 h-8 invert brightness-0" alt="" />
                </button>
            </div>


            <div
            className={`md:hidden overflow-hidden
                transition-all duration-300 ease-in-out
                ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
            `}
            >
            <div className="text-white flex flex-col gap-4 px-4 pb-4">
                <a href="#Home" className="hover:text-blue-400">Home</a>
                <a href="#About" className="hover:text-blue-400">About</a>
                <a href="#Projects" className="hover:text-blue-400">Projects</a>
                <a href="#Certificate" className="hover:text-blue-400">Certificate</a>
                <a href="#Contact" className="hover:text-blue-400">Contact</a>
            </div>
            </div>

        </nav>
    )
}