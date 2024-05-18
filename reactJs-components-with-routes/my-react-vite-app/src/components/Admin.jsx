import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCog, faChartBar, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  const handleItemClick = (title) => {
    alert(`Clicked on ${title}`);
  };

  return (
    <main className="flex-1 bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Admin</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: faUsers, title: 'User Management', description: 'Manage users, roles, and permissions.' },
          { icon: faCog, title: 'Settings', description: 'Adjust system settings and configurations.' },
          { icon: faChartBar, title: 'Analytics', description: 'View and analyze system data and metrics.' },
          { icon: faFileAlt, title: 'Reports', description: 'Generate and view reports on system activities.' },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6 transition duration-300 ease-in-out transform hover:bg-blue-100 hover:-translate-y-1 cursor-pointer" onClick={() => handleItemClick(item.title)}>
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={item.icon} className="text-gray-500 mr-2 transition duration-300 ease-in-out transform hover:text-blue-700 hover:scale-110" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900 transition duration-300 ease-in-out transform hover:text-blue-700 hover:scale-110">{item.title}</h3>
            </div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Admin;
