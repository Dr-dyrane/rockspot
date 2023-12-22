// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 font-semibold text-slate-200">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link to="/">
          <div className="flex flex-row items-center">
            <img
              src="/logo_i.png" // Assuming your logo is in the public folder
              alt="Logo"
              className="h-8"
            />
            <div className="font-bold text-lg px-4">Rockspot Shawarma</div>
          </div>
        </Link>
        <div className="mt-4 sm:mt-0 sm:ml-4">
          <Link to="/" className="text-white block mt-2 sm:inline-block sm:mt-0 sm:mr-4">
            Home
          </Link>
          <Link
            to="/menu"
            className="text-white block mt-2 sm:inline-block sm:mt-0 sm:mr-4"
          >
            Menu
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
