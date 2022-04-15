import React from 'react';

const Navigation = () => {

    return (
        <div className='row mx-auto'>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 bg-blue-300 bg-opacity-40 py-2 md:relative">
                <div className='text-blue-500 font-bold'>
                    <p>Building.RS</p>
                </div>

                <div>
                    <a href="/home">Home</a>
                    <a href="/about" className='px-3'>About Us</a>
                    <a href="/properties">Properties</a>
                    <a href="/agent" className='px-3'>Agent</a>
                    <a href="/contact">Contact</a>

                </div>
                <div className='bg-blue-500 font-bold w-40 h-14 md:absolute top-0 right-16'>
                    <p className=' text-slate-50 py-3'>Get Started</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;