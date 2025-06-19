
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Medication Reminder System",
      description: "A scalable medication management system with real-time reminders and HIPAA-compliant security.",
      technologies: ["React.js", "MySQL", "Node.js", "Python", "Firebase"],
      achievements: [
        "Reduced missed doses by 30% through Firebase Cloud Messaging",
        "Implemented RBAC for enhanced user privacy",
        "Full CRUD operations with secure API communication"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500"
    },
    {
      title: "Smart Health Hub",
      description: "Comprehensive healthcare platform with appointment booking, prescription management, and real-time chat.",
      technologies: ["React.js", "PHP", "Node.js", "MySQL"],
      achievements: [
        "100% efficiency in appointment booking and health record tracking",
        "Enhanced doctor-patient communication by 60%",
        "Reduced response time to queries by 50%"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500"
    },
    {
      title: "Urban Mobility Optimization",
      description: "AI-powered framework for optimizing public transportation using machine learning algorithms.",
      technologies: ["Python", "Machine Learning", "Genetic Algorithms", "K-means Clustering"],
      achievements: [
        "20% improvement in scheduling efficiency",
        "25% reduction in passenger wait times",
        "Utilized real-world geospatial data for accurate analysis"
      ],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500"
    },
    {
      title: "AI-Powered Skin Cancer Detection",
      description: "CNN-based system for early skin cancer detection with high accuracy classification.",
      technologies: ["OpenCV", "Python", "TensorFlow", "CNN"],
      achievements: [
        "Achieved 90% classification accuracy",
        "Reduced false positives by 25%",
        "Published research in Springer Journal"
      ],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
