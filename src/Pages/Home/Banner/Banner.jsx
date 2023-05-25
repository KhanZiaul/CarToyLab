import React from 'react';
import image1 from '../../../assets/images/car3.png'
import image2 from '../../../assets/images/car2.png'
import image3 from '../../../assets/images/car1.png'

const Banner = () => {
    return (
        <div data-aos="fade-up" className="carousel w-full h-[200px] lg:h-[450px] my-10 bg-slate-100">
            <div id="slide1" className="carousel-item relative w-full py-6">
                <img className='w-[70%]  mx-auto' src={image1} />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full py-6">
                <img src={image2} className='w-[70%]  mx-auto' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full py-6">
                <img src={image3} className='w-[70%]  mx-auto' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;