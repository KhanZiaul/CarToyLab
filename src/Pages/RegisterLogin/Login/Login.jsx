import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../useTitle/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Provider/AuthProvider.jsx/AuthProvider';
import { GrGoogle } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    useTitle('Login')
    const { signInPopup, resetPassword, signInUser } = useContext(AuthContext)

    const [text, setText] = useState('')
    const [isTrue, setIsTrue] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const reference = useRef()

    const location = useLocation()
    console.log(location)
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()

    function loginHandler(event) {
        event.preventDefault()
        const Email = event.target.email.value;
        const Password = event.target.password.value;

        signInUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                setText('Successfully Login')
                setIsTrue(true)
                navigate(from , { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setText(errorMessage)
                setIsTrue(false)
            });
    }

    function googlePopup() {
        signInPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                setText('Successfully Login')
                setIsTrue(true)
                navigate(from , { replace: true })

            }).catch((error) => {
                const errorMessage = error.message;
                setText(errorMessage)
                setIsTrue(false)
            });
    }

    function passwordResetHandler() {
        const Email = reference.current.value;

        if (!Email) {
            toast("enter your email first")
            return
        }

        resetPassword(Email)
            .then(() => {
                toast("password reset email send")
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    return (
        <div>
            <div className="hero-content flex-col ">
                <form onSubmit={loginHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-bold text-center my-5">Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={reference} name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <Link onClick={passwordResetHandler} className="label-text-alt link link-hover text-blue-700">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <Link to='/register' className="label-text-alt">New to CarToyLab ? <span className='link link-hover text-blue-700'>Register Now</span> </Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <small className={`text-center mb-5 font-semibold ${isTrue ? 'text-green-700' : 'text-red-700'}`}>{text}</small>
                            <button className=' text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700'>Login</button>
                        </div>

                        <div onClick={googlePopup} className='inline-block'>
                            <div className='cursor-pointer border-2 flex mt-4 items-center text-white py-3 px-6 font-bold rounded-xl bg-sky-500 hover:bg-sky-700  gap-5 justify-center'>
                                <GrGoogle />
                                <span>Google Sign-in</span>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;