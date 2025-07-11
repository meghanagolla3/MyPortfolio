import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Guidance Guru",
      type: "Full Stack Web Application",
      technologies: ["React.js", "Node.js", "Express", "RESTful APIs"],
      description: "Built a full-stack career guidance web app to help students using React.js and Node.js. Integrated user authentication using Express. Selected among top projects at an Ideathon organized by TASK.",
      github: "https://github.com/meghanagolla3",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "OpShield",
      type: "Machine Learning Security System",
      technologies: ["Machine Learning", "Eigen Space Learning", "OPCODE"],
      description: "Created an advanced malware detection system tailored for IoBT devices using 'Eigen Space Learning'. Engineered a system capable of detecting malware in real-time.",
      github: "https://github.com/meghanagolla3",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "PROGESI",
      type: "Security Framework",
      technologies: ["Java", "J2EE", "WAF"],
      description: "Developed a modular proxy grammar framework. Implemented a Java-based proxy grammar engine within a J2EE web application to detect and block SQL injection attacks. Increased web application security by enhancing a custom (WAF).",
      github: "https://github.com/meghanagolla3",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            security, and innovative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group perspective-1000">
              <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col justify-between" style={{ height: 'calc(100% - 8rem)' }}>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-lg text-orange-500 dark:text-orange-400 font-semibold mb-4">
                        {project.type}
                      </p>
                    </div>
                    
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-orange-400 via-red-500 via-pink-500 to-purple-600 rounded-2xl shadow-xl">
                  <div className="p-6 h-full flex flex-col justify-between text-white overflow-hidden">
                    <div>
                      <h3 className="text-lg font-bold mb-3">
                        {project.title}
                      </h3>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2 text-white/90">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium border border-white/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-white/90 leading-relaxed text-sm overflow-hidden">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex justify-center mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-200 border border-white/30 text-sm"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Projects;