import React, { useContext, useState } from 'react';
import useTitle from '../../../useTitle/useTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider.jsx/AuthProvider';
import { GrGoogle } from "react-icons/gr";
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
const Register = () => {
    useTitle('Register')
    const { createUser , signInPopup} = useContext(AuthContext)
    const [text, setText] = useState('')
    const [isTrue, setIsTrue] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    function registerHandler(event) {
        event.preventDefault()
        const Name = event.target.name.value;
        const PhotoUrl = event.target.photoUrl.value;
        const Email = event.target.email.value;
        const Password = event.target.password.value;

        createUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                setText('Successfully Register')
                setIsTrue(true)
                updateUser(userCredential.user, Name, PhotoUrl)

            })
            .catch((error) => {
                const errorMessage = error.message;
                setText(errorMessage)
                setIsTrue(false)
            });
    }

    function updateUser(user, name, url) {
        updateProfile(user, {
            displayName: name, photoURL: url
        }).then(() => {

        }).catch((error) => {

        });
    }

    function googlePopup() {
        signInPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                setText('Successfully Register')
                setIsTrue(true)
   
            }).catch((error) => {
                const errorMessage = error.message;
                setText(errorMessage)
                setIsTrue(false)
            });
    }


    return (
        <div>

                <div className="hero-content flex-col ">
                    <form onSubmit={registerHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-2xl font-bold text-center my-5">Register</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='photoUrl' type="url" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                                <label className="label mt-3">
                                    <Link to='/login' className="label-text-alt">Already have an account ? <span className='link link-hover text-blue-700'>Login Now</span> </Link>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <small className={`text-center mb-5 font-semibold ${isTrue ? 'text-green-700' : 'text-red-700'}`}>{text}</small>
                                <button className=' text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700'>Register</button>
                            </div>

                            <div onClick={googlePopup} className='inline-block'>
                                <div className='cursor-pointer border-2 flex mt-4 items-center text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700  gap-5 justify-center'>
                                    <GrGoogle/>
                                    <span>Google Sign-in</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


        </div>
    );
};

export default Register;