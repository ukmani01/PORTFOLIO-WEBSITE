import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaDownload,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";

export default function About() {
    return (
        <div className="min-h-screen bg-white px-4 md:px-16 py-10">

            {/* ABOUT ME */}
            <h1 className="text-3xl md:text-5xl font-bold text-orange-500 text-center">
                ABOUT ME
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-center text-gray-700 text-sm md:text-base leading-relaxed">
                I am a passionate MERN Stack Developer focused on building modern,
                responsive, and scalable web applications. I enjoy self-learning,
                solving real-world problems, and creating impactful digital solutions.
            </p>

            {/* SKILLS */}
            <div className="mt-14">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
                    Skills & Technologies
                </h2>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-10 text-center">
                    <FaHtml5 className="text-4xl md:text-5xl text-orange-600 mx-auto" />
                    <FaCss3Alt className="text-4xl md:text-5xl text-blue-600 mx-auto" />
                    <FaJs className="text-4xl md:text-5xl text-yellow-500 mx-auto" />
                    <FaReact className="text-4xl md:text-5xl text-cyan-500 mx-auto" />
                    <SiTailwindcss className="text-4xl md:text-5xl text-sky-400 mx-auto" />

                    <FaNodeJs className="text-4xl md:text-5xl text-green-600 mx-auto" />
                    <SiExpress className="text-4xl md:text-5xl text-gray-700 mx-auto" />
                    <SiMongodb className="text-4xl md:text-5xl text-green-500 mx-auto" />
                    <SiPostman className="text-4xl md:text-5xl text-orange-500 mx-auto" />
                    <FaGithub className="text-4xl md:text-5xl text-gray-800 mx-auto" />
                </div>
            </div>

            {/* MY JOURNEY */}
            <div className="mt-20">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
                    My Journey
                </h2>

                <div className="relative mt-12 max-w-4xl mx-auto">

                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-orange-400 transform md:-translate-x-1/2"></div>

                    {/* Timeline Item */}
                    <div className="relative mb-10 flex md:flex-row flex-col">
                        <span className="absolute left-2 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform md:-translate-x-1/2"></span>
                        <div className="ml-12 md:ml-0 md:w-1/2 md:pr-10 bg-white shadow-lg rounded-lg p-4">
                            <h3 className="font-semibold text-orange-500">May 2001</h3>
                            <p className="text-gray-700 text-sm md:text-base">
                                Born in Trichy, Tamil Nadu.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item */}
                    <div className="relative mb-10 flex md:flex-row-reverse flex-col">
                        <span className="absolute left-2 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform md:-translate-x-1/2"></span>
                        <div className="ml-12 md:ml-0 md:w-1/2 md:pl-10 bg-white shadow-lg rounded-lg p-4">
                            <h3 className="font-semibold text-orange-500">2007 – 2018</h3>
                            <p className="text-gray-700 text-sm md:text-base">
                                Education at Government School, Arasunilaipalayam.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item */}
                    <div className="relative mb-10 flex md:flex-row flex-col">
                        <span className="absolute left-2 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform md:-translate-x-1/2"></span>
                        <div className="ml-12 md:ml-0 md:w-1/2 md:pr-10 bg-white shadow-lg rounded-lg p-4">
                            <h3 className="font-semibold text-orange-500">2018 – 2022</h3>
                            <p className="text-gray-700 text-sm md:text-base">
                                B.E Computer Science and Engineering at Kurinji College of
                                Engineering and Technology, Trichy, Tamil Nadu.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item */}
                    <div className="relative mb-10 flex md:flex-row-reverse flex-col">
                        <span className="absolute left-2 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform md:-translate-x-1/2"></span>
                        <div className="ml-12 md:ml-0 md:w-1/2 md:pl-10 bg-white shadow-lg rounded-lg p-4">
                            <h3 className="font-semibold text-orange-500">May 2025 – Jan 2026</h3>
                            <p className="text-gray-700 text-sm md:text-base">
                                Started self-learning MERN Stack and built multiple real-world
                                projects using React, Node.js, Express, MongoDB, and Tailwind CSS.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item */}
                    <div className="relative mb-10 flex md:flex-row flex-col">
                        <span className="absolute left-2 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform md:-translate-x-1/2"></span>
                        <div className="ml-12 md:ml-0 md:w-1/2 md:pr-10 bg-white shadow-lg rounded-lg p-4">
                            <h3 className="font-semibold text-orange-500">Present</h3>
                            <p className="text-gray-700 text-sm md:text-base">
                                Completed 10+ projects and actively seeking opportunities as a
                                MERN Stack Developer.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* DOWNLOAD RESUME */}
            <div className="mt-16 text-center">
                <a
                    href="/Resume (3) (1).pdf"
                    download
                    className="
            inline-flex items-center gap-2
            bg-orange-500 text-white
            px-6 py-3
            rounded-full
            hover:bg-orange-600
            transition-all duration-300
            text-sm md:text-base
          "
                >
                    <FaDownload />
                    Download Resume
                </a>
            </div>

        </div>
    );
}
