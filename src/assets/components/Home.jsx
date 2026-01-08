import { useState, useEffect } from 'react'
import III from './profile.png'
import './home.css'
import { Link } from 'react-router-dom'
export default function Home() {

    let text = 'a MERN stack developer'
    const [displayText, setDisplayText] = useState("")
    useEffect(() => {
        let index = 0;
        setInterval(() => {
            let interval = setDisplayText(text.slice(0, index + 1))
            index++
            if (index === text.length) {
                clearInterval(interval)
            }
        }, 100);
    }, [])



    return (
        <>

            <div className="flex flex-col justify-around  w-full md:ml-0 md:pl-0 pl-8 pr-20 md:pr-0 pt-25 md:pt-30 items-center">
                <div className=" flex flex-col gap-3">

                    <h5 className="text-black font-serif gap-18 md:gap-60 flex">hi!

                        <img className='w-40 h-40  md:w-45 md:h-45  rounded-full   inline-flex' src={III} alt="profile" />

                    </h5>

                    <h3 className="font-serif">i am <span className='text-orange-500'>Mani</span></h3>
                    <h1 className="text-black md:text-5xl text-2xl  fond-bold md:font-bold font-[poppins]">{displayText}</h1>
                    <div className="">
                        <p>I create modern web applications using MongoDB, Express, React, and Node.js</p>
                        <p>with a focus on clean design and performance.</p>

                    </div>

                    <div className=" flex flex-row  gap-10">

                        <Link to="/contact">
                            <button className="  bg-black text-white  rounded-md
  transition 
  duration-300 
  hover:bg-orange-500 
  cursor-pointer
  hover:text-black
  hover:scale-105 font-serif text-center  px-7 ">Hire Me</button>
                        </Link>
                        <Link to="/myApp">
                            <button className="  bg-orange-500 text-white  rounded-md
  transition 
  duration-300 
  cursor-pointer
  hover:bg-black 
  hover:text-white
  hover:scale-105 font-serif px-7">MyApp</button>
                        </Link>
                    </div>
                </div>
                <div>

                </div>




            </div>
        </>
    );
}
