import React from 'react';
import CountUp from 'react-countup';


const CountDown = () => {
    return (
        
                   <div className='bg-gradient-to-r from-violet-600 to-fuchsia-600 py-5 px-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto'>
             <div className='text-center'>
            <h2 className='text-[60px] text-white'>50+</h2>
            <p className='text-white'>Active Users</p>
           </div>
           <div className='text-center'>
            <h2 className='text-[60px] text-white'>200+</h2>
            <p className='text-white'>Active Users</p>
           </div>
           <div className='text-center'>
            <h2 className='text-[60px] text-white'>4.9</h2>
    
            <p className='text-white'>Active Users</p>
           </div>
      </div>
        </div>
        
    );
};

export default CountDown;