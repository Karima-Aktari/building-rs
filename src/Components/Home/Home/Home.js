import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import RecentProperties from '../RecentProperties/RecentProperties';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TradingProperties from '../TradingProperties/TradingProperties';

const Home = () => {
    return (
        <div className="mx-auto">
            <Banner />
            <Brands />
            <AboutUs />
            <TradingProperties />
            <Services />
            <RecentProperties />
            <Reviews />

            <Footer />
        </div>
    );
};

export default Home;