import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScroll from '../../useScroll/useScroll';
import useTitle from '../../useTitle/useTitle';

const AllToys = () => {

    const location = useLocation()
    useScroll(location.pathname)
    useTitle('AllToys')

    const [categorys, setCategorys] = useState([])
    const [searchtext, setSearchText] = useState([])

    useEffect(() => {
        fetch('https://react-toys-server.vercel.app/allCategory')
            .then(res => res.json())
            .then(datas => {
                setCategorys(datas)
            })
    }, [])

    let i = 1;
    let k = 0;

    function handleSearch(){
        fetch(`https://react-toys-server.vercel.app/searchToysByText/${searchtext}`)
        .then(res => res.json())
        .then(datas =>{
            setCategorys(datas)
        })
    }

    return (
        <div className='my-10'>
            <div className='flex flex-col lg:flex-row gap-5 my-8 lg:w-1/4 mx-auto'>
                <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mx-auto" />
                <button onClick={handleSearch} className=' text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700'>serach</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categorys?.map(ct => {
                                
                                    return (
                                        <tr key={k++}>
                                            <th>{i++}</th>
                                            <td>{ct.sellerName}</td>
                                            <td>{ct.categoryName}</td>
                                            <td>{ct.Name}</td>
                                            <td>${ct.Price}</td>
                                            <td>{ct.Quantity}</td>
                                            <td><Link to={`/toy/${ct._id}`}>
                                                <button className=' text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700'>View Details</button>
                                            </Link></td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;