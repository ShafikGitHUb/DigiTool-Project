import React from 'react';
import image from '../../assets/banner.png';
import { MdOutlineArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <div className='w-11/12 mx-auto'>
      
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          {/* IMAGE */}
          <div className='flex-1 flex justify-center items-center'>
            <img
              src={image}
              className="w-[500px] h-auto rounded-lg shadow-2xl"
              alt="banner"
            />
          </div>

          {/* TEXT */}
          <div className='flex-1'>
         <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-300 text-sm">
  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
  <span className="text-purple-600 font-semibold">New: AI-Powered Tools Available</span>
</p>
            <h1 className="text-5xl font-bold text-6xl">
              Supercharge Your Digital Workflow
            </h1>

            <p className="py-6 text-[#627382]">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
<div>
    <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
    Explore Products</button>
<button className="btn btn-outline btn-primary rounded-full ml-2">
     <MdOutlineArrowRight></MdOutlineArrowRight>Watch Demo</button>
</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;