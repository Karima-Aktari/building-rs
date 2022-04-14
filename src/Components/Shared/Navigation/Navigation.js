import React from 'react';

const Navigation = () => {

    return (
        <div className='row mx-auto'>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 bg-blue-100">
                <div className='text-blue-500 font-bold'>
                    <p>Building.RS</p>
                </div>

                <div>
                    <a href="#">Home</a>
                    <a href="">About Us</a>
                    <a href="#">Properties</a>
                    <a href="#">Agent</a>
                    <a href="#">Contact</a>

                </div>
                <div className='text-blue-500 font-bold'>
                    <p>Get Started</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;