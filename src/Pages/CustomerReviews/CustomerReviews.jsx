import React, { useEffect, useState } from 'react';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://react-toys-server.vercel.app/reviews')
            .then(res => res.json())
            .then(datas => setReviews(datas))
    }, [])
    return (
        <div data-aos="zoom-in">
            <h2 className='text-5xl font-semibold text-center my-12'>CUSTOMER REVIEWS</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.map(customer => {
                        return (
                            <div key={customer._id} data-aos="fade-up">
                                <div className='border-2 rounded-md p-5 cursor-pointer h-[500px] bg-slate-100'>
                                    <div >
                                        <img className='w-60 h-60 rounded-full mx-auto' src={customer.image} alt="" />
                                    </div>
                                    <h2 className='text-3xl font-semibold text-center my-4'>{customer.name}</h2>
                                    <p className='font-semibold'><span className='font-bold'>Review</span> : {customer.review}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default CustomerReviews;