
import React from 'react';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a passionate Web and Software Developer with a Master's in Computer Science from UT Arlington. 
                My journey in technology is driven by the desire to turn innovative ideas into dynamic, responsive, 
                and user-focused web applications.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With expertise in React, TypeScript, Node.js, and cloud technologies, I've built impactful projects 
                that improve user engagement, healthcare workflows, and communication efficiency. My work combines 
                intuitive UI design with robust backend integration.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I thrive in collaborative, agile environments and am always excited about solving real-world problems 
                through meaningful, scalable solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                </div>
                <p className="text-gray-600">
                  <strong>Master of Science in Computer Science</strong><br />
                  The University of Texas at Arlington<br />
                  GPA: 3.7/4.0 | Aug 2023 – May 2025
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                </div>
                <p className="text-gray-600">Arlington, Texas</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Specializations</h3>
                </div>
                <p className="text-gray-600">Intelligent Systems, Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
