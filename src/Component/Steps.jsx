import { UserRoundPen } from 'lucide-react';
import React from 'react';

const Steps = () => {
    return (
        <div className='mt-32 shadow px-3 pt-4 '>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-1.5'>Get Started in 3 Steps</h1>
                <p className='mb-15'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='max-h-screen flex justify-center gap-5 items-center'>
                <div className='text-center bg-gray-200 px-3.5 py-6 rounded-2xl'>
                   <div className='flex justify-end'>
                     <div className='w-6 h-6 rounded-full bg-violet-600 text-white font-bold flex justify-center items-center  '>01</div>
                   </div>
                    <div className='w-25 h-25 rounded-full flex justify-center mx-auto items-center bg-violet-300'> <img src="/src/assets/user.png" alt="" /> </div>
                    <h2 className='text-3xl font-bold mt-2'>Create Account</h2>
                    <p className='mt-1.5'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                </div>
                <div className='text-center bg-gray-200 px-3.5 py-6 rounded-2xl'>
                   <div className='flex justify-end'>
                     <div className='w-6 h-6 rounded-full bg-violet-600 text-white  font-bold flex justify-center items-center  '>02</div>
                   </div>
                    <div className='w-25 h-25 rounded-full flex justify-center mx-auto items-center bg-violet-300'><img src="/src/assets/package.png" alt="" /></div>
                    <h2 className='text-3xl font-bold mt-2'>Choose Products</h2>
                    <p className='mt-1.5'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                </div>
                <div className='text-center bg-gray-200 px-3.5 py-6 rounded-2xl'>
                   <div className='flex justify-end'>
                     <div className='w-6 h-6 rounded-full bg-violet-600 text-white font-bold flex justify-center items-center  '>03</div>
                   </div>
                    <div className='w-25 h-25 rounded-full flex justify-center mx-auto items-center bg-violet-300'><img src="/src/assets/rocket.png" alt="" /></div>
                    <h2 className='text-3xl font-bold mt-2'>Start Creating</h2>
                    <p className='mt-1.5'>Download and start using your premium <br /> tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;