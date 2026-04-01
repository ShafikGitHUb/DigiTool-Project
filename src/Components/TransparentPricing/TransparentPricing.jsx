import React from 'react';
import { FaCheck } from 'react-icons/fa';

const TransparentPricing = () => {
    return (
        <div>
            
 <section className="text-center space-y-5">
      <h3 className="text-5xl font-extrabold">Simple, Transparent Pricing</h3>
      <p className="text-gray-400">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="flex justify-center flex-wrap gap-3 space-y-5">
        <div className="w-96 bg-[#F2F2F2] p-6 rounded-2xl space-y-5 text-left">
          <h6 className="text-2xl font-bold">Starter</h6>
          <p className="text-gray-400">Perfect for getting started</p>
          <p className="text-4xl font-bold">
            $0 <small className="text-2xl text-gray-400">/month</small>
          </p>
          <div className="space-y-5">
            <p className="flex items-center gap-3">
              {/* <FaCheck className="text-green-500" /> Access to 10 free tools */}
              <FaCheck className='text-green-500'></FaCheck>
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" />
              Basic templates
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" /> Community support
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" /> 1 project per month
            </p>
          </div>
          <button className="btn rounded-full bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-full ">
            Get Started Free
          </button>
        </div>
        <div className="relative w-96 p-6 rounded-2xl space-y-3 text-left bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white">
          <h6 className="text-2xl font-bold">Pro</h6>
          <p className="text-gray-400">Best for professionals</p>
          <p className="text-4xl font-bold">
            $29 <small className="text-2xl text-gray-400">/month</small>
          </p>
          <div className="space-y-2.5">
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" />
              Access to all premium tools
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" />
              Unlimited templates
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" /> Priority support
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" /> Unlimited projects
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" /> Cloud sync
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" /> Advanced analytics
            </p>
          </div>
          <button className="btn rounded-full text-[#4F39F6] w-full shadow-none">
            Start Pro Trial
          </button>
          <div className="absolute -top-3 left-[30%]  badge badge-lg rounded-2xl bg-[#FEF3C6] text-[#BB4D00]">Most Popular</div>
        </div>
        <div className="w-96 bg-[#F2F2F2] p-6 rounded-2xl space-y-3 text-left">
          <h6 className="text-2xl font-bold">Enterprise</h6>
          <p className="text-gray-400">For teams and businesses</p>
          <p className="text-4xl font-bold">
            $99 <small className="text-2xl text-gray-400">/month</small>
          </p>
          <div className="space-y-2.5">
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" /> Everything in Pro
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" />
              Team collaboration
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" /> Custom integrations
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" /> Dedicated support
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" />SLA guarantee
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-500" />Custom branding
            </p>
          </div>
          <button className="btn rounded-full bg-linear-to-l from-[#4F39F6] to-[#9514FA] text-white w-full ">
            Contact Sales
          </button>
        </div>
      </div>
    </section>


        </div>
    );
};

export default TransparentPricing;
