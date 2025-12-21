
import React from 'react';

const About = () => {
  const education = [
    {
      year: '2022-2026',
      degree: 'B.Tech in Information Technology',
      institution: 'Parul Institute of Engineering and Technology',
      status: 'Graduating 2026'
    },
    {
      year: '2022',
      degree: '12th Standard',
      institution: 'R. C. Patel Junior College, Shirpur',
      status: '86.83%'
    },
    {
      year: '2020',
      degree: '10th Standard',
      institution: 'R. C. Patel Secondary School, Shirpur',
      status: '89%'
    }
  ];

  const skills = [
    { category: 'Programming', items: ['Core Java', 'JavaScript', 'Python (Basic)', 'OOP'] },
    { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', ] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs'] },
    { category: 'Database', items: ['MySql ', ] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'PyCharm'] }
  ];

  const stats = [
    { number: '5+', label: 'Completed Projects' },
    { number: '4', label: 'Years Learning' },
    { number: '95%', label: 'Problem Solving' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
            About <span className="text-orange-500">me</span>
          </h2>

          {/* Bio */}
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed">
  My name is Nikhil Pramod Rajput. I am a motivated 
  <span className="text-orange-400 font-semibold"> Java Developer </span> 
  and 
  <span className="text-orange-400 font-semibold"> MERN Stack Developer </span> 
  with a strong foundation in data structures and algorithms. I actively solve 
  DSA problems on platforms like LeetCode to strengthen my problem-solving skills.
  <br /><br />
  I am passionate about building real-world applications, writing clean and 
  efficient code, and continuously learning modern technologies to grow as a 
  professional software developer.
</p>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in bg-slate-900 p-6 rounded-lg" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-lg mr-3 flex items-center justify-center">
                  🎓
                </div>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-orange-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="text-sm text-orange-400 font-semibold mb-1">{edu.year}</div>
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-slate-400 mb-2">{edu.institution}</p>
                    <span className="text-sm text-orange-400 font-medium">{edu.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-lg mr-3 flex items-center justify-center">
                  💻
                </div>
                Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h4 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-sm hover:bg-orange-500/20 hover:text-orange-400 transition-colors duration-300 border border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
