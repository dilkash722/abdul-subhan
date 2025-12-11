export default function About() {
  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center text-white px-6 py-24"
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
      <div className="relative z-10 max-w-4xl text-center">
        {/* GOLD LINE TOP */}
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6 rounded-lg"></div>

        {/* ABOUT HEADING */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6">
          About Advocate <span className="text-yellow-400">Abdus Subhan</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
          An experienced legal professional dedicated to offering honest,
          ethical and result-oriented legal solutions. With expertise in
          <span className="font-semibold text-white">
            {" "}
            Criminal, Civil, Family, and Property Law
          </span>
          , Advocate Subhan provides trusted representation with a strong
          commitment to justice.
        </p>

        {/* Qualification Cards – SEPARATE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {/* LLB CARD*/}
          <div className="p-6 bg-white/10 backdrop-blur-xl border border-yellow-500/30 rounded-2xl shadow-xl hover:bg-white/20 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">LLB</h3>
            <p className="text-gray-200 text-sm">Bachelor of Law</p>
          </div>

          {/* M.A CARD */}
          <div className="p-6 bg-white/10 backdrop-blur-xl border border-yellow-500/30 rounded-2xl shadow-xl hover:bg-white/20 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">M.A</h3>
            <p className="text-gray-200 text-sm">Master of Arts</p>
          </div>

          {/* B.A CARD */}
          <div className="p-6 bg-white/10 backdrop-blur-xl border border-yellow-500/30 rounded-2xl shadow-xl hover:bg-white/20 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">B.A</h3>
            <p className="text-gray-200 text-sm">Bachelor of Arts</p>
          </div>
        </div>

        {/* Bottom subtle text */}
        <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
          Committed to offering transparent legal guidance while ensuring every
          client receives fair representation, dignity, and justice.
        </p>
      </div>
    </div>
  );
}
