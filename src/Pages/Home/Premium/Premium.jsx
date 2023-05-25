import React, { useEffect, useState } from 'react';
import { TbChessQueen } from 'react-icons/tb';

const Premium = () => {

    const [premium, setPremium] = useState([])
    useEffect(() => {
        fetch(`https://react-toys-server.vercel.app/premium`)
            .then(res => res.json())
            .then(datas => setPremium(datas))
    }, [])
    
    return (
        <div>
            <h2 className='text-5xl font-semibold text-center my-12'>PREMIUM COLLECTIONS</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                {premium?.map(data => {
                    return (
                        <div key={data._id} data-aos="fade-up" className='border-2 border-gray-100 drop-shadow-lg'>
                            <img className='w-full h-64 hover:opacity-20 rounded-md' src={data.image} alt="" />
                            <h2 className='absolute top-0 right-0 bg-zinc-800 font-semibold text-white text-xl inset-0 rounded-md opacity-75 p-5 cursor-pointer'><TbChessQueen className='text-yellow-500 w-8 h-8'></TbChessQueen> <span className='block'>only for premium customer</span> </h2>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Premium;