import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import TradingProperties from '../TradingProperties/TradingProperties';

const Home = () => {
    return (
        <div className="mx-auto">
            <Banner />
            <Brands />
            <AboutUs />
            <TradingProperties />
        </div>
    );
};

export default Home;