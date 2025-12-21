const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          INTERNSHIP
        </h2>

        {/* Internship Card */}
        <div className="max-w-3xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-white">
            Java Development Intern
          </h3>

          <p className="text-slate-400 mt-1">
            Future Intern · May 2025 · 1 Month
          </p>

          <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2">
            <li>
              Completed a 1-month Java Development Internship focused on core Java concepts.
            </li>
            <li>
              Gained hands-on experience through practical tasks and real-world learning.
            </li>
            <li>
              Improved understanding of object-oriented programming and problem-solving.
            </li>
          </ul>

          {/* PDF LINKS */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="/offer-letter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition"
            >
              📄 Offer Letter
            </a>

            <a
              href="/future-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition"
            >
              🏅 Certificate
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
