import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg sticky top-0 z-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-16 flex items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white font-bold text-2xl hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-primary-600 font-bold">✓</span>
          </div>
          <span>TaskFlow</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
