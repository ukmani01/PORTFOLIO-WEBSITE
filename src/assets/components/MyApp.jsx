import chatbox from './chatbox.png'
import chatbox1 from './chatbox1.png'
import movie1 from './movie1.png'
import movie from './movie.png'
import finance1 from './finance1.png'
import finance from './finance.png'
import { FaGithub } from "react-icons/fa";



import './home.css'
export default function MyApp() {



  return (
    <>

      <div className="flex flex-col md:pl-30 pl-9 items-center h-screen gap-7 md:gap-20  mt-0 p-10">
        <div>
          <h1 className=" md:font-bold font-bold text-orange-500   text-1xl font-[poppins]  md:text-3xl ">Projects</h1>
        </div>
        <div className='flex'>

          <img className="md:h-120  h-30 text-center  w-10 md:w-60  " alt='AI-CHATBOX' src={chatbox} />
          <img className="md:w-140 w-50 h-30 md:h-100" src={chatbox1} />





        </div>
        <div className="
  -mt-7 md:-mt-32 
  bg-white
  md:w-[700px] w-64 
  rounded-xl 
  flex justify-center items-center
  shadow-xl hover:shadow-2xl
  border border-gray-200
  transition-all duration-300
  hover:scale-105
">
          <div className="text-center p-6">
            <h1 className="
      text-sm md:text-2xl 
      font-bold 
      text-gray-800
      tracking-wide
    ">
              AI-Chatbox-Application
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              AI-Chatbox is an AI-powered conversational platform.
              It enables real-time smart interactions with users.
              Built with a clean and responsive interface.
              Focused on speed, accuracy, and user experience.
            </p>
            <button
              className="
    flex items-center justify-center
    px-3 md:px-6
    py-2
    rounded-full
    bg-gray-100
    border border-gray-300
    hover:bg-gray-200
    transition-all duration-300
    hover:scale-110
  "
            >
              <a
                href="https://ukmani01.github.io/AI-CHATBOX/"
                target="_blank"
                className="text-xl md:text-3xl text-gray-700 hover:text-black"
              >
                <FaGithub />
              </a>
            </button>

          </div>
        </div>


        <div className='flex'>
          <img className="md:h-120 h-30 text-center  w-10 md:w-60  " src={movie} />
          <img className="md:w-140 w-50 h-30 md:h-100" src={movie1} />
        </div>
        <div className="
  -mt-7 md:-mt-20 
  bg-white
  md:w-[700px] w-64 
  rounded-xl 
  flex justify-center items-center
  shadow-xl hover:shadow-2xl
  border border-gray-200
  transition-all duration-300
  hover:scale-105
">
          <div className="text-center p-6">
            <h1 className="
      text-sm md:text-2xl 
      font-bold 
      text-gray-800
      tracking-wide
    ">
              MOVIE-APP-Application
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              is a modern movie browsing application.
              It allows users to explore movies with details and ratings.
              Users can search and discover trending and popular films.
              Designed with a clean, responsive, and user-friendly interface.
            </p>
            <button
              className="
    flex items-center justify-center
    px-3 md:px-6
    py-2
    rounded-full
    bg-gray-100
    border border-gray-300
    hover:bg-gray-200
    transition-all duration-300
    hover:scale-110
  "
            >
              <a
                href="https://ukmani01.github.io/MOVE-APP/"
                target="_blank"
                className="text-xl md:text-3xl text-gray-700 hover:text-black"
              >
                <FaGithub />
              </a>
            </button>


          </div>
        </div>


        <div className='flex'>
          <img className="md:h-120 h-30 text-center  w-10 md:w-60  " src={finance} />
          <img className="md:w-140 w-50 h-30 md:h-100" src={finance1} />






        </div>
        <div className="
        
  -mt-7 md:-mt-20
  bg-white
  md:w-[700px] w-64 
  rounded-xl 
  flex justify-center items-center
  shadow-xl hover:shadow-2xl
  border border-gray-200
  transition-all duration-300
  hover:scale-105
">
          <div className="text-center  p-6">
            <h1 className="
      text-sm md:text-2xl 
      font-bold 
      text-gray-800
      tracking-wide
    ">
              FINANCE-DASHBOARD
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              is a financial tracking and analytics application.
              It helps users monitor income, expenses, and savings.
              The dashboard displays data using clear charts and summaries.
              Built with a responsive and user-friendly design.
            </p>
            <button
              className="
    flex items-center justify-center
    px-3 md:px-6
    py-2
    rounded-full
    bg-gray-100
    border border-gray-300
    hover:bg-gray-200
    transition-all duration-300
    hover:scale-110
  "
            >
              <a
                href="https://ukmani01.github.io/-FINANCE-APP/"
                target="_blank"
                className="text-xl md:text-3xl text-gray-700 hover:text-black"
              >
                <FaGithub />
              </a>
            </button>

          </div>
        </div>




      </div >




    </>
  )
}