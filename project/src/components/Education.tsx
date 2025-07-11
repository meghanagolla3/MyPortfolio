import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey in Computer Science and Engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 via-red-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Bachelor of Technology (B.Tech)
                      </h3>
                      <p className="text-lg text-orange-500 dark:text-orange-400 font-semibold mb-1">
                        Computer Science and Engineering
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        Bomma Institute of Technology and Science
                      </p>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      <div className="flex items-center lg:justify-end space-x-2 mb-2">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          CGPA: 7.98
                        </span>
                      </div>
                      <div className="flex items-center lg:justify-end space-x-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">2021 - 2025</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;