import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Swift News</div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16V5H4v1zm0 6h16v-1H4v1zm0 6h16v-1H4v1z"/>
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li className="text-white hover:text-gray-300 py-2 md:py-0"><Link to="/">General</Link></li>
            <li className="text-white hover:text-gray-300 py-2 md:py-0"><Link to="/Business">Business</Link></li>
            <li className="text-white hover:text-gray-300 py-2 md:py-0"><Link to="/Entertainment">Entertainment</Link></li>
            <li className="text-white hover:text-gray-300 py-2 md:py-0"><Link to="/Health">Health</Link></li>
            <li className="text-white hover:text-gray-300 py-2 md:py-0"><Link to="/Science">Science</Link></li>
            <li className="text-white hover:text-gray-300 py-2 md:py-0"><Link to="/Sports">Sports</Link></li>
            <li className="text-white hover:text-gray-300 py-2 md:py-0"><Link to="/Technology">Technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
