import React from 'react';
import { toast } from 'react-toastify';

const SingleCart = ({Cart,btnSelectedCart,setBtnSelectedCart}) => {
    const {description,features,icon,id,name,period,price,tag,tagType} = Cart;
    const isSelected = btnSelectedCart.find(item => item.id === Cart.id);
    const handleCart = () => {
  toast.success("Buy Now Successfully")

  setBtnSelectedCart([...btnSelectedCart, Cart]); 
};
    return (
      
          <div className="card w-80 mx-auto md:w-80 lg:96  bg-base-100 shadow-sm">
  <div className="card-body flex flex-col h-full">
    <div className='w-full flex justify-end'>
        <span className="badge badge-xs badge-warning py-3 text-[16px] px-3">{tag}</span>
    </div>
    <p>{icon}</p>
    <div className="space-y-3">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className='text-[#627382]'>{description}</p>
      <p className="text-xl"><span className='font-bold text-2xl'>${price}</span>/<span className='text-[#627382]'>{period}</span></p>
    </div>
    <ul className="mt-4 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{features[0]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{features[1]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{features[2]}</span>
      </li>   
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{features[3]}</span>
      </li>   
    </ul>
    <div className="mt-6">
      <button onClick={handleCart} disabled={isSelected} className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white mt-auto">{isSelected?"Selected":"Buy Now"}</button>
    </div>
  </div>
</div>
      
    );
};

export default SingleCart;