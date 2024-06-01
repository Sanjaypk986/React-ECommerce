// src/components/layout/Footer/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-10">
      <div className="container  mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-3">VogueVista</h3>
          <p className="mb-3 text-zinc-200">Elevate your style with our premium fashion collection.</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">Company</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Careers</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">Support</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Shipping & Returns</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-400">Order Tracking</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact</h4>
          <ul>
            <li className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <span>123 Fashion Street, New York, USA</span>
            </li>
            <li className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="mb-2 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>info@voguevista.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2024 VogueVista. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

