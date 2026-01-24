import Link from "next/link";
export default function Navbar() {
    return(
        <nav className="fixed top-0 left-0 w-full z-60 bg-black/80 backdrop-blur-xs border-b-4">
            <div className="mx-auto px-4 py-4 flex justify-between">
            <div className="text-white font-bold text-lg">Nyukkiw's</div>

                <div className="flex gap-6 text-white text-sm">
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