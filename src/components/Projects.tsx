
import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Medication Reminder System",
      description: "Developed a scalable medication management system with a fully functional user interface, enabling seamless CRUD operations for user profiles, prescriptions, and reminders through secure API communication. Implemented real-time medication reminders using Firebase Cloud Messaging, reducing missed doses by 30% in testing while ensuring HIPAA-compliant data security and role-based access control (RBAC) for user privacy.",
      technologies: ["React.js", "MySQL", "Node.js", "Python", "Firebase"],
      achievements: [
        "Reduced missed doses by 30% through Firebase Cloud Messaging",
        "Implemented RBAC for enhanced user privacy and HIPAA compliance",
        "Full CRUD operations with secure API communication"
      ],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/dharanisatwika-komaravolu/Medication_Reminder"
    },
    {
      title: "Smart Health Hub",
      description: "Secure authentication and role-based access were integrated, ensuring 100% efficiency in appointment booking, prescription management, and health record tracking, while cutting down manual administrative tasks by 40%. Real-time chat and interactive healthcare services, including a symptom checker and e-prescriptions, enhanced doctor-patient communication by 60% and reduced response time to queries by 50%.",
      technologies: ["React.js", "PHP", "Node.js", "MySQL"],
      achievements: [
        "100% efficiency in appointment booking and health record tracking",
        "Enhanced doctor-patient communication by 60%",
        "Reduced response time to queries by 50%"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/dharanisatwika-komaravolu/Smart_Health_Hub"
    },
    {
      title: "Urban Mobility Optimization",
      description: "AI-powered framework for optimizing public transportation using machine learning algorithms including genetic algorithms and K-means clustering to improve scheduling efficiency and reduce passenger wait times using real-world geospatial data.",
      technologies: ["Python", "Machine Learning", "Genetic Algorithms", "K-means Clustering"],
      achievements: [
        "20% improvement in scheduling efficiency",
        "25% reduction in passenger wait times",
        "Utilized real-world geospatial data for accurate analysis"
      ],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/dharanisatwika-komaravolu/Revolutionizing_Urban_Mobility"
    },
    {
      title: "AI-Powered Skin Cancer Detection",
      description: "Developed and trained a Convolutional Neural Network (CNN) using Python, TensorFlow, and OpenCV to detect skin cancer from images, achieving 90% classification accuracy. Published research in Springer Journal after applying advanced image preprocessing techniques to improve model precision and reduce false positives by 25%.",
      technologies: ["OpenCV", "Python", "TensorFlow", "CNN"],
      achievements: [
        "Achieved 90% classification accuracy",
        "Reduced false positives by 25%",
        "Published research in Springer Journal"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      githubUrl: "#" // This project doesn't have a GitHub link provided
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
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                
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
                  {project.githubUrl !== "#" && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  )}
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
