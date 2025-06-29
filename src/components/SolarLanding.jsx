import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

import solarlogo from '../Images/logo2.png';
import './SolarLanding.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Products', path: '/products' },
  { name: 'Work With Us', path: '/workwithus' },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
];

const SolarLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navbar */}
      <div
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-black rounded-full px-5 md:px-8 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center h-12">
            <img
              src={solarlogo}
              alt="Logo"
              className="w-12 h-12 object-contain pt-[1px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-orange-500 font-semibold underline underline-offset-4'
                    : 'hover:text-orange-400 transition duration-200'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Call & Menu */}
          <div className="flex items-center gap-4">
            <a href="tel:+919310259325" className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <FaPhoneAlt className="text-green-800" />
              </div>
              <div className="text-sm text-black">
                <p className="font-medium">Requesting A Call:</p>
                <p className="font-bold">+91 9310259325</p>
              </div>
            </a>
            <button
              className="md:hidden text-2xl text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 mt-2 rounded-xl px-6 py-4 shadow-lg transition-all duration-500 ease-in-out">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="block text-base font-medium text-white hover:text-orange-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="border-t border-gray-700 my-3"></div>

            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <FaPhoneAlt className="text-green-800" />
              </div>
              <div className="text-sm text-white">
                <p className="font-medium">Requesting A Call:</p>
                <p className="font-bold">+91 9310259325</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SolarLanding;
