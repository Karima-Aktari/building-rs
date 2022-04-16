import React from 'react';
import heart from '../../../images/Icons/heart-icon.png';
import share from '../../../images/Icons/share-icon.png';
import bed from '../../../images/Icons/bed.png';
import bath from '../../../images/Icons/bath.png';
import square from '../../../images/Icons/square.png';
import { Link, NavLink } from 'react-router-dom';

const RecentProperties = () => {
    const properties = [
        {
            img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2021/12/pexels-photo-1396122.jpeg",
            price: "123300",
            title: "The better impression it would make. An Agency.",
            location: "Amborkhana 3000, Sylhet, Bangladesh",
            bed: "4",
            bath: "3",
            size: "1200",
        },
        {
            img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2021/12/pexels-photo-1396122.jpeg",
            price: "250000",
            title: "The better impression it would make. An Agency.",
            location: "Amborkhana 3000, Sylhet, Bangladesh",
            bed: "3",
            bath: "2",
            size: "1000",
        },
        {
            img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2021/12/pexels-photo-1396122.jpeg",
            price: "320000",
            title: "The better impression it would make. An Agency.",
            location: "Amborkhana 3000, Sylhet, Bangladesh",
            bed: "2",
            bath: "2",
            size: "900",
        },
        {
            img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2021/12/pexels-photo-1396122.jpeg",
            price: "123300",
            title: "The better impression it would make. An Agency.",
            location: "Amborkhana 3000, Sylhet, Bangladesh",
            bed: "4",
            bath: "3",
            size: "1200",
        },
        {
            img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2021/12/pexels-photo-1396122.jpeg",
            price: "250000",
            title: "The better impression it would make. An Agency.",
            location: "Amborkhana 3000, Sylhet, Bangladesh",
            bed: "3",
            bath: "2",
            size: "1000",
        },
        {
            img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2021/12/pexels-photo-1396122.jpeg",
            price: "320000",
            title: "The better impression it would make. An Agency.",
            location: "Amborkhana 3000, Sylhet, Bangladesh",
            bed: "2",
            bath: "2",
            size: "900",
        },
    ]
    return (
        <div className="container mx-auto py-7 px-5">
            <div className='text-center px-7'>
                <h1 className='text-3xl font-bold'>Recent Added <span className='text-blue-500'>Trading</span> Properties</h1>
                <p className='text-md text-gray-500 py-5 w-96 text-center mx-auto font-medium'>
                    The better impression it would make. An Agency,The better impression it would make. An Agency.
                </p>
            </div>

            <div className='row mx-auto'>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 py-5'>
                    {
                        properties.map((property) => (

                            <div className="p-4" data-aos="fade-up"
                                data-aos-duration="3000">
                                <div className='relative'>
                                    <img src={property.img} className="rounded-3xl" alt='' />
                                    <h4 className='absolute top-4 left-4 px-2 font-bold rounded-full bg-slate-50 text-blue-500'>Available Now</h4>
                                </div>
                                <div className='flex justify-between py-2 mx-auto'>
                                    <h1 className='text-md font-bold text-blue-500'>${property.price} </h1>
                                    <div className='flex justify-end w-40'>
                                        <img src={heart} className="w-6 h-6 mx-3" alt='' />
                                        <img src={share} className="w-6 h-6" alt='' />
                                    </div>
                                </div>
                                <h2 className='text-xl font-bold'>{property.title}</h2>
                                <p className='text-gray-500 py-2'>{property.location}</p>
                                <div className='flex justify-start text-sm'>
                                    <div className='flex justify-between'>
                                        <img src={bed} className="w-5 h-5" alt='' />
                                        <p className='mx-3'>{property.bed} Bd</p>
                                    </div>
                                    <div className='flex justify-between  mx-4'>
                                        <img src={bath} className="w-5 h-5" alt='' />
                                        <p className='mx-3'>{property.bath} Bth</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <img src={square} className="w-5 h-5" alt='' />
                                        <p className='mx-3'>{property.square} Sqft</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                </div>
                <div className='text-center py-3'>
                    <NavLink as={Link} to="/home">
                        <button className='bg-blue-600 px-5 py-1 text-lg text-slate-200 font-medium border-2 border-blue-600'>Learn More</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default RecentProperties;