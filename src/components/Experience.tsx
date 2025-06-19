
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Premier Software Engineer Trainee",
      company: "Hexaware Technologies",
      period: "May 2022 – Jan 2023",
      achievements: [
        "Developed hands-on expertise in Java, MySQL, Git, Unix Commands, Web Programming, Agile, Maven, and Cloud Computing, improving coding efficiency by 40%",
        "Gained proficiency in SDLC, unit testing, and version control, participated in 15+ professional training sessions and 10+ workshops",
        "Enhanced technical proficiency and personal growth through structured learning programs"
      ]
    },
    {
      title: "AI-ML Virtual Internship",
      company: "AICTE",
      period: "Oct 2021 – Dec 2021",
      achievements: [
        "Gained practical AI and ML skills, including Python programming, machine learning algorithms, and data analysis",
        "Executed hands-on projects in image recognition, NLP, and data science, applying AI/ML techniques to solve industry-relevant problems",
        "Improved efficiency by 40% through structured learning and implementation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16">
                {/* Timeline Dot */}
                <div className="absolute -left-10 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Briefcase className="w-5 h-5 mr-2" />
                        <span className="text-lg font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
