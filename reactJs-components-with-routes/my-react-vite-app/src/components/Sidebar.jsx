import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MoreVertical, Menu, Users, User, Monitor, BookOpen } from "lucide-react"; 


const Icon = ({ icon, size, className }) => {
  const IconComponent = icon;
  return <IconComponent size={size} className={className} />;
};

const Sidebar = ({ children }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);
  const [showStudents, setShowStudents] = useState(false); 

  const toggleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const toggleStudents = () => {
    setShowStudents(!showStudents);
  };

  const activeClass = 'rounded-lg bg-gray-300 text-black px-8 py-2'; 

  const sideBarArray = [
    { name: 'Dashboard', path: '/dashboard', icon: Monitor }, 
    { name: 'Admin', path: '/admin', icon: User }, 
    { name: 'Students', path: '/students', icon: Users }, 
    { name: 'Content', path: '/content', icon: BookOpen }, 
  ];

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src=""
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            alt=""
          />
          <button
            onClick={toggleExpansion}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <Menu /> : <Menu />} 
          </button>
        </div>

        <ul className={`flex-1 px-3 ${expanded ? '' : 'hidden'}`}>
          {sideBarArray.map((item, index) => (
            <li key={index} className="mb-5">
              <NavLink
                exact
                to={item.path}
                className={`text-black flex items-center ${location.pathname === item.path ? activeClass : ''}`}
              >
                {expanded && <Icon icon={item.icon} size={20} className="mr-2" />} 
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="border-t flex p-3">
          <img
            src=""
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-black">Kristea Aiko</h4>
              <span className="text-xs text-gray-600">kristeaiko@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>

      {showStudents && <Students />}
     
    </aside>
  );
};

export default Sidebar;
