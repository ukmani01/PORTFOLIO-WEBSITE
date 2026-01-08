import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "./iconn.png";

export default function NavbarMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-white duration-300 md:p-0 md:w-310 p-5  md:-mr-6 -ml-42 sticky top-0 z-50 shadow-sm">
                {/* FIXED HEIGHT NAVBAR */}
                <div className="flex justify-between items-center h-20 w-50  mad:w-200 gap-40  md:gap-140     mx-auto px-6 md:px-0">

                    <img
                        src={icon}
                        alt="icon"
                        style={{ animationDuration: "15s" }}
                        className="w-8 h-8 md:w-24  md:-ml-50 md:h-12 rounded-full animate-spin"
                    />

                    {/* Menu button */}
                    <button
                        className="text-3xl text-black w-10 h-10 flex items-center justify-center
                       hover:scale-105 active:scale-95 transition-transform"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>


                {/* DROPDOWN */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${open ? "max-h-60 md:max-h-96" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col items-center gap-6 py-4 font-[poppins] text-xl md:text-2xl whitespace-nowrap">

                        <Link
                            onClick={() => setOpen(false)}
                            to="/"
                            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                         after:w-0 after:bg-black after:transition-all hover:after:w-full"
                        >
                            Home
                        </Link>

                        <Link
                            onClick={() => setOpen(false)}
                            to="/myApp"
                            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                         after:w-0 after:bg-black after:transition-all hover:after:w-full"
                        >
                            MyApp
                        </Link>

                        <Link
                            onClick={() => setOpen(false)}
                            to="/about"
                            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                         after:w-0 after:bg-black after:transition-all hover:after:w-full"
                        >
                            About
                        </Link>

                        <Link
                            onClick={() => setOpen(false)}
                            to="/contact"
                            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                         after:w-0 after:bg-black after:transition-all hover:after:w-full"
                        >
                            Contact
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    );
}
