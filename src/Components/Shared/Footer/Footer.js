import React from 'react';
import facebook from '../../../images/Icons/facebook.png';
import instagram from '../../../images/Icons/instagram.png';
import tweeter from '../../../images/Icons/tweeter.png';
import linkedIn from '../../../images/Icons/linkedIn.png';
import messanger from '../../../images/Icons/messanger.png';
import phone from '../../../images/Icons/phone.png';
import message from '../../../images/Icons/message.png';
import location from '../../../images/Icons/location.png';
import copyright from '../../../images/Icons/copyright.png'

const Footer = () => {
    return (
        <div className='bg-slate-200 mt-3 mx-auto'>
            <div className='container mx-auto py-6'>
                <div className='grid md:grid-cols-4 sm:grid-cols-1 gap-5 mx-3'>
                    <div>
                        <h3 className='text-blue-500 font-bold'>Building.RS</h3>
                        <p className='text-sm text-gray-500 py-5 flex flex-wrap font-medium'>
                            Find Digital Agencies In Usa! Always Facts. Results & Answers. Privacy Friendly.
                        </p>
                        <div className='flex justify-evenly w-52'>
                            <img src={facebook} className='w-6 h-6' alt='' />
                            <img src={instagram} className='w-6 h-6' alt='' />
                            <img src={tweeter} className='w-6 h-6' alt='' />
                            <img src={linkedIn} className='w-6 h-6' alt='' />
                            <img src={messanger} className='w-6 h-6' alt='' />
                        </div>
                    </div>

                    <div>
                        <h4 className='font-bold'>Quick Access</h4>
                        <div className='pt-4 text-sm text-gray-500 font-medium'>
                            <a href="/home">Home</a> <br />
                            <a href="/about" className=''>About Us</a><br />
                            <a href="/property">Property</a> <br />
                            <a href="/agent" className=''>Agent</a> <br />
                            <a href="/testimonial">Testimonial</a>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold'>Services</h4>
                        <div className='pt-4 text-sm text-gray-500 font-medium'>
                            <a href="/help">Help center</a> <br />
                            <a href="/raint" className=''>Raint</a><br />
                            <a href="/buy">Buy</a> <br />
                            <a href="/sell" className=''>Sell</a> <br />
                            <a href="/contact">Contact us</a>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold'>Contact Us</h4>
                        <div className='pt-4'>
                            <div className='flex items-center'>
                                <img src={phone} className='w-4 h-4' alt='' />
                                <a href="tel:+0194458988005" className='px-2'>+8801945898005</a>
                            </div>
                            <div className='flex items-center'>
                                <img src={message} className='w-4 h-4' alt='' />
                                <p className='px-2'>karimaaktari@gmail.com</p>
                            </div>
                            <div className='flex items-center'>
                                <img src={location} className='w-4 h-4' alt='' />
                                <p className='px-2'>Beanibazar, Sylhet, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-blue-600 text-center text-slate-50 py-2 flex justify-center'>
                <img src={copyright} className='w-5 h-5 my-1 ' alt='' />
                <p>Copy right</p>
                <img src={copyright} className='w-5 h-5 my-1 ' alt='' />
            </div>
        </div>
    );
};

export default Footer;