// import React from 'react';

// const SelectedCart = ({btnSelectedCart,setBtnSelectedCart}) => {
//     const handelRemoviebtn=(item)=>{
//         const filterCart = btnSelectedCart.filter(cart => cart.id !== item.id);
//         setBtnSelectedCart(filterCart);
//     }
//     const removieAll =()=>{
//         setBtnSelectedCart([])
//     }
//     const totalPrice = btnSelectedCart.reduce((sum,item)=> sum + item.price,0)
    
//     return (
//        <div className=''>
//         {
//            btnSelectedCart.length === 0 ?
//            <div className='flex justify-center items-center flex-col h-[50px] bg-[#F9FAFC] p-10 rounded-2xl'>
//             <h2 className='font-semibold text-xl'>No cart Available</h2>
//             <p>Select Buy Now</p>
//            </div>
//            : btnSelectedCart.map(item=> 
//             { 
//                 const {description,features,icon,id,name,period,price,tag,tagType} = item;
//                 return <div key={id} className='flex justify-between items-center  bg-[#F9FAFC] p-5 rounded-2xl mb-4'>
//                     <div className='flex items-center gap-4'>
//                         <p className=' rounded-full p-2 flex justify-center items-center bg-white'>{icon}</p>
//                        <div>
//                          <h2>{name}</h2>
//                         <p>${price}</p>
//                        </div>
//                     </div>
//                     <button onClick={()=>handelRemoviebtn(item)} className='text-red-800 text-xl'>Remove</button> 
//                 </div>
//             }
//            )
           
//         }
//         <div className='flex justify-between items-center mt-4 bg-[#F9FAFC] p-4 rounded-2xl'>
//             <h2 className='text-xl font-semibold'>Total</h2>
//             <p className='font-black'>${totalPrice}</p>
//         </div>
//         <button onClick={removieAll} className='btn w-full rounded-2xl mt-4 text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>
//        </div>
//     );
// };

// export default SelectedCart;
import React from 'react';

const SelectedCart = ({ btnSelectedCart, setBtnSelectedCart }) => {

   
    const handelRemoviebtn = (id) => {
        const updatedCart = btnSelectedCart.filter(item => item.id !== id);
        setBtnSelectedCart(updatedCart);
    };


    const removieAll = () => {
        setBtnSelectedCart([]);
    };


    const totalPrice = btnSelectedCart.reduce((total, item) => {
        return total + item.price;
    }, 0);

   
    const isCartEmpty = btnSelectedCart.length === 0;

    return (
        <div>

         
            {isCartEmpty && (
                <div className='flex justify-center items-center flex-col h-[100px] bg-[#F9FAFC] p-10 rounded-2xl'>
                    <h2 className='font-semibold text-xl'>No cart Available</h2>
                    <p>Select Buy Now</p>
                </div>
            )}

            
            {!isCartEmpty && (
                <div>

                    {btnSelectedCart.map(item => {
                        const { id, icon, name, price } = item;

                        return (
                            <div key={id} className='flex justify-between items-center bg-[#F9FAFC] p-5 rounded-2xl mb-4'
                            >
                                <div className='flex items-center gap-4'>
                                    <p className='bg-white p-2 rounded-full'>
                                        {icon}
                                    </p>

                                    <div>
                                        <h2 className='font-semibold'>{name}</h2>
                                        <p>${price}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handelRemoviebtn(id)}
                                    className='text-red-800 text-xl'
                                >
                                    Remove
                                </button>
                            </div>
                        );
                    })}

               
                    <div className='flex justify-between items-center mt-4 bg-[#F9FAFC] p-4 rounded-2xl'>
                        <h2 className='text-xl font-semibold'>Total</h2>
                        <p className='font-black'>${totalPrice}</p>
                    </div>
                    <button
                        onClick={removieAll}
                        className='w-full mt-4 p-3 rounded-2xl text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'
                    >
                        Proceed to Checkout
                    </button>

                </div>
            )}

        </div>
    );
};

export default SelectedCart;