import { useState } from "react";

function Projects() {
  const [selectedTech, setSelectedTech] = useState("all");
  
  const projects = [
    {
      id: 1,
      name: "🌤️ WeatherWise App",
      description: "Real-time weather forecasting with 7-day prediction",
      tech: ["React", "OpenWeather API", "CSS Modules"],
      details: "Get accurate weather data, interactive maps, and severe weather alerts",
      live: "https://demo.com",
      code: "https://github.com",
      featured: true
    },
    {
      id: 2,
      name: "✅ TaskFlow",
      description: "Productivity app with drag & drop and team collaboration",
      tech: ["React", "Redux", "DnD Kit"],
      details: "Manage tasks, set deadlines, and track progress in real-time",
      live: "#",
      code: "#",
      featured: true
    },
    {
      id: 3,
      name: "🛒 ShopEase",
      description: "E-commerce platform with cart and payment integration",
      tech: ["React", "Stripe", "Context API"],
      details: "Complete shopping experience with product filters and wishlist",
      live: "#",
      code: "#",
      featured: false
    },
    {
      id: 4,
      name: "🎬 MovieHub",
      description: "Movie database with search and advanced filters",
      tech: ["React", "TMDB API", "React Router"],
      details: "Browse thousands of movies, view trailers, and read reviews",
      live: "#",
      code: "#",
      featured: true
    }
  ];
  
  const filteredProjects = selectedTech === "all" 
    ? projects 
    : projects.filter(p => p.tech.includes(selectedTech));
  
  const techList = ["all", "React", "Redux", "API", "CSS"];
  
  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        🚀 Featured Projects
      </h2>
      
      {/* Filters */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {techList.map(tech => (
          <button 
            key={tech} 
            onClick={() => setSelectedTech(tech)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedTech === tech 
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' 
                : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:-translate-y-0.5'
            }`}
          >
            {tech === "all" ? "All" : tech}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 relative">
            {project.featured && (
              <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                ⭐ Featured
              </span>
            )}
            <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
            <p className="text-purple-600 font-medium mb-2">{project.description}</p>
            <p className="text-gray-600 text-sm mb-4">{project.details}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => (
                <span key={t} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-purple-600 text-sm font-medium hover:text-purple-800">
                🔗 Live Demo
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-purple-600 text-sm font-medium hover:text-purple-800">
                💻 Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;