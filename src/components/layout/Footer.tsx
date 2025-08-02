import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SmartCare Hospital</h3>
            <p className="text-gray-400">
              Providing world-class healthcare services with compassion and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-white transition">Doctors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Medical Avenue</p>
              <p>Health City, HC 12345</p>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p>Email: info@smartcarehospital.com</p>
            </address>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Opening Hours</h4>
            <ul className="text-gray-400 space-y-2">
              <li className="flex justify-between">
                <span>Monday-Friday:</span> <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span> <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span> <span>Emergency Only</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SmartCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};