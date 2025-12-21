import { useEffect, useState } from "react";

const roles = [
  "Java Developer",
  "MERN Stack Developer",
  "Software Developer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
    id="home"
     className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">

        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-2">
            Hello<span className="text-orange-500">.</span>
          </h1>

          <p className="text-lg text-gray-300 mb-1">
            I'm <span className="font-semibold text-white">Nikhil Rajput</span>
          </p>

          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            {roles[index]}
          </h2>

          <p className="text-gray-400 text-sm mb-6">
            Building real-world applications using Java, MERN Stack,
            and modern web technologies.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm"
            >
              Got a project
            </a>

            <a
  href="/nikhilresume457.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-slate-400 px-6 py-2 rounded-md text-sm hover:bg-slate-700 transition"
>
  My Resume
</a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Nikhil Rajput"
            className="w-44 h-44 rounded-full border-4 border-orange-500 shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
