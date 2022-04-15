import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div className="mx-auto">
            <Banner />
            <Brands />
            <AboutUs />
        </div>
    );
};

export default Home;