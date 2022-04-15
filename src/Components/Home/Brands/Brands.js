import React from 'react';

const Brands = () => {
    return (
        <div className='container mx-auto my-12 mt-10'>

            <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-1 text-black gap-4 px-4'>

                <div className='p-2 transition hover:-translate-y-2 hover:scale-110 hover:shadow duration-300  sm:transform-none'>
                    <img src="https://template.annimexweb.com/diva/assets/images/logo/brandlogo1.png" className='w-full' alt='' />
                </div>

                <div className='p-2 transition hover:-translate-y-2 hover:scale-110 hover:shadow duration-300'>
                    <img src="https://template.annimexweb.com/diva/assets/images/logo/brandlogo2.png" className='w-full' alt='' />
                </div>

                <div className='p-2 transition hover:-translate-y-2 hover:scale-110 hover:shadow duration-300'>
                    <img src="https://template.annimexweb.com/diva/assets/images/logo/brandlogo3.png" className='w-full' alt='' />
                </div>

                <div className='p-2 transition hover:-translate-y-2 hover:scale-110 hover:shadow duration-300'>
                    <img src="https://template.annimexweb.com/diva/assets/images/logo/brandlogo4.png" className='w-full' alt='' />
                </div>

                <div className='p-2 transition hover:-translate-y-2 hover:scale-110 hover:shadow duration-300'>
                    <img src="https://template.annimexweb.com/diva/assets/images/logo/brandlogo5.png" className='w-full p-2' alt='' />
                </div>

                <div className='p-2 transition hover:-translate-y-2 hover:scale-110 hover:shadow duration-300'>
                    <img src="https://template.annimexweb.com/diva/assets/images/logo/brandlogo6.png" className='w-full p-2' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Brands;