export default function Practice() {
  return (
    <div
      className="min-h-screen w-full relative flex flex-col items-center px-6 py-20 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1900&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Gold Line */}
        <div className="w-20 h-1 bg-yellow-500 rounded-lg mb-6"></div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Practice Areas
        </h1>

        {/* Location */}
        <p className="text-lg md:text-xl text-gray-200 mb-12 text-center">
          Legal Practice at{" "}
          <span className="font-bold text-yellow-400">
            Purnea District Civil Court, Bihar
          </span>
        </p>

        {/* Practice Area Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
          {/* CARD TEMPLATE */}
          {[
            {
              title: "Criminal Law",
              desc: "Bail matters, FIR, criminal defense & legal representation.",
            },
            {
              title: "Civil Law",
              desc: "Civil disputes, suits, injunctions & property-related matters.",
            },
            {
              title: "Family Law",
              desc: "Divorce, maintenance, custody & domestic settlements.",
            },
            {
              title: "Property Law",
              desc: "Land disputes, registry issues, ownership verification.",
            },
            {
              title: "Cheque Bounce",
              desc: "NI Act cases, legal notices & court representation.",
            },
            {
              title: "Legal Consultation",
              desc: "Expert legal guidance for all types of cases.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/20 transition-all text-center"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                {card.title}
              </h2>

              <p className="text-gray-200">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
