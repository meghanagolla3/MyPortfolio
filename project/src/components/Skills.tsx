import React from 'react';

const Skills = () => {
  const allSkills = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ];

  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Bidirectional Infinite Scroll Animation */}
        <div className="space-y-8">
          {/* Right to Left Scroll */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right space-x-8">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px] border border-orange-100 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left to Right Scroll */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-8">
              {duplicatedSkills.reverse().map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px] border border-pink-100 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;