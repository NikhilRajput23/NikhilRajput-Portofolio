const achievements = [
  {
    title: "DSA & Problem Solving",
    description: (
      <>
        Solved 250+ Data Structures & Algorithms problems on{" "}
        <a
          href="https://leetcode.com/u/Rajput_Nikhil457/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block ml-1 px-3 py-1 rounded-lg 
                     bg-yellow-500 text-black font-semibold 
                     hover:bg-yellow-400 transition"
        >
          LeetCode (NikhilRajput23)
        </a>{" "}
        using Java (primary) and JavaScript.
      </>
    ),
  },
  {
    title: "Summer Impact Training 2025",
    description:
      "Completed Summer Impact Training at Parul University in collaboration with Six Phases Company.",
  },
  {
    title: "IIT Kharagpur Certification",
    description:
      "Completed Introduction to Internet of Things certification from IIT Kharagpur with 63% score.",
  },
];



const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
       <h2 className="text-4xl font-extrabold text-white tracking-wide text-center mb-12">
  ACHIEVEMENTS
</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition-transform"
            >
             <h3 className="text-xl font-semibold text-white mb-2">
  {item.title}
</h3>
<p className="text-slate-300">
  {item.description}
</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
