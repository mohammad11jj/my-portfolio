import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-16 px-4 md:py-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl text-white mb-10 shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          👋 Hi! I'm Mohammad
        </h1>
        <p className="text-xl md:text-2xl mb-3">
          Frontend Developer | React Specialist | UI Enthusiast
        </p>
        <p className="text-lg opacity-90 mb-6">
          Building web experiences that matter
        </p>
        <Link 
          to="/projects" 
          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          View My Work →
        </Link>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent block mb-2">
            3+
          </span>
          <span className="text-gray-600">Years Experience</span>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent block mb-2">
            25+
          </span>
          <span className="text-gray-600">Happy Clients</span>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent block mb-2">
            15+
          </span>
          <span className="text-gray-600">Projects Done</span>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent block mb-2">
            24/7
          </span>
          <span className="text-gray-600">Support</span>
        </div>
      </div>
      
      {/* Quote */}
      <div className="text-center p-8 bg-white rounded-xl border-l-4 border-purple-600 italic text-gray-600 text-lg">
        "Code is like humor. When you have to explain it, it's bad." – Cory House
      </div>
    </div>
  );
}

export default HomePage;