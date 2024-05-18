import React, { useState } from 'react';

const Students = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const departments = [
    {
      id: 1,
      name: 'Computer Science',
      color: '#FFE4B5', // Light Peach
      students: ['John Doe', 'Alice Smith', 'Bob Johnson', 'Emma Brown', 'Michael Wilson', 'Sarah Davis', 'James Miller', 'Emma Garcia', 'David Martinez', 'Daniel White', 'Olivia Thompson', 'William Harris', 'Sophia Robinson', 'Ethan Clark', 'Ava Lewis', 'Mia Rodriguez', 'Noah Martinez', 'Isabella Thompson', 'Logan Garcia', 'Sophia Clark'],
    },
    {
      id: 2,
      name: 'Mathematics',
      color: '#B0E0E6', // Powder Blue
      students: ['Emily Brown', 'Michael Wilson', 'Sarah Davis', 'James Miller', 'Emma Garcia', 'David Martinez', 'Daniel White', 'Olivia Thompson', 'William Harris', 'Sophia Robinson', 'Ethan Clark', 'Ava Lewis', 'Mia Rodriguez', 'Noah Martinez', 'Isabella Thompson', 'Logan Garcia', 'Sophia Clark', 'Oliver Wilson', 'Amelia Harris', 'Benjamin Davis'],
    },
    {
      id: 3,
      name: 'Physics',
      color: '#FFDAB9', // Peach Puff
      students: ['Daniel White', 'Olivia Thompson', 'William Harris', 'Sophia Robinson', 'Ethan Clark', 'Ava Lewis', 'Mia Rodriguez', 'Noah Martinez', 'Isabella Thompson', 'Logan Garcia', 'Sophia Clark', 'Oliver Wilson', 'Amelia Harris', 'Benjamin Davis', 'Emma Brown', 'Michael Wilson', 'Sarah Davis', 'James Miller', 'Emma Garcia', 'David Martinez'],
    },
    {
      id: 4,
      name: 'Chemistry',
      color: '#FFB6C1', // Light Pink
      students: ['Sophia Robinson', 'Ethan Clark', 'Ava Lewis', 'Mia Rodriguez', 'Noah Martinez', 'Isabella Thompson', 'Logan Garcia', 'Sophia Clark', 'Oliver Wilson', 'Amelia Harris', 'Benjamin Davis', 'Emma Brown', 'Michael Wilson', 'Sarah Davis', 'James Miller', 'Emma Garcia', 'David Martinez', 'Daniel White', 'Olivia Thompson', 'William Harris'],
    },
    {
      id: 5,
      name: 'Biology',
      color: '#D8BFD8', // Thistle
      students: ['Mia Rodriguez', 'Noah Martinez', 'Isabella Thompson', 'Logan Garcia', 'Sophia Clark', 'Oliver Wilson', 'Amelia Harris', 'Benjamin Davis', 'Emma Brown', 'Michael Wilson', 'Sarah Davis', 'James Miller', 'Emma Garcia', 'David Martinez', 'Daniel White', 'Olivia Thompson', 'William Harris', 'Sophia Robinson', 'Ethan Clark', 'Ava Lewis'],
    },
    {
      id: 6,
      name: 'Geology',
      color: '#F0E68C', // Khaki
      students: ['Liam Smith', 'Ella Johnson', 'Ethan Brown', 'Olivia Wilson', 'Aiden Taylor', 'Madison Martinez', 'Mason Harris', 'Lily Jones', 'Logan Brown', 'Ava Moore', 'Lucas Anderson', 'Charlotte Lee', 'Jack Perez', 'Amelia King', 'Jacob Hall', 'Evelyn White', 'William Thompson', 'Harper Nelson', 'James Davis', 'Sophia Clark'],
    },
    {
      id: 7,
      name: 'History',
      color: '#AFEEEE', // Pale Turquoise
      students: ['Daniel Wilson', 'Grace Brown', 'Henry Lewis', 'Chloe Robinson', 'Samuel Johnson', 'Zoe Wright', 'David Hall', 'Victoria Green', 'Andrew Martinez', 'Natalie Perez', 'Christopher Moore', 'Avery Garcia', 'Julian Smith', 'Scarlett Clark', 'Thomas Hill', 'Brooklyn King', 'David Martinez', 'Joseph Anderson', 'Emily Baker', 'Benjamin Taylor'],
    },
    {
      id: 8,
      name: 'Economics',
      color: '#FFDEAD', // Navajo White
      students: ['Ethan Wilson', 'Abigail Harris', 'Alexander Thompson', 'Emily Davis', 'David Wilson', 'Samantha Johnson', 'John Clark', 'Sophie Hall', 'Matthew Brown', 'Hailey Wright', 'Lucas Martinez', 'Ava Perez', 'Jackson Anderson', 'Olivia Lewis', 'Daniel Smith', 'Elizabeth Martin', 'Gabriel Taylor', 'Addison Moore', 'Nicholas Lee', 'Lily Robinson'],
    },
    {
      id: 9,
      name: 'Psychology',
      color: '#B0C4DE', // Light Steel Blue
      students: ['Noah Brown', 'Chloe Williams', 'Ryan Harris', 'Madison Brown', 'Jackson Wilson', 'Ella Davis', 'Jacob Johnson', 'Grace Martinez', 'Carter Anderson', 'Mia Harris', 'Nathan Thompson', 'Evelyn Clark', 'Dylan Taylor', 'Zoe Garcia', 'Luke Robinson', 'Hannah Lewis', 'Isaac White', 'Lily Green', 'Andrew Perez', 'Avery Hill'],
    },
    {
      id: 10,
      name: 'Sociology',
      color: '#FFD700', // Gold
      students: ['Sophia Martinez', 'William Davis', 'Amelia Clark', 'Ethan Jones', 'Olivia Moore', 'Logan Wilson', 'Abigail Taylor', 'Michael Harris', 'Ava Lewis', 'James Martin', 'Emma Thompson', 'Lucas Wright', 'Grace Anderson', 'Daniel Perez', 'Lily Johnson', 'Jackson Baker', 'Mia Hall', 'Samuel King', 'Chloe Allen', 'Benjamin Lee'],
    },
  ];

  const toggleDepartment = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className="flex-1 bg-gray-100 p-8">
      <h2 className="text-center text-gray-700 text-2xl font-semibold mb-4">List of Students by Department</h2>
      <div className="grid grid-cols-1 md
:grid-cols-3 lg:grid-cols-5 gap-4">
{departments.map((department, index) => (
  <div
    key={department.id}
    className={`bg-white shadow rounded-lg p-6 cursor-pointer transition duration-300 ease-in-out transform hover:bg-blue-100 hover:-translate-y-1 ${activeIndex === index ? 'border border-blue-500' : ''}`}
    style={{ backgroundColor: department.color }}
    onClick={() => toggleDepartment(index)}
  >
    <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">{department.name}</h3>
    {activeIndex === index && (
      <ul className="list-disc list-inside text-gray-700">
        {department.students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    )}
  </div>
))}
</div>
</main>
);
};

export default Students;
