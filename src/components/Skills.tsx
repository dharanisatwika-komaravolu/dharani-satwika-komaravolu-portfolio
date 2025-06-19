
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 88 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 88 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "RESTful APIs", level: 90 },
        { name: "Redux", level: 82 },
        { name: "Power BI", level: 75 },
        { name: "JIRA", level: 80 },
        { name: "Linux", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 group-hover:scale-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Meta Front-End Developer Professional Certificate",
              "Salesforce Developer Virtual Internship",
              "Databricks Generative AI Fundamentals",
              "TypeScript in React",
              "Programming for Everybody (Python)",
              "Advanced Styling with Responsive Design"
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600"
              >
                <span className="text-sm text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
