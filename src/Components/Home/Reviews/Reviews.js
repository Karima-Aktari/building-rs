import React from 'react';


const Reviews = () => {
    const reviews = [
        {
            img: "https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_img5.jpg?fbclid=IwAR3ETDCxJiwVIyBvqGHl7GimdZF-58izRFKySWDNRzlDuA6rcJvugSvRqhI",
            text: " Find Digital Agencies In Usa! Always Facts. Results & Answers. Privacy Friendly. Unlimited Access. The Best Resources. Types: Best Results, Explore Now, New Sources.",
            name: "Jesika",
            title: "Web Developer"
        },
        {
            img: "https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_img5.jpg?fbclid=IwAR3ETDCxJiwVIyBvqGHl7GimdZF-58izRFKySWDNRzlDuA6rcJvugSvRqhI",
            text: " Find Digital Agencies In Usa! Always Facts. Results & Answers. Privacy Friendly. Unlimited Access. The Best Resources. Types: Best Results, Explore Now, New Sources.",
            name: "Maiden",
            title: "Engineere"
        },
    ]

    return (
        <div className='mx-auto bg-cyan-100'>
            <div className='container py-4'>
                <div className='text-center mx-auto pt-2 px-7'>
                    <h1 className='text-3xl font-bold'>What are <span className='text-blue-500'>Saying</span>Our Client</h1>
                    <p className='text-md text-gray-500 py-5 w-96 text-center mx-auto font-medium'>
                        The better impression it would make. An Agency,The better impression it would make. An Agency.
                    </p>
                </div>
                <div className='mx-auto'>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 p-2 mx-auto ml-7 mr-0'>
                        {
                            reviews.map(review => (
                                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-2 p-7 bg-slate-50 mx-auto rounded'>
                                    <img src={review.img} className="rounded-xl" alt='' />
                                    <div className='p-4'>
                                        <p>{review.text}</p>
                                        <h2 className='pt-4 text-xl font-bold'>{review.name}</h2>
                                        <h4>{review.title}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;