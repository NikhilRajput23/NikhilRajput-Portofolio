const Certificates = () => {
  const certificates = [
    {
      title: "Fundamentals of Java",
      issuer: "Infosys Springboard",
      year: "2023",
      image: "/cert-java-infosys.jpg",
      verify: "https://verify.onwingspan.com",
    },
    {
      title: "Database and SQL",
      issuer: "Infosys Springboard",
      year: "2023",
      image: "/cert-db-sql-infosys.jpg",
      verify: "https://verify.onwingspan.com",
    },
    {
      title: "Computer Networks and Internet Protocol",
      issuer: "NPTEL – IIT Kharagpur",
      year: "Jan–Apr 2024",
      image: "/cert-nptel-cn-iitkgp.jpg",
      verify: "https://nptel.ac.in/noc",
    },
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTEL – IIT Kharagpur",
      year: "Jul–Oct 2025",
      image: "/cert-nptel-iot-iitkgp.jpg",
      verify: "https://nptel.ac.in/noc",
    },
  ];

  return (
    <section id="certificates" className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-orange-500 transition"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">
                  {cert.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {cert.issuer}
                </p>

                <p className="text-orange-400 text-sm mb-4">
                  {cert.year}
                </p>

                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-orange-400 hover:underline"
                >
                  Verify Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
