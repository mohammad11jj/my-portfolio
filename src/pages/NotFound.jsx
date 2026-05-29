import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-white rounded-2xl p-10 text-center min-h-[60vh] flex items-center justify-center">
      <div>
        <span className="text-8xl block mb-4">🤔</span>
        <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-2">The page you're looking for took a vacation 🏖️</p>
        <p className="text-gray-600 mb-6">Or maybe it never existed... who knows?</p>
        <Link 
          to="/" 
          className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;