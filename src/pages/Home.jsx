import { Typewriter } from "react-simple-typewriter";
import {
  PhoneCall,
  MessageCircle,
  Scale,
  Gavel,
  Home as HomeIcon,
  ShieldCheck,
  Target,
  Lock,
} from "lucide-react";
import subhanImg from "../assets/subhan.jpeg";

export default function Home() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center px-5 sm:px-6 py-16 md:py-20 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1762081512133-30202f928bb9?q=80&w=1332&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* ================= HERO ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h3 className="text-sm sm:text-base md:text-lg text-yellow-400 font-semibold mb-3">
              <Typewriter
                words={["Hello,", "I am Advocate Abdul Subhan"]}
                loop={false}
                cursor
                typeSpeed={60}
              />
            </h3>

            <h1 className="font-extrabold mb-5">
              <span className="block text-4xl sm:text-5xl md:text-6xl leading-tight whitespace-nowrap">
                Trusted & Experienced
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl leading-tight text-yellow-400">
                Legal Counsel
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8">
              Providing ethical, result-driven and client-focused legal services
              with strong courtroom experience and professional integrity.
              <br />
              Committed to protecting client rights through diligent legal
              representation and well-planned case strategy.
              <br />
              Every matter is handled with clarity, confidentiality and a
              thorough understanding of applicable law.
            </p>

            {/* PRACTICE AREAS */}
            <div
              className="grid grid-cols-2 md:grid-cols-4
              gap-x-8 gap-y-7
              mb-10
              text-sm sm:text-base text-gray-300
              "
            >
              <div className="flex items-center gap-3">
                <Gavel className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="whitespace-nowrap">Criminal Law</span>
              </div>

              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="whitespace-nowrap">Civil Law</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="whitespace-nowrap">Family Disputes</span>
              </div>

              <div className="flex items-center gap-3">
                <HomeIcon className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="whitespace-nowrap">Property Matters</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
              <a
                href="tel:+919631499719"
                className="inline-flex items-center justify-center gap-3 px-8 py-3
                rounded-lg bg-yellow-500 text-black font-semibold shadow-lg
                hover:bg-yellow-600 transition"
              >
                <PhoneCall className="w-5 h-5" />
                Call for Consultation
              </a>

              <a
                href="https://wa.me/919631499719"
                className="inline-flex items-center justify-center gap-3 px-8 py-3
                rounded-lg bg-green-600 text-white font-semibold shadow-lg
                hover:bg-green-700 transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          {/* RIGHT PROFILE / AVATAR */}
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="text-center">
              <img
                src={subhanImg}
                alt="Advocate Abdul Subhan"
                className="
                  w-52 h-52
                  sm:w-60 sm:h-60
                  md:w-64 md:h-64
                  rounded-full object-cover
                  border-4 border-yellow-500
                  shadow-2xl mx-auto
                "
              />
              <h4 className="mt-5 text-lg sm:text-xl font-semibold">
                Advocate Abdul Subhan
              </h4>
              <p className="text-sm text-gray-300">Legal Practitioner</p>
            </div>
          </div>
        </div>

        {/* ================= TRUST HIGHLIGHTS ================= */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Scale className="w-6 h-6 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Professional Legal Advice
            </h3>
            <p className="text-sm text-gray-300">
              Clear guidance with honest evaluation of legal matters.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Target className="w-6 h-6 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Case-Focused Strategy
            </h3>
            <p className="text-sm text-gray-300">
              Every case is handled with personalized attention.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Lock className="w-6 h-6 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Client Confidentiality
            </h3>
            <p className="text-sm text-gray-300">
              Privacy, trust and transparency are always ensured.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
