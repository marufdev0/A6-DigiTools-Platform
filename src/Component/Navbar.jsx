import React from 'react';

const Navbar = ({cards}) => {
    return (
       <div className='border-b-gray-400'>
            <div className="navbar bg-base-100 shadow-sm ">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl text-violet-500 font-bold">DigiToools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-2">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="badge badge-sm indicator-item">{cards.length}</span>
                        </div>
                    </div>
                    <a className='mr-3'>Login</a>
                    <a className="btn bg-violet-500 text-white rounded-4xl font-bold ">Get Started</a>
                </div>
            </div>  
       </div>
    );
};

export default Navbar;