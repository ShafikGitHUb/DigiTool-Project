import React from 'react';
import userpng from '../../assets/user.png'
import packagepng from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const ThreeStep = () => {
    return (
        <div className='bg-[#F9FAFC] mt-4 p-10'>
            <div className='text-center space-y-2'>
                <h2 className='font-semibold text-3xl'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-7 max-w-11/12 mx-auto'>
                <div className=' card bg-white p-7 py-15 rounded-2xl text-center space-y-2 relative'>
                    <p className='bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full absolute top-4 right-4'>01</p>
                    <img className='mx-auto' src={userpng} alt="" />
                    <h2 className='font-semibold text-2xl'>Create Account</h2>
                    <p className='text-[#627382] text-[16px]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className=' card bg-white p-7 py-15 rounded-2xl text-center space-y-2 relative'>
                    <p className='bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full absolute top-4 right-4'>02</p>
                    <img className='mx-auto' src={packagepng} alt="" />
                    <h2 className='font-semibold text-2xl'>Choose Products</h2>
                    <p className='text-[#627382] text-[16px]'>Browse our catalog and select the tools?that fit your needs.</p>
                </div>
                <div className=' card bg-white p-7 py-15 rounded-2xl text-center space-y-2 relative'>
                    <p className='bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full absolute top-4 right-4'>03</p>
                    <img className='mx-auto' src={rocket} alt="" />
                    <h2 className='font-semibold text-2xl'>Start Creating</h2>
                    <p className='text-[#627382] text-[16px]'>Download and start using your premium ?tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default ThreeStep;