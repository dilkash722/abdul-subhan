import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Advocate Subhan handled my property dispute very professionally. Honest, supportive, and client-focused.",
    name: "Rahman Ansari",
    place: "Purnea, Bihar",
  },
  {
    text: "Family matter ka solution peacefully ho gaya. Legal guidance aur support excellent tha.",
    name: "Shama Parveen",
    place: "Kishanganj, Bihar",
  },
  {
    text: "Cheque bounce case ka resolution fast tha. Advocate Subhan genuine aur result-oriented hain.",
    name: "Manoj Kumar",
    place: "Purnea City",
  },
  {
    text: "Criminal matter me representation strong tha. Pure procedure me proper guidance milta raha.",
    name: "Arif Alam",
    place: "Forbesganj, Bihar",
  },
  {
    text: "Civil dispute professional tareeke se handle kiya. Time-to-time updates milte rahe.",
    name: "Suresh Yadav",
    place: "Araria, Bihar",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 py-20 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1900&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Gold Line */}
        <div className="w-20 h-1 bg-yellow-500 rounded-lg mb-6"></div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Client Testimonials
        </h1>

        {/* Slider Container */}
        <div className="max-w-2xl w-full">
          {/* Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center shadow-xl min-h-[260px] transition-all duration-500">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              “{testimonials[index].text}”
            </p>

            <h3 className="text-xl font-bold text-yellow-400">
              {testimonials[index].name}
            </h3>

            <p className="text-gray-300">{testimonials[index].place}</p>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full transition-all ${
                  i === index ? "bg-yellow-500 scale-110" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
