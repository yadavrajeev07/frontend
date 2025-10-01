import React from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (
  <header className="bg-white text-black p-4 shadow-md">
  <div className="container mx-auto flex justify-between items-center">
    
    {/* Logo / Brand */}
    <Link to="/">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4214/4214992.png"
        alt="Logo"
        className="h-12 w-auto"
      />
    </Link>

    {/* Main Navigation */}
    <nav>
      <ul className="flex gap-6 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-800 bg-purple-100 font-bold shadow-[2px_2px_4px_rgba(191, 147, 255, 0.7)] rounded border shadow-purple-500 border-purple-200 p-2" : "hover:text-gray-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-purple-800 bg-purple-100 font-bold shadow-[2px_2px_4px_rgba(191, 147, 255, 0.7)] rounded border shadow-purple-500 border-purple-200 p-2" : "hover:text-gray-500"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles"
            className={({ isActive }) =>
              isActive ? "text-purple-800 bg-purple-100 font-bold shadow-[2px_2px_4px_rgba(191, 147, 255, 0.7)] rounded border shadow-purple-500 border-purple-200 p-2"  : "hover:text-gray-500"
            }
          >
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-purple-800 bg-purple-100 font-bold shadow-[2px_2px_4px_rgba(191, 147, 255, 0.7)] rounded border shadow-purple-500 border-purple-200 p-2"  : "hover:text-gray-500"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>

    {/* Login / Get Started */}
    <nav>
      <ul className="flex gap-6 items-center">
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-purple-800 bg-purple-100 font-bold shadow-[2px_2px_4px_rgba(191, 147, 255, 0.7)] rounded border shadow-purple-500 border-purple-200 p-2"  : "hover:text-gray-500"
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-purple-800 bg-purple-100 font-bold shadow-[2px_2px_4px_rgba(191, 147, 255, 0.7)] rounded border shadow-purple-500 border-purple-200 p-2"  : "hover:text-gray-500"
            }
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/get-started"
            
          >
            <h1 className="text-white bg-purple-700 font-bold border-2 rounded-xl p-2 hover:bg-purple-500">
              Get Started
            </h1>
          </NavLink>
        </li>
      </ul>
    </nav>

  </div>
</header>

  );
};

export default Header;
