import React, { useState } from 'react';
import { MoveRight } from 'lucide-react';

const Digital = ({digital,cards, setCards}) => {
const [buyNow, setBuyNow] = useState(false)

const handalBuyNow = () =>{
    setBuyNow(true);
    setCards([...cards, digital])
}

    return (
        <div className='border  border-gray-400 shadow rounded-2xl overflow-hidden px-3 py-2'>
            <div className='flex justify-end items-center'>
                {digital.tagType && (<p className={`px-3.5 py-1 rounded-2xl font-bold
            ${digital.tagType === "new" ? "bg-amber-100 text-black" : ""}
            ${digital.tagType === "popular" ? "bg-violet-300 text-white" : ""}
            ${digital.tagType === "best" ? "bg-green-300" : ""}`}>
            {digital.tagType}</p>)
                }
            </div>
            <div className='w-10 h-10 bg-amber-100 rounded-full flex justify-center items-center mt-1 mb-1.5'>
                 {digital.icon}
            </div>
            <h1 className='text-2xl font-bold mb-1'>{digital.name}</h1>
            <p className='text-[17px] mb-2'>{digital.description}</p>
            <h2 className='font-bold mb-1.5' >${digital.price}/<span className='text-[10px]'>Mo</span></h2>
            <ul>
                {digital.features.map((feature, i) => (<li className='flex items-center gap-1.5' key={i}><MoveRight></MoveRight> {feature}</li>))}
            </ul>
            <button onClick={handalBuyNow} className='btn bg-violet-700 text-white rounded-4xl w-full mt-3'>{
                buyNow ? "Add to card" : "Buy Now"}</button>
        </div>
    );
};

export default Digital;