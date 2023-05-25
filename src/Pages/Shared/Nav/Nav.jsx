import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import { AuthContext } from '../../../Provider/AuthProvider.jsx/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Nav = () => {

    const { user, logOut } = useContext(AuthContext)

    function logOutHandler() {
        logOut().then(() => {

        }).catch((error) => {

        });
    }


    return (
        <div className="navbar bg-blue-500 text-black lg:text-white px-4 rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        {
                            user ?
                                <>
                                    <li><Link to='/myToys'>My Toys</Link></li>
                                    <li><Link to='/addToy'>Add A Toy</Link></li>
                                </> : ' '
                        }
                        <li><Link to='/blog'>Blogs</Link></li>
                        
                            {
                                user ?
                                    <div className='flex flex-col gap-5'>
                                        <div>
                                            {
                                                user?.photoURL ? <img title={user.displayName} src={user.photoURL} className='w-10 h-10 ms-3 my-3 rounded-full cursor-pointer' alt="" />
                                                    :
                                                    <div >
                                                        <FaUserAlt title={user.displayName} className='w-8 h-8 cursor-pointer' />
                                                    </div>
                                            }
                                        </div>
                                        <button onClick={logOutHandler} className=' mb-2 cursor-pointer bg-slate-600 text-white px-4 py-2 rounded-xl hover:bg-slate-800'>Log out</button>
                                    </div>
                                    :
                                    <Link to='/login' className='text-justify mb-2 cursor-pointer bg-slate-600 text-white px-6 py-3 rounded-xl hover:bg-slate-800'>Login</Link>
                            }
                        
                    </ul>
                </div>
                <div className='flex gap-3 items-center'>
                    <Link to='/'>
                        <img className='w-16 h-16 rounded-full' src={logo} alt="" />
                    </Link>

                    <Link to='/' className="text-2xl text-white">CarToyLab</Link>
                </div>
            </div>


            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/allToys'>All Toys</Link></li>
                    {
                        user ?
                            <>
                                <li><Link to='/myToys'>My Toys</Link></li>
                                <li><Link to='/addToy'>Add A Toy</Link></li>
                            </> : ' '
                    }
                    <li><Link to='/blog'>Blogs</Link></li>
                    {
                        user ?
                            <div className='flex flex-col md:flex-row items-center gap-5'>
                                <div>
                                    {
                                        user?.photoURL ? <img title={user.displayName} src={user.photoURL} className='w-11 h-11 rounded-full cursor-pointer' alt="" />
                                            :
                                            <div >
                                                <FaUserAlt title={user.displayName} className='w-8 h-8 cursor-pointer ' />
                                            </div>
                                    }
                                </div>
                                <button onClick={logOutHandler} className='text-justify mb-2 cursor-pointer bg-slate-600 text-white px-6 py-3 rounded-xl hover:bg-slate-800'>Log out</button>
                            </div>
                            :
                            <Link to='/login' className='text-justify mb-2 cursor-pointer bg-slate-600 text-white px-6 py-3 rounded-xl hover:bg-slate-800'>Login</Link>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Nav;