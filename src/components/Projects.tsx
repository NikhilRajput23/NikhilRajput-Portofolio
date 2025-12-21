const Projects = () => {
  const projects = [
    {
      title: "Online Grocery Management System",
      description:
        "A full-stack web application for managing grocery products, users, and orders. Includes admin dashboard, product CRUD operations, and user-friendly UI.",
      technologies: ["Java", "MySQL","JDBC"],
      github: "https://github.com/NikhilRajput23",
      live: "#",
      image: "🛒",
      features: [
        "Product Management",
        "User Authentication",
        "Order Handling",
        "Admin Dashboard"
      ]
    },
    {
      title: "CRUD Application",
      description:
        "A web-based CRUD application to Create, Read, Update, and Delete records using Node.js and MongoDB with RESTful APIs.",
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/NikhilRajput23/CRUD-APP",
      live: "https://crudapp-1-jnxt.onrender.com/",
      image: "🗂️",
      features: [
        "Add / Update Records",
        "Delete Functionality",
        "REST APIs",
        "MongoDB Integration"
      ]
    },
    {
      title: "Emotion Detection using Machine Learning (Final Year Project)",
      description:
        "A machine learning-based system to detect human emotions from facial expressions using CNN. Trained on FER2013 dataset and real-time camera input.",
      technologies: ["Python", "OpenCV", "TensorFlow", "CNN"],
      github: "https://github.com/NikhilRajput23",
      live: "#",
      mentor: "Mentor: Vikas Dubey",
      images: ["/add.jpg.png", "/add1.jpg.png"],
      image: "😊",
      features: [
        "Real-time Emotion Detection",
        "CNN Model Training",
        "Facial Expression Analysis",
        "High Accuracy Model"
      ]
    },
    {
      title: "Memory Card Game",
      description:
        "An interactive web-based memory game built with React.js featuring card shuffle logic, animations, and responsive gameplay.",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/NikhilRajput23/MemoryCardGame-ReactFramework",
      live: "https://nikhil-memory-card.netlify.app/",
      demo: "https://celadon-khapse-338082.netlify.app/",
      image: "🎮",
      features: [
        "Card Matching Logic",
        "Smooth Animations",
        "Score Tracking",
        "Responsive Design"
      ]
    },
    {
      title: "Online Voting System",
      description:
        "A secure desktop application developed using Java Swing that allows voters to register, login, and cast votes with admin election control.",
      technologies: ["Java", "Swing", "JDBC", "File I/O"],
      github: "https://github.com/NikhilRajput23/Online-Voting-System",
      live: "#",
      image: "🗳️",
      features: [
        "Secure Authentication",
        "Admin Dashboard",
        "Vote Management",
        "User Registration"
      ]
    }
  ];

  return (
<section id="projects" className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-md hover:scale-[1.02] transition"
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{project.image}</span>
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-3">
                {project.description}
              </p>

              {/* Mentor */}
              {project.mentor && (
                <p className="text-sm text-orange-400 mb-2">
                  {project.mentor}
                </p>
              )}

              {/* Emotion images */}
              {project.images && (
                <div className="flex gap-2 mb-3">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="emotion"
                      className="w-16 h-16 rounded object-cover border border-gray-600"
                    />
                  ))}
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className="text-sm text-gray-300 list-disc list-inside mb-4">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline text-sm"
                >
                  GitHub
                </a>

                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Live
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline text-sm"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
