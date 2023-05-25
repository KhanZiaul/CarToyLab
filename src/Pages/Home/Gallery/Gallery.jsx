import React, { useEffect, useState } from 'react';
const Gallery = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('https://react-toys-server.vercel.app/gallery')
            .then(res => res.json())
            .then(allData => setDatas(allData))
    }, [])

    return (
        <div data-aos="zoom-in">
            <h2 className='text-center text-4xl font-bold my-8'>Gallery</h2>

            <p className='text-center font-semibold my-8'>Roaring Wheels and Imaginative Thrills: Exploring the World of Car Toys Through a Captivating Photo Gallery</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                {datas?.map(data => {
                    return (
                        <div key={data._id} data-aos="fade-up" className='border-2 border-gray-100 drop-shadow-lg'>
                            <img className='w-full h-64 hover:opacity-20 rounded-md' src={data.image_url} alt="" />
                            <h2 className='absolute top-0  bg-zinc-800 font-semibold text-white text-2xl inset-0 rounded-md opacity-0 hover:opacity-75 p-5 cursor-pointer'>{data.name}</h2>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default Gallery;