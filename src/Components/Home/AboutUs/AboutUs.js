import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='mx-auto py-7'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div className=' relative'>
                    <img src='https://images.freeimages.com/images/small-previews/0c1/house-on-a-farm-1221758.jpg' className="w-5/6 pl-10 rounded-r-lg" alt='' />
                    <div className='absolute bg-blue-100 bg-opacity-40 absolute h-full w-5/6 -left-7 -top-7 rounded-r-lg'>
                    </div>
                </div>
                <div className='w-full text-left px-2'>
                    <h3 className='text-blue-500 font-medium'>About Us</h3>
                    <h1 className='text-3xl font-bold'>We Are Providing The Top</h1>
                    <h1 className='text-3xl font-bold'><span className='text-blue-500'>Real State </span>Property</h1>
                    <p className='text-md text-gray-700 py-5 flex flex-wrap font-medium'>
                        Find Digital Agencies In Usa! Always Facts. Results & Answers. Privacy Friendly. Unlimited Access. The Best Resources. Types: Best Results, Explore Now, New Sources.   Find Digital Agencies In Usa! Always Facts. Results & Answers. Privacy Friendly. Unlimited Access. The Best Resources. Types: Best Results, Explore Now, New Sources.
                    </p>
                    <p className='text-md text-gray-700 py-5 flex flex-wrap font-medium'>
                        Find Digital Agencies In Usa! Always Facts. Results & Answers. Privacy Friendly. Unlimited Access. The Best Resources. Types: Best Results, Explore Now, New Sources.
                    </p>
                    <NavLink as={Link} to="/home">
                        <button className='bg-blue-600 px-5 py-1 text-lg text-slate-200 font-medium border-2 border-blue-600'>Learn More</button>
                    </NavLink>
                    <NavLink as={Link} to="/home">
                        <button className='px-5 py-1 text-lg text-blue-500 font-medium border-2 border-blue-600 mx-2'>Contact Us</button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;