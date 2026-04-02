import { Check } from 'lucide-react';
import React from 'react';

const SimpaleCard = () => {
    return (
        <div className='mt-10 px-5'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='mt-2.5 mb-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3.5'>
                <div className='border border-gray-400 px-4 py-4 mb-2 rounded-2xl'>
                    <h1 className='text-3xl font-bold'>Starter</h1>
                    <p className='text-gray-400'>Perfect for getting started</p>

                    <h2 className='text-4xl font-bold mt-5'>$0 <span className='text-[20px]'>/month</span></h2>
                    <ul className='mt-6'>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Access to 10 free tools</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Basic templates</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Community support</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>1 project per month</li>
                    </ul>
                    <button className='btn bg-violet-700 w-full rounded-3xl mt-20 text-white'>Get Started Free</button>
                </div>
                <div className='border border-gray-400 bg-violet-700 text-white px-4 py-4 mb-2 rounded-2xl'>
                    <h1 className='text-3xl font-bold'>Pro</h1>
                    <p className='text-white'>Best for professionals</p>

                    <h2 className='text-4xl font-bold mt-5'>$29 <span className='text-[20px]'>/month</span></h2>
                    <ul className='mt-6'>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Access to all premium tools</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Unlimited templates</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Priority support</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Unlimited projects</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Cloud sync</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Advanced analytics</li>
                    </ul>
                    <button className='btn bg-white w-full rounded-3xl mt-10 text-violet-700'>Start Pro Trial</button>
                </div>
                <div className='border border-gray-400 px-4 py-4 mb-2 rounded-2xl'>
                    <h1 className='text-3xl font-bold'>Starter</h1>
                    <p className='text-gray-400'>Perfect for getting started</p>

                    <h2 className='text-4xl font-bold mt-5'>$0 <span className='text-[20px]'>/month</span></h2>
                    <ul className='mt-6'>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Everything in Pro</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Team collaboration</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Custom integrations</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Dedicated support</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>SLA guarantee</li>
                        <li className='flex  gap-1.5'><Check className='text-green-600'></Check>Custom branding</li>
                    </ul>
                    <button className='btn bg-violet-700 w-full rounded-3xl mt-10 text-white'>Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default SimpaleCard;