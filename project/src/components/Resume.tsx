import React from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Convert Google Drive view link to direct download link
    const driveFileId = '1Mxg7gEhWX4WMfzuL00-jLo7rg51prUdC';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Meghana_Golla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('https://drive.google.com/file/d/1Mxg7gEhWX4WMfzuL00-jLo7rg51prUdC/view?usp=sharing', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my resume to learn more about my experience, skills, and achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 via-red-50 via-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Professional Resume
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a comprehensive overview of my experience and achievements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </button>
                
                <button
                  onClick={handleView}
                  className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-200"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;