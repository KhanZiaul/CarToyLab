import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useScroll from '../../useScroll/useScroll';
import useTitle from '../../useTitle/useTitle';
import { AuthContext } from '../../Provider/AuthProvider.jsx/AuthProvider';

const AddAToy = () => {

    const { user } = useContext(AuthContext)

    const location = useLocation()
    useScroll(location.pathname)
    useTitle('AddAToy')

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
            Price: parseInt(Price),
            Rating: parseInt(Rating),
            Quantity,
            sellerName,
            sellerEmail,
            Detail
        }

        fetch(`https://react-toys-server.vercel.app/allCategory`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })

        event.target.reset()
    }

    return (
        <div className='my-10'>
            <div className=" flex-col lg:flex-row-reverse">

                <form onSubmit={formHandler} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select A Category</span>
                            </label>
                            <select name='category' className="select select-bordered w-full max-w-xs" required>
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
                                <input name='photo' type="url" placeholder="photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input defaultValue={user?.displayName ? user?.displayName : ''} name='sellerName' type="text" placeholder="seller name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input value={user?.email} name='sellerEmail' type="email" placeholder="seller email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub Category</span>
                                </label>
                                <input name='subCategory' type="text" placeholder="sub category" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='price' type="text" placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input name='rating' type="text" placeholder="rating" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input name='availableQuantity' type="text" placeholder="available quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label>
                                <input name='detailDescription' type="text" placeholder="detail description" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className=' text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700'>Add A Toy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;