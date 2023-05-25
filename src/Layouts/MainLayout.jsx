import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='p-5'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;