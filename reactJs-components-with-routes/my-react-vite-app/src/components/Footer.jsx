import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gradient-to-r from-gray-900 to-blue-500 text-white py-4 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-gray-900 hover:to-blue-600">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p>
            &copy; Github Account: 
            <a href="https://github.com/LourdesEstelle" className="ml-2 text-blue-200 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
              Lourdes Estelle
              <FontAwesomeIcon icon={faGithub} className="ml-2" />
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
