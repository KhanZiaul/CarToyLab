import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import useScroll from '../../../useScroll/useScroll';
import useTitle from '../../../useTitle/useTitle';

const ToysDetails = () => {
    const details = useLoaderData()
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('ToysDetails')

    return (
        <div className='w-full lg:w-[50%] border-2 border-blue-100 my-10 mx-auto p-7 rounded-lg text-center bg-slate-100 shadow-2xl'>
            <img className='mx-auto rounded-md w-[300px] h-[300px]' src={details?.Picture} alt="" />
            <p className='text-xl font-semibold my-3'> Toy Name : {details.Name}</p>
            {
                details?.sellerName ?
                    <p className='text-xl font-semibold my-3'> Seller Name : {details.sellerName
                    }</p> : ' '
            }
            {
                details?.sellerEmail ?
                    <p className='text-xl font-semibold my-3'> Seller Email : {details.sellerEmail
                    }</p> : ' '
            }
            <p className='text-xl font-semibold my-3'> Price : ${details.Price}</p>
            <p className='text-xl font-semibold my-3'> Rating : {details.Rating}</p>
            <p className='text-xl font-semibold my-3'> Available Quantity : {details.Quantity}</p>
            <p className='text-xl font-semibold my-3'> Detail Description : <br /> <span className='text-justify block mt-2'>{details.Detail}</span> </p>
        </div>
    );
};

export default ToysDetails;