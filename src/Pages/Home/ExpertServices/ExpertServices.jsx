import React from 'react';
import image1 from '../../../assets/images/delivery.jpg'
import image2 from '../../../assets/images/order.jpg'
import image3 from '../../../assets/images/certifcate.jpg'

const ExpertServices = () => {
    return (
        <div>
            <h2 className='text-5xl font-semibold text-center my-12'>OUR EXPERT SERVICES</h2>
            <div data-aos="fade-up" className='flex flex-col lg:flex-row gap-10 justify-center'>
                <div>
                    <img className='w-[500px] h-[500px] rounded-md' src={image1} alt="" />
                    <div data-aos="zoom-in" className='text-center'>
                        <h2 className='text-2xl my-3 text-bold border-2 p-5 inline-block rounded-lg bg-sky-500 text-white'>Timely Delivery</h2>
                    </div>
                </div>
                <div>
                    <img className='w-[500px] h-[500px] rounded-md' src={image2} alt="" />
                    <div data-aos="zoom-in" className='text-center'>
                        <h2 className='text-2xl my-3 text-bold border-2 p-5 inline-block rounded-lg bg-sky-500 text-white'>Hassle-Free Ordering</h2>
                    </div>
                </div>

            </div>
            <div data-aos="fade-up">
                <img className='w-[500px] h-[500px] rounded-md mx-auto mt-10' src={image3} alt="" />
                <div data-aos="zoom-in" className='text-center'>
                    <h2 className='text-2xl mt-3 mb-10 text-bold border-2 p-5 inline-block rounded-lg bg-sky-500 text-white'>Exceptional</h2>
                </div>
            </div>
        </div>
    );
};

export default ExpertServices;