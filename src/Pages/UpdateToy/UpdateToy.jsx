import React, { useContext, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import useScroll from '../../useScroll/useScroll';
import useTitle from '../../useTitle/useTitle';
import { AuthContext } from '../../Provider/AuthProvider.jsx/AuthProvider';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const { user } = useContext(AuthContext)

    const location = useLocation()
    useScroll(location.pathname)
    useTitle('UpdateToys')

    const data = useLoaderData()

    function formHandler(event) {
        event.preventDefault()
        const categoryName = event.target.category.value;
        const Picture = event.target.photo.value;
        const sellerName = event.target.sellerName.value;
        const sellerEmail = event.target.sellerEmail.value;
        const Name = event.target.subCategory.value;
        const Price = event.target.price.value;
        const Rating = event.target.rating.value;
        const Quantity = event.target.availableQuantity.value;
        const Detail = event.target.detailDescription.value;

        const toy = {
            categoryName,
            Picture,
            Name,
            Price,
            Rating,
            Quantity,
            sellerName,
            sellerEmail,
            Detail
        }

        console.log(categoryName, Picture, Name, Price, Rating < Quantity, sellerName, sellerEmail, Detail)


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://react-toys-server.vercel.app/toy/${data?._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(toy)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'Your file has been Updated.',
                                'success'
                            )
                            event.target.reset()
                        }
                    })
            }
        })

    }

    return (
        <div className='my-10'>
            <div className=" flex-col lg:flex-row-reverse">

                <form onSubmit={formHandler} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Category</span>
                            </label>
                            <select value={data?.categoryName} name='category' className="select select-bordered w-full max-w-xs" required>
                                <option disabled selected>select a category</option>
                                <option>Sports</option>
                                <option>Truck</option>
                                <option>Regular</option>
                            </select>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input value={data?.Picture} name='photo' type="url" placeholder="photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input value={data?.sellerName} name='sellerName' type="text" placeholder="seller name" className="input input-bordered" required />
                            </div>

                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input value={data?.sellerEmail} name='sellerEmail' type="email" placeholder="seller email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub Category</span>
                                </label>
                                <input value={data?.Name} name='subCategory' type="text" placeholder="sub category" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input defaultValue={data?.Price} name='price' type="text" placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input value={data?.Rating} name='rating' type="text" placeholder="rating" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input defaultValue={data?.Quantity
                                } name='availableQuantity' type="text" placeholder="available quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label>
                                <input defaultValue={data?.Detail} name='detailDescription' type="text" placeholder="detail description" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className=' text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700'>Update A Toy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;