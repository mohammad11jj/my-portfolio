import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-white/95 backdrop-blur-sm shadow-md flex flex-col md:flex-row items-center justify-between px-[5%] py-4 sticky top-0 z-50 gap-4">
        <div className="logo">
          <NavLink 
            to="/" 
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform inline-block"
          >
            MJ Portfolio
          </NavLink>
        </div>
        
        <nav className="header__nav">
          <ul className="flex items-center gap-4 md:gap-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about-us" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact-us" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
                }
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-[5%] py-10 bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-400 text-center py-8">
        © 2026 All rights reserved. Designed & coded by Mohammad Jalali.
      </footer>
    </div>
  );
}

export default Layout;