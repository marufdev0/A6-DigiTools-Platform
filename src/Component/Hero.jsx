import { Play } from 'lucide-react';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                    src="/src/assets/banner.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <div className=' bg-violet-200 inline-block px-4 rounded-3xl mb-1.5'>
                           <div className='flex items-center gap-2 font-bold '>
                             <div className='w-3 h-3 rounded-[50%] bg-violet-500 shadow-2xl'></div>
                                <p className='text-violet-500'>New: AI-Powered Tools Available</p>
                           </div>
                        </div>
                    <h1 className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
                    <p className="py-6">Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br />Explore Products.</p>
                    <button className="btn btn-primary mr-3 rounded-4xl">Get Started</button>
                    <button className="btn btn-outline btn-primary rounded-4xl"> <Play></Play> Watch Demo</button>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Hero;