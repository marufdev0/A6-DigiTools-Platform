import React from 'react';

const Cards = ({cards}) => {
   const totalPrice = cards.reduce((sum, item)=> sum + item.price , 0)
   console.log(totalPrice);
    return (
        <div className='px-4'>
            <h1 className='text-3xl font-bold'>Your Cart</h1>
            <div className='shadow rounded-[13px] mt-2 grid grid-cols-1 gap-1.5  '>
                {
                cards.map(card=> <div className='flex gap-3 px-2 py-1.5 justify-between items-center border border-gray-400 rounded-2xl'>
                   <div className='flex gap-2'>
                     <div className='w-10 h-10 bg-amber-100 rounded-full flex justify-center items-center mt-1 mb-1.5'><img src={card.icon} alt="" /></div>
                    <div className=''>
                        <h1 className='text-2xl font-bold'>{card.name}</h1>
                        <p>${card.price}</p>
                    </div>
                   </div>
                        <button className='btn bg-white text-red-600 font-bold'>Remove</button>
                </div>)
            }
            </div>

            <div className='flex justify-between items-center text-black mt-2 px-3.5'>
                <h1 className='text-2xls'>Total</h1>
                <div>${totalPrice}</div>
            </div>

            <div>
                <button className='btn bg-violet-700 w-full text-white rounded-2xl'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cards;