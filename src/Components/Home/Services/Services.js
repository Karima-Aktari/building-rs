import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay, Pagination } from "swiper";

import search from '../../../images/Icons/search.png';
import star from '../../../images/Icons/star.png';
import booking from '../../../images/Icons/booking.png';
import happy from '../../../images/Icons/happy.png';



const Services = () => {
    return (
        <div className='bg-green-50 py-7'>
            <div className='container mx-auto '>
                <div className='text-center mx-auto pt-2 px-7'>
                    <h1 className='text-3xl font-bold'>How It <span className='text-blue-500'>Works</span></h1>
                    <p className='text-md text-gray-500 py-5 w-96 text-center mx-auto font-medium'>
                        The better impression it would make. An Agency,The better impression it would make. An Agency.
                    </p>
                </div>
                <Swiper
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[FreeMode, Autoplay, Pagination]}

                >
                    <div>
                        <SwiperSlide>
                            <div className='container mx-auto bg-slate-50 hover:bg-blue-500 hover:text-slate-50 rounded-2xl p-3 drop-shadow-xl'>
                                <div className='flex justify-start'>
                                    <img src={search} className=' w-10 h-10 mx-3' alt='' />
                                    <div className='font-bold'>
                                        <h5>Search your</h5>
                                        <h5>demanding house</h5>
                                    </div>
                                </div>
                                <p className='text-gray-500 py-5 w-64 mx-auto font-sm hover:text-slate-50'>
                                    The better impression it would make. An Agency,The better impression it would make. An Agency.
                                    Read more...
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='container mx-auto bg-slate-50 hover:bg-blue-500 hover:text-slate-50 rounded-2xl p-3 drop-shadow-xl'>
                                <div className='flex justify-start'>
                                    <img src={star} className=' w-10 h-10 mx-3' alt='' />
                                    <div className='font-bold'>
                                        <h5>Search your</h5>
                                        <h5>demanding house</h5>
                                    </div>
                                </div>
                                <p className='text-gray-500 py-5 w-64 mx-auto font-sm hover:text-slate-50'>
                                    The better impression it would make. An Agency,The better impression it would make. An Agency.
                                    Read more...
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='container mx-auto bg-slate-50 hover:bg-blue-500 hover:text-slate-50 rounded-2xl p-3 drop-shadow-xl'>
                                <div className='flex justify-start'>
                                    <img src={booking} className=' w-10 h-10 mx-3' alt='' />
                                    <div className='font-bold'>
                                        <h5>Search your</h5>
                                        <h5>demanding house</h5>
                                    </div>
                                </div>
                                <p className='text-gray-500 py-5 w-64 mx-auto font-sm hover:text-slate-50'>
                                    The better impression it would make. An Agency,The better impression it would make. An Agency.
                                    Read more...
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='container mx-auto bg-slate-50 hover:bg-blue-500 hover:text-slate-50 rounded-2xl p-3 drop-shadow-xl'>
                                <div className='flex justify-start'>
                                    <img src={happy} className=' w-10 h-10 mx-3' alt='' />
                                    <div className='font-bold'>
                                        <h5>Search your</h5>
                                        <h5>demanding house</h5>
                                    </div>
                                </div>
                                <p className='text-gray-500 py-5 w-64 mx-auto font-sm hover:text-slate-50'>
                                    The better impression it would make. An Agency,The better impression it would make. An Agency.
                                    Read more...
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='container mx-auto bg-slate-50 hover:bg-blue-500 hover:text-slate-50 rounded-2xl p-3 drop-shadow-xl'>
                                <div className='flex justify-start'>
                                    <img src={search} className=' w-10 h-10 mx-3' alt='' />
                                    <div className='font-bold'>
                                        <h5>Search your</h5>
                                        <h5>demanding house</h5>
                                    </div>
                                </div>
                                <p className='text-gray-500 py-5 w-64 mx-auto font-sm hover:text-slate-50'>
                                    The better impression it would make. An Agency,The better impression it would make. An Agency.
                                    Read more...
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='container mx-auto bg-slate-50 hover:bg-blue-500 hover:text-slate-50 rounded-2xl p-3 drop-shadow-xl'>
                                <div className='flex justify-start'>
                                    <img src={booking} className=' w-10 h-10 mx-3' alt='' />
                                    <div className='font-bold'>
                                        <h5>Search your</h5>
                                        <h5>demanding house</h5>
                                    </div>
                                </div>
                                <p className='text-gray-500 py-5 w-64 mx-auto font-sm hover:text-slate-50'>
                                    The better impression it would make. An Agency,The better impression it would make. An Agency.
                                    Read more...
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='container mx-auto bg-slate-50 hover:bg-blue-500 hover:text-slate-50 rounded-2xl p-3 drop-shadow-xl'>
                                <div className='flex justify-start'>
                                    <img src={happy} className=' w-10 h-10 mx-3' alt='' />
                                    <div className='font-bold'>
                                        <h5>Search your</h5>
                                        <h5>demanding house</h5>
                                    </div>
                                </div>
                                <p className='text-gray-500 py-5 w-64 mx-auto font-sm hover:text-slate-50'>
                                    The better impression it would make. An Agency,The better impression it would make. An Agency.
                                    Read more...
                                </p>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>

        </div>
    );
};

export default Services;