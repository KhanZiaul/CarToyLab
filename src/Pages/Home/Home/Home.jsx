import React from 'react';
import { useLocation } from 'react-router-dom';
import useScroll from '../../../useScroll/useScroll';
import useTitle from '../../../useTitle/useTitle';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import AboutUs from '../AboutUs/AboutUs';
import Premium from '../Premium/Premium';
import CustomerReviews from '../../CustomerReviews/CustomerReviews';
import ExpertServices from '../ExpertServices/ExpertServices';


const Home = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('Home')
    return (
        <div>

            <div className='flex flex-col lg:flex-col-reverse '>
                <div data-aos="fade-up" className='flex flex-col lg:flex-row items-center my-20 gap-10'>

                    <img className='w-full lg:w-3/6 rounded-md' src="https://images.unsplash.com/photo-1642338269009-cd4aa00bcb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="banner" />

                    <div>
                        <h2 className='text-5xl font-semibold mb-7'>Igniting Speed and Excitement - Explore Our Thrilling Car Toy Collection!</h2>
                        <p className='text-justify font-semibold'>
                            Rev up the Fun at
                            CarToyLab - Your Ultimate Destination for Car Toys! Unleash the thrill of speed and excitement with our extensive collection of car toys. From remote-controlled racers to classic die-cast models, we have the perfect wheels for every young enthusiast. Ignite their imagination and fuel their passion for cars at CarToyLab. Start their engines today! </p>
                    </div>

                </div>
                <div>
                    <Banner></Banner>
                </div>
            </div>

            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Premium></Premium>
            <CustomerReviews></CustomerReviews>
            <AboutUs></AboutUs>
            <ExpertServices></ExpertServices>
        </div>
    );
};

export default Home;