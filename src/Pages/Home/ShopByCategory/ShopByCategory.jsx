import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider.jsx/AuthProvider';
import Swal from 'sweetalert2';

const ShopByCategory = () => {

    const [categories, setCategories] = useState([]);
    const [categoryDetails, setCategoryDetails] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://react-toys-server.vercel.app/allCategory')
            .then(res => res.json())
            .then(data => setCategoryDetails(data))
    }, [])

    useEffect(() => {
        fetch('https://react-toys-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    function toyDetailsHandler() {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Sorry bro...',
                text: 'You have to log in first to view details'
            })
        }
    }

    return (
        <div className='my-20 '>
            <h2 className='text-center text-4xl font-bold my-8'>Shop By Category</h2>
            <p className='text-center font-semibold my-8'>Capture the excitement of high-performance vehicles with a dedicated category. Include catrgory like Sports, Truck , Regular etc</p>
            <div data-aos="zoom-in" className='w-[95%] mx-auto mt-20 p-8 rounded-md shadow-2xl'>
                <Tabs>
                    <TabList className='text-center text-2xl text-bold mb-10 flex lg:justify-around gap-7 lg:gap-0 flex-col lg:flex-row p-7 rounded-lg bg-slate-50 shadow-2xl'>
                        {categories?.map(ct => (
                            <Tab className='text-white py-3 px-8 font-semibold rounded-xl bg-sky-700 hover:bg-sky-800 shadow-2xl cursor-pointer' key={ct._id}>{ct.category}</Tab>
                        ))}
                    </TabList>

                    {categories?.map(ct => (
                        <TabPanel key={ct._id}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                                {categoryDetails?.map(details => (
                                    details.categoryName === ct.category && (
                                        <div className='mb-5' key={details._id}>

                                            <div className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl">
                                                <figure>
                                                    <img className='w-full lg:w-[350px] lg:h-[350px]' src={details.Picture} alt="" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{details.Name}</h2>
                                                    <p className='my-2 font-semibold'>Price : ${details.Price}</p>
                                                    <p className='my-2 font-semibold'>Quantity : {details.Quantity}</p>
                                                    <p className='my-2 font-semibold'>Rating : {details.Rating}</p>
                                                    <div onClick={toyDetailsHandler} className="card-actions justify-end">
                                                        <Link to={`/toy/${details._id}`}>
                                                            <button className="text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700">View Details</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>

            </div>
        </div>
    );
};

export default ShopByCategory;