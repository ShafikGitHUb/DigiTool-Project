import React, { use, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import SelectedCart from '../SelectedCart/SelectedCart';
const AllCartSection = ({CartPromise}) => {
    const data = use(CartPromise);
    const [selectedBtn,setSelectedBtn] = useState("productbtn");
    const [btnSelectedCart,setBtnSelectedCart] = useState([]);
    return (
        <div className='w-11/12 mx-auto mt-14'>
            {/* Premium Digital Tools and button */}
            <div className='text-center space-y-2 max-w-4xl mx-auto'>
                <h2 className='font-extrabold text-4xl'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed?to boost your productivity and creativity.</p>
               <div className='mt-6'>
                 <button onClick={()=> setSelectedBtn("productbtn")} className={`btn ${selectedBtn === "productbtn"? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white":"bg-amber-50 text-black"} rounded-full`}>Products</button>
                <button onClick={()=> setSelectedBtn("cartbtn")} className={`btn ${selectedBtn === "cartbtn"? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white":"bg-amber-50 text-black"} rounded-full`}>Cart ({btnSelectedCart.length})</button> </div>
            </div>
           <div className="mt-10">
  {selectedBtn === "productbtn" ? (
    <div className="space-y-6">
    
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((cart) => (
          <SingleCart
            key={cart.id}
            Cart={cart}
            btnSelectedCart={btnSelectedCart}
            setBtnSelectedCart={setBtnSelectedCart}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="space-y-6">
     
      {/* <div className="flex items-center justify-between">
       
      </div> */}
       
      <div className="p-4 rounded-2xl bg-[#F2F2F2] shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Your Cart</h2>
        <SelectedCart btnSelectedCart={btnSelectedCart} setBtnSelectedCart={setBtnSelectedCart} />
      </div>
    </div>
  )}
</div>
            
        </div>
    );
};

export default AllCartSection;