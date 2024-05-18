import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faFileAlt, faSyringe } from '@fortawesome/free-solid-svg-icons';  
import USTPLogo from './USTPLOGO.jpg'; 

class Navigation extends Component {
  render() {
    return (
      <nav className="bg-gray-200 p-4 mb-4">
        {}
        <ul className="flex">
          <li className="mr-4">
            <a href="https://www.ustp.edu.ph/" className="text-gray-800 hover:text-gray-900 hover:bg-gray-300 rounded-lg px-4 py-2 transition duration-300">Home</a>
          </li>
          <li className="mr-4">
            <a href="https://www.ustp.edu.ph/about-ustp/" className="text-gray-800 hover:text-gray-900 hover:bg-gray-300 rounded-lg px-4 py-2 transition duration-300">About</a>
          </li>
          <li>
            <a href="https://www.ustp.edu.ph/contact-us/" className="text-gray-800 hover:text-gray-900 hover:bg-gray-300 rounded-lg px-4 py-2 transition duration-300">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <div className="flex justify-center mb-8">
        {}
        <img src={USTPLogo} alt="Logo" className="h-45" />
      </div>
    );
  }
}


class Graphics extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 gap-4">
        {}
        <div className="bg-gray-300 p-4 text-center hover:bg-gray-400 transition duration-300">
          <div className="mb-2">
            <FontAwesomeIcon icon={faGraduationCap} className="text-gray-700 text-xl inline-block mb-2" />
          </div>
          <a href="https://ustep.ustp.edu.ph/login/index.php">Ustep</a>
        </div>
        <div className="bg-gray-300 p-4 text-center hover:bg-gray-400 transition duration-300">
          <div className="mb-2">
            <FontAwesomeIcon icon={faFileAlt} className="text-gray-700 text-xl inline-block mb-2" />
          </div>
          <a href="https://prisms.ustp.edu.ph/auth/login">Prisms</a>
        </div>
        <div className="bg-gray-300 p-4 text-center hover:bg-gray-400 transition duration-300">
          <div className="mb-2">
            <FontAwesomeIcon icon={faSyringe} className="text-gray-700 text-xl inline-block mb-2" />
          </div>
          <a href="https://hims.ustp.edu.ph/">HIMS</a>
        </div>
      </div>
    );
  }
}

class AdminProfile extends Component {
  render() {
    return (
      <div className="bg-gray-300 p-4 mb-4">
        {}
        <FontAwesomeIcon icon={faUser} className="text-gray-700 mr-3 fa-lg" />
        {}
        <div>
          <h2 className="text-xl font-semibold mb-2">Admin Profile</h2>
          <p className="text-gray-800 mb-2">Name: Lordweil E. Abalde</p>
          <p className="text-gray-800">Email: abalde.lordweil123@example.com</p>
        </div>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <main className="flex-1 bg-white p-8"> {}
        <h2 className="text-gray-700 text-2xl font-semibold mb-4">Faculty</h2>
        {}
        <Navigation />
        <Logo />
        <AdminProfile />
        <Graphics />
        <p className="text-gray-800">This is the main content area of the application.</p>
      </main>
    );
  }
}

export default Content;
