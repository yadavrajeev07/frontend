import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black p-6 shadow-md mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo */}
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4214/4214992.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/" className="text-purple-800 font-bold hover:text-purple-500">Home</Link>
          <Link to="/about" className="text-purple-800 font-bold hover:text-purple-500">About</Link>
          <Link to="/services" className="text-purple-800 font-bold hover:text-purple-500">Services</Link>
          <Link to="/contact" className="text-purple-800 font-bold hover:text-purple-500">Contact</Link>
        </div>

        {/* Login / Get Started */}
        
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
