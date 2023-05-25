import React from 'react';
import error from '../../../assets/images/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img className='lg:w-[40%] lg:h-[40%] mx-auto' src={error} alt="error-image" />
            <Link to='/'>
                <button className='p-5 bg-sky-800 text-white rounded-full block mx-auto my-4 hover:bg-sky-900 font-semibold border-8 border-slate-500'>BACK TO HOME</button>
            </Link>
        </div>
    );
};

export default Error;