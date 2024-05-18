import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({});
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logout clicked!");
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.right - buttonRect.width,
      });
    }
  }, [isDropdownOpen]);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-blue-500 text-white py-4 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-gray-900 hover:to-blue-600">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCog} className="text-2xl mr-2" />
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-gray-300">Welcome back, Admin!</p>
          </div>
        </div>
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
            ref={buttonRef}
          >
            <div className="mr-2">
              <FontAwesomeIcon icon={faUserCircle} className="text-4xl" />
            </div>
            <div>
              <p className="text-sm text-gray-300">Kristea Aiko</p>
            </div>
          </div>
          {isDropdownOpen &&
            createPortal(
              <div
                ref={dropdownRef}
                className="absolute w-48 bg-white rounded-md shadow-lg"
                style={{ ...dropdownPosition, zIndex: 1000 }}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </div>
              </div>,
              document.body
            )}
        </div>
      </div>
    </header>
  );
}
