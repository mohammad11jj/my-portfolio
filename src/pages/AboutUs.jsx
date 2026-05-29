import { useState } from "react";

function AboutUs() {
  const [showMore, setShowMore] = useState(false);
  
  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        📖 My Story
      </h2>
      
      <div className="mb-10">
        <p className="text-gray-700 leading-relaxed mb-4">
          I started coding 3 years ago with a simple "Hello World" and 
          never looked back. What began as curiosity turned into passion!
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          💡 <strong>My philosophy:</strong> Write clean code, build responsive designs, 
          and always keep learning.
        </p>
        
        {showMore && (
          <div className="bg-gray-50 p-6 rounded-xl my-4">
            <p className="text-gray-700 leading-relaxed mb-3">
              🚀 Today, I specialize in React and modern frontend technologies. 
              I love turning complex problems into simple, beautiful interfaces.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              🎯 My goal: Help businesses create amazing digital experiences 
              that users love.
            </p>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg mt-4">
              <strong>⚡ Fun fact:</strong> I drink 4 cups of coffee while coding daily!
            </div>
          </div>
        )}
        
        <button 
          onClick={() => setShowMore(!showMore)}
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5"
        >
          {showMore ? "Show Less ↑" : "Read More ↓"}
        </button>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">🛠️ Tech Stack I Use:</h3>
        <div className="flex flex-wrap gap-3">
          {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git & GitHub", "Figma", "Redux"].map(tech => (
            <span key={tech} className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all hover:-translate-y-0.5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;