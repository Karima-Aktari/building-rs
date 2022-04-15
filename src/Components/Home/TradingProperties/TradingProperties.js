import React from 'react';

const TradingProperties = () => {

    const properties = [
        {
            img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2021/12/pexels-photo-1396122.jpeg",
            price: "123300",
            title: "The better impression it would make an agency",
            location: "Amborkhana 3000, Sylhet, Bangladesh",
            bed: "4",
            bath: "3",
            size: "1200",
        },
        {
            img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2021/12/pexels-photo-1396122.jpeg",
            price: "250000",
            title: "The better impression it would make an agency",
            location: "Amborkhana 3000, Sylhet, Bangladesh",
            bed: "3",
            bath: "2",
            size: "1000",
        },
        {
            img: "https://www.thekickassentrepreneur.com/wp-content/uploads/2021/12/pexels-photo-1396122.jpeg",
            price: "320000",
            title: "The better impression it would make an agency",
            location: "Amborkhana 3000, Sylhet, Bangladesh",
            bed: "2",
            bath: "2",
            size: "900",
        },
    ]

    return (
        <div className="container mx-auto py-7">
            <div className='w-full text-left'>
                <h1 className='text-3xl font-bold'>Our Most Popular Trading</h1>
                <h1 className='text-3xl font-bold text-blue-500'>Properties</h1>
                <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                    <p className='text-md text-gray-700 py-5 flex flex-wrap font-medium'>
                        Find Digital Agencies In Usa! Always Facts. Results & Answers. Privacy Friendly. Unlimited Access. The Best Resources. Types: Best Results, Explore Now, New Sources.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    properties.map((property) => (

                        <div className="p-4">
                            <img src={property.img} className="rounded" alt='' />
                            <h1>${property.price}</h1>
                            <h2>{property.title}</h2>
                        </div>
                    ))}
            </div>

        </div>
    );
};

export default TradingProperties;