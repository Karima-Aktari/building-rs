import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import RecentProperties from '../RecentProperties/RecentProperties';
import TradingProperties from '../TradingProperties/TradingProperties';

const Home = () => {
    return (
        <div className="mx-auto">
            <Banner />
            <Brands />
            <AboutUs />
            <TradingProperties />
            <RecentProperties />
        </div>
    );
};

export default Home;