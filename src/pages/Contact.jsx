export default function Contact() {
  return (
    <div
      className="min-h-screen w-full relative px-6 py-24 text-white flex flex-col items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1900&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Gold Line */}
        <div className="w-20 h-1 bg-yellow-500 rounded-lg mx-auto mb-6"></div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Contact <span className="text-yellow-400">Advocate Subhan</span>
        </h1>

        {/* Short Description */}
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
          For legal consultation regarding Criminal, Civil, Family, Property or
          Cheque Bounce matters. Practicing at{" "}
          <span className="text-yellow-400 font-semibold">
            Purnea District Civil Court, Bihar.
          </span>
        </p>

        {/* GRID — PERFECT RESPONSIVE */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-6 
            text-center
          "
        >
          {/* PHONE */}
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15 .966 0 1.75-.784 1.75-1.75v-2.1c0-.72-.47-1.35-1.16-1.54l-3.03-.84a1.75 1.75 0 0 0-1.72.45l-.9.9a12.56 12.56 0 0 1-5.27-5.27l.9-.9a1.75 1.75 0 0 0 .45-1.72l-.84-3.03c-.19-.69-.82-1.16-1.54-1.16h-2.1C3.03 5 2.25 5.784 2.25 6.75z"
              />
            </svg>
            <p className="font-semibold text-white">Phone</p>
            <p className="text-gray-300 text-sm">+91 XXXXXXXXXX</p>
          </div>

          {/* WHATSAPP — PERFECT FIXED ICON */}
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-9 w-9 text-green-400"
              fill="currentColor"
            >
              <path d="M12.04 2C6.58 2 2.17 6.41 2.17 11.87c0 2.09.62 4.04 1.69 5.67L2 22l4.62-1.81c1.59.87 3.42 1.37 5.38 1.37 5.46 0 9.87-4.41 9.87-9.87C21.87 6.41 17.5 2 12.04 2Zm0 17.8c-1.67 0-3.22-.49-4.53-1.33l-.32-.2-2.74 1.08 1.06-2.66-.22-.34a7.7 7.7 0 0 1-1.3-4.24c0-4.26 3.47-7.73 7.73-7.73s7.73 3.47 7.73 7.73-3.47 7.73-7.73 7.73Zm4.11-5.65c-.22-.11-1.31-.64-1.51-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.94-.35-1.78-1.12a6.92 6.92 0 0 1-1.28-1.6c-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.27-.02-.38-.07-.11-.5-1.2-.69-1.64-.18-.44-.37-.38-.51-.38-.13 0-.29-.02-.45-.02-.15 0-.38.05-.58.27-.2.22-.75.73-.75 1.77 0 1.04.77 2.06.88 2.2.11.15 1.52 2.3 3.7 3.21.52.23.92.36 1.23.46.52.17 1 .15 1.37.1.42-.06 1.27-.51 1.46-1 .18-.49.18-.89.13-.98-.04-.09-.17-.15-.39-.26Z" />
            </svg>

            <p className="font-semibold text-white">WhatsApp</p>
            <p className="text-gray-300 text-sm">+91 XXXXXXXXXX</p>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path d="M3 5h18v14H3z" />
              <path d="M3 5l9 7 9-7" />
            </svg>
            <p className="font-semibold text-white">Email</p>
            <p className="text-gray-300 text-sm">advocate.subhan@example.com</p>
          </div>

          {/* COURT */}
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path d="M2 10h20L12 3 2 10z" />
              <path d="M6 10v7m12-7v7M4 21h16" />
            </svg>
            <p className="font-semibold text-white">Court</p>
            <p className="text-gray-300 text-sm">Purnea District Civil Court</p>
          </div>
        </div>
      </div>
    </div>
  );
}
