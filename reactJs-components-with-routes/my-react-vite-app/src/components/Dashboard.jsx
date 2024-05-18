import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faGraduationCap, faFile, faBuildingColumns} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (title) => {
    setActiveItem(title);
    console.log(`Clicked on ${title}`);
  };

  const items = [
      { icon: faCalendarAlt, title: 'Upcoming Events', description: 'Stay updated with our upcoming events and activities. From workshops to seminars, never miss an opportunity to engage and connect with your community.' },
      { icon: faGraduationCap, title: 'Courses', description: 'Explore our available courses and enhance your skills. Whether you’re a beginner or an expert, there’s something for everyone. Unlock new knowledge and unleash your potential.' },
      { icon: faFile, title: 'Enrollment', description: 'Manage student enrollments and registrations effortlessly. Simplify the enrollment process, track student progress, and ensure a smooth journey from admission to graduation.' },
      { icon: faBuildingColumns, title: 'Program', description: 'Efficiently manage your educational programs and curriculum. From designing courses to tracking outcomes, streamline your program management tasks and elevate the learning experience for your students.' },
    ];
    
  return (
    <main className="flex-1 bg-gray-100 p-8">
      <h2 className="text-gray-700 text-center text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow rounded-lg p-6 transition duration-300 ease-in-out transform cursor-pointer hover:bg-blue-100 hover:-translate-y-1 ${activeItem === item.title ? 'hover:scale-110' : ''}`}
              onClick={() => handleItemClick(item.title)}
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={item.icon} className="text-gray-500 mr-2 text-3xl" />
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
