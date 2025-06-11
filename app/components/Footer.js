import React from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-700 p-2 rounded">
                <ConstructionIcon className="text-white h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black">KNOLL</span>
                <span className="text-xs font-bold text-red-700 tracking-widest -mt-1">CRANE, INC.</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional crane rental services since 1996.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/equipment" className="hover:text-white transition-colors">Equipment</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>2851 N. Route 12<br />Spring Grove, IL 60081</li>
              <li>(815) 675-9400</li>
              <li>Sales@KnollSteelInc.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Mon-Fri: 7AM - 5PM</li>
              <li>Saturday: 8AM - 2PM</li>
              <li>Sunday: Closed</li>
              <li className="text-red-400 font-semibold">24/7 Emergency</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Knoll Crane, Inc. All rights reserved. | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
} 