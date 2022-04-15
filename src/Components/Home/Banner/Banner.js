import React from 'react';
import icon from '../../../images/Icons/video-icons-1.png';

const Banner = () => {
    return (
        <div className='mx-auto py-1'>
            <div className="row mx-auto">
                <div className='grid sm:grid-cols-1 md:grid-cols-2'>
                    <div className='pt-16 mb-16'>
                        <h1 className='text-4xl font-bold pl-5 py-4'>Easy To Find Your Next</h1>
                        <h1 className='text-4xl font-bold pl-5 py-2'>Perfect Place</h1>
                        <p className='text-xl text-gray-700 py-5 text-center px-12'>
                            Find Digital Agencies In Usa! Always Facts. Results & Answers. Privacy Friendly. Unlimited Access. The Best Resources. Types: Best Results, Explore Now, New Sources.
                        </p>
                        <div className='flex justify-center w-full'>
                            <button className='bg-blue-600 px-5 text-lg text-slate-200'>Learn More</button>
                            <img src={icon} className="w-12 mx-2" alt='' />
                        </div>
                    </div>
                    <div className='pt-3'>
                        <img src='https://cdn.jhmrad.com/wp-content/uploads/indian-simple-house-design-brucall_171917-670x400.jpg' className='w-full pt-14 h-full' alt='' />

                        {/* <div className='absolute inset-0 bg-blue-400 bg-opacity-40'>
                        </div> */}

                    </div>
                </div>
                <div className='flex justify-center md:flex-row sm:flex-col -mt-24 mx-24'>
                    <div className='basis-1/4 bg-red-50 py-3 border-r-2 border-indigo-200'>
                        <h4 className='text-gray-400'>Location</h4>
                        <h4 className='font-bold'>Zindabazar, Sylhet</h4>
                    </div>
                    <div className='basis-1/4 bg-red-50 py-3 border-r-2 border-indigo-200'>
                        <h4 className='text-gray-400'>Home Type</h4>
                        <h4 className='font-bold'>Duplex House, 2400m</h4>
                    </div>
                    <div className='basis-1/3 bg-red-50 py-3 flex justify-around'>
                        <div>
                            <h4 className='text-gray-400'>Range Home</h4>
                            <h4 className='font-bold'>$10000-$60000</h4>
                        </div>
                        <button className='bg-blue-600 px-5 text-md text-slate-200'>Search Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;