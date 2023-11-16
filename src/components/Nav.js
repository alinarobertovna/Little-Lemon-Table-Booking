import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="/nav_logo.png"  
              alt="Your Logo"
              className="h-10 md:h-16 lg:h-20 xl:h-24" // Different screen sizes for logo rendering
            />
          </Link>
        </div>

        {/* Mobile screens */}
        <div className="lg:hidden">
          <button
            className="text-green-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger Menu */}
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>

          {/* Nav Menu */}
          {isMenuOpen && (
            <ul className="mt-2">
              <li>
                <Link to="/" className="text-green-800">Home</Link>
              </li>
              <li>
                <Link to="/Menu" className="text-green-800">Menu</Link>
              </li>
              <li>
                <Link to="/Reservation" className="text-green-800">Reservation</Link>
              </li>
              <li>
                <Link to="/Contact" className="text-green-800">Contact</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Desktop screens */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link to="/" className="text-green-800">Home</Link>
          </li>
          <li>
            <Link to="/Menu" className="text-green-800">Menu</Link>
          </li>
          <li>
            <Link to="/Reservation" className="text-green-800">Reservation</Link>
          </li>
          <li>
            <Link to="/Contact" className="text-green-800">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
