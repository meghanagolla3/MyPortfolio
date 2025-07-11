import React from 'react';
import { User, Code2, Lightbulb, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Get to know more about my journey and passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 sm:border-8 border-white dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/WhatsApp Image 2025-07-07 at 19.36.14_621a45ee.jpg"
                  alt="Meghana Golla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-orange-400 via-red-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                <Code className="h-8 w-8 sm:h-14 sm:w-14 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-lg sm:text-2xl">💻</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2 px-4 lg:px-0">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                My Story
              </h3>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi, I'm Meghana, a Full Stack Developer who enjoys building web applications from start to finish. 
              My journey in tech started with curiosity about how websites work, and it has evolved into a deep 
              expertise in modern web technologies.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I like solving problems with code and creating websites that are fast, clean, and easy to use. 
              I'm always learning new things and improving my skills to become a better developer every day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;