import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
          <footer className="bg-[#0B1A2B] text-gray-300 px-10 py-12">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
      
      {/* Logo + Description */}
      <div className="">
        <h2 className="text-white text-2xl font-bold mb-3">DigiTools</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Premium digital tools for creators, professionals, and businesses.
          Work smarter with our suite of powerful tools.
        </p>
      </div>

      {/* Product */}
      <div>
        <h3 className="text-white font-semibold mb-3">Product</h3>
        <ul className="space-y-2 text-sm">
          <li><a className="hover:text-white">Features</a></li>
          <li><a className="hover:text-white">Pricing</a></li>
          <li><a className="hover:text-white">Templates</a></li>
          <li><a className="hover:text-white">Integrations</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-white font-semibold mb-3">Company</h3>
        <ul className="space-y-2 text-sm">
          <li><a className="hover:text-white">About</a></li>
          <li><a className="hover:text-white">Blog</a></li>
          <li><a className="hover:text-white">Careers</a></li>
          <li><a className="hover:text-white">Press</a></li>
        </ul>
      </div>

      {/* Resources + Social */}
      <div>
        <h3 className="text-white font-semibold mb-3">Resources</h3>
        <ul className="space-y-2 text-sm mb-4">
          <li><a className="hover:text-white">Documentation</a></li>
          <li><a className="hover:text-white">Help Center</a></li>
          <li><a className="hover:text-white">Community</a></li>
          <li><a className="hover:text-white">Contact</a></li>
        </ul>
      </div>
      {/* Social Icons (Correct place) */}
        <div>
          <h4 className="text-white text-sm mb-2">Social Links</h4>
          <div className="flex gap-3">
            <button className="btn btn-circle btn-sm bg-white">
              <FaInstagram></FaInstagram>
            </button>
            <button className="btn btn-circle btn-sm bg-white">
             <FaFacebookSquare></FaFacebookSquare>
            </button>
            <button className="btn btn-circle btn-sm bg-white">
             <FaSquareXTwitter></FaSquareXTwitter>
            </button>
          </div>
        </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      
      <p className="text-sm text-gray-400">
        © 2026 Digitools. All rights reserved.
      </p>

      <div className="flex gap-4 text-sm text-gray-400">
        <a className="hover:text-white">Privacy Policy</a>
        <a className="hover:text-white">Terms of Service</a>
        <a className="hover:text-white">Cookies</a>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;