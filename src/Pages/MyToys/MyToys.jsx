import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScroll from '../../useScroll/useScroll';
import useTitle from '../../useTitle/useTitle';
import { AuthContext } from '../../Provider/AuthProvider.jsx/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {

    const { user } = useContext(AuthContext)

    const location = useLocation()
    useScroll(location.pathname)
    useTitle('MyToys')

    const [categorys, setCategorys] = useState([])
    const [isAscending, setIsAcending] = useState(false)
    const [isTrue, setIsTrue] = useState([true])

    useEffect(() => {
        fetch(`https://react-toys-server.vercel.app/myCategory?email=${user?.email}&isAscending=${isAscending}`)
            .then(res => res.json())
            .then(datas => {
                setCategorys(datas)
            })
    }, [isTrue, isAscending, user])

    let i = 1;
    let k = 0;

    function handleDelete(id) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://react-toys-server.vercel.app/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        setIsTrue(!isTrue)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    function ascendingHandler() {
        setIsAcending(true)
    }

    function descendingHandler() {
        setIsAcending(false)
    }

    return (
        <div className='my-10'>
            <div className='flex gap-5 my-12'>
                <button onClick={ascendingHandler} className=' text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700'>Ascending Order</button>
                <button onClick={descendingHandler} className=' text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700'>Descending Order</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
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
                                        <td>
                                            <Link to={`/updateToy/${ct._id}`}>
                                                <button className='btn bg-green-800 hover:bg-green-900'>Update</button>
                                            </Link>

                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(ct._id)} className='btn bg-red-600 hover:bg-red-700'>Delete</button>
                                        </td>
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

export default MyToys;