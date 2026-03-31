   import React from 'react';
   
   const Stats = () => {
    return (
        <div className='bg-violet-500'>
            <div className="flex text-white stats shadow text-center">
                <div className="stat">
                    <div className="stat-value">50K+</div>
                    <div className="stat-desc">Active Users</div>
                </div>

                <div className="stat">
                    <div className="stat-value">200+</div>
                    <div className="stat-desc">Premium Tools</div>
                </div>

                <div className="stat ">
                    <div className="stat-value">4.9</div>
                    <div className="stat-desc">Rating</div>
                </div>
            </div>
        </div>
    );
   };
   
   export default Stats;