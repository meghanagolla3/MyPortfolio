import React from 'react';
import { Github, Linkedin, ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full py-8 sm:py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Text Content */}
          <div className="w-full max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block mb-2 sm:mb-4">
                  MEGHANA GOLLA
                </span>
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200">
                  Hi, I'm a Developer
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 italic font-medium">
                "Making my Goals Clear and Visible"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-400 via-red-500 via-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-orange-500 hover:via-red-600 hover:via-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl text-base sm:text-lg w-full sm:w-auto min-w-[200px]"
              >
                <Code className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Explore My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 sm:border-3 border-orange-400 text-orange-500 dark:text-orange-400 font-bold rounded-xl hover:bg-gradient-to-r hover:from-orange-400 hover:via-red-500 hover:to-pink-500 hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto min-w-[200px]"
              >
                Let's Connect
                <Code className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;