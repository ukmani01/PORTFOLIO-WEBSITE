import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white md:-mt-0 -mt-40 flex items-center justify-center px-4 md:px-0">

            <div className="
        w-full max-w-sm md:max-w-lg
        bg-gray-50
        rounded-xl
        shadow-xl
        p-5 md:p-8
      ">

                {/* Heading */}
                <h1 className="text-2xl md:text-4xl font-bold text-orange-500 text-center">
                    Contact
                </h1>
                <p className="text-center text-gray-500 mt-2 text-sm md:text-base">
                    Feel free to reach out to me
                </p>

                {/* Form */}
                <form className="mt-6 space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="
              w-full p-2 md:p-3
              border border-gray-300
              rounded-md
              text-sm md:text-base
              focus:outline-none focus:border-orange-400
            "
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="
              w-full p-2 md:p-3
              border border-gray-300
              rounded-md
              text-sm md:text-base
              focus:outline-none focus:border-orange-400
            "
                    />

                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="
              w-full p-2 md:p-3
              border border-gray-300
              rounded-md
              text-sm md:text-base
              focus:outline-none focus:border-orange-400
            "
                    ></textarea>

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/916379705993"
                        target="_blank"
                        className="
              flex items-center justify-center gap-2
              w-full
              bg-orange-500 text-white
              py-2 md:py-3
              rounded-md
              text-sm md:text-base
              hover:bg-orange-600
              transition-all duration-300
            "
                    >
                        <FaWhatsapp className="text-lg md:text-xl" />
                        Send Message
                    </a>
                </form>

                {/* Info text */}
                <p className="text-center text-xs md:text-sm text-gray-600 mt-4">
                    Message me directly on WhatsApp
                </p>

                {/* Email */}
                <p className="text-center text-sm md:text-base text-gray-800 font-medium mt-2">
                    📧 manikandankumar0506@gmail.com
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 md:gap-8 mt-6">
                    <a href="https://www.instagram.com/the_life_of_kabaddi/?hl=en" target="_blank">
                        <FaInstagram className="text-xl md:text-3xl text-pink-500 hover:scale-110 transition" />
                    </a>

                    <a href="https://www.facebook.com/home.php" target="_blank">
                        <FaFacebook className="text-xl md:text-3xl text-blue-600 hover:scale-110 transition" />
                    </a>

                    <a href="https://www.linkedin.com/in/k-manikandan-724630375/" target="_blank">
                        <FaLinkedin className="text-xl md:text-3xl text-blue-700 hover:scale-110 transition" />
                    </a>
                </div>

            </div>
        </div>
    );
}
