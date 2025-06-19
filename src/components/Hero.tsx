
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-gradient drop-shadow-lg">
                Dharani Satwika Komaravolu
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto lg:mx-0 rounded-full mb-8 animate-pulse"></div>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                  Passionate Web & Software Developer
                </span> with a Master's in Computer Science from UT Arlington.
                <br />
                Specializing in creating dynamic, intelligent web applications that blend AI/ML capabilities with exceptional user experiences.
                <br />
                Transforming complex ideas into elegant, scalable solutions that make a real impact in the digital world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-start">
                <a 
                  href="mailto:dharanisatwika2907@gmail.com"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-gray-600" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/dharani-komaravolu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-gray-600" />
                </a>
                <a 
                  href="https://github.com/dharanisatwika-komaravolu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-gray-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full blur opacity-20"></div>
              <img
                src="/lovable-uploads/f5449b94-9ddf-4b95-a316-3cd6305e91ed.png"
                alt="Dharani Satwika Komaravolu"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
