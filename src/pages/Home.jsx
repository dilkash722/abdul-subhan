import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full relative flex items-center px-6 py-24 md:py-32 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1900&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Layer */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-left">
        {/* Typewriter Intro */}
        <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold mb-4">
          <Typewriter
            words={["Hi,", "I am Advocate Abdul Subhan"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={900}
          />
        </h3>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Trusted Legal Expertise
          <br />
          <span className="text-yellow-400">
            Criminal • Civil • Family • Property
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-10">
          Providing honest, ethical and result–oriented legal representation.
          Helping clients navigate complex legal matters with clarity and
          confidence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* CALL */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="px-10 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg 
            text-lg font-semibold shadow-lg transition flex items-center gap-2 justify-center"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2..." />
            </svg>
            Call Now
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="px-10 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg 
            text-lg font-semibold shadow-lg transition flex items-center gap-2 justify-center"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12.04 2C6.58 2..." />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
