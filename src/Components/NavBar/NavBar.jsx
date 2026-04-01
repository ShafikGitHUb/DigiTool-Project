import React from 'react';
import logo from "../../assets/Logo.png"
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
    return (
      <div className='w-11/12 mx-auto'>
          <div className=''>
            <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className=" h-[16px] w-[100px]"> <img src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    
    <FaShoppingCart className='mr-4'></FaShoppingCart>
    <button className="btn btn-ghost">Login</button>
    <a className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</a>
  </div>
</div>
        </div>
      </div>
    );
};

export default NavBar;