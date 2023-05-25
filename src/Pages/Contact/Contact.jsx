import React from 'react';
import { useLocation } from 'react-router-dom';
import useScroll from '../../useScroll/useScroll';
import useTitle from '../../useTitle/useTitle';

const Contact = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('Contact')
    return (
        <div className='p-5'>
            <div className='my-10 border-2 p-10 mx-4'>
                <h2> Contact Us</h2>
                <p>
                    We'd love to hear from you! If you have any questions, comments, or feedback about our site, please don't hesitate to get in touch. Here are a few ways to reach us:</p>

                <p> Email: info@CarToyLab.com <br />
                    Phone: 1-800-123-4567 <br />
                    Address: Road # 01, Sadek Khan Rd, Dhaka 1207 <br />
                    Bangladesh</p>

                <p>Our customer service team is available 24/7 to assist you with any issues you may have. You can also connect with us on social media:</p>

                <p>
                    Facebook: @CarToyLab <br />
                    Twitter: @CarToyLab <br />
                    Instagram: @CarToyLab <br />
                </p>
            </div>
        </div>
    );
};

export default Contact;