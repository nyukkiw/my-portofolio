import Link from "next/link";
export default function Navbar() {
    return(
        <nav className="px-5">
            <ul className="flex gap-2">
                <li>
                            <Link href="/" className="text-gray-800 font-roboto  hover:bg-white hover:rounded-xl transation duration-200">Home</Link>
                        </li>
                        <li className="ml-auto">
                            <Link href="/Project" className="text-gray-800 font-roboto  hover:bg-white hover:rounded-xl transation duration-200">Project</Link>
                        </li>
                        <li>
                            <Link href="/About" className="text-gray-800 font-roboto  hover:bg-white hover:rounded-xl transation duration-200">About</Link>
                        </li>
                        <li>
                            <Link href="/Contact" prefetch={false} className="text-gray-800 hover:bg-white hover:rounded-xl transation duration-200">Contact</Link>
                        </li>
            </ul>
        </nav>
    )
}