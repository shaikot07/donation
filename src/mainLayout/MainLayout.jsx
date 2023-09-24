import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Header/Navbar/Navbar';



const MainLayout = () => {
      return (
            <div className='max-w-7xl mx-auto'>
                 <Navbar></Navbar>
                 <div className=''>
                  <Outlet></Outlet>
                 </div>
            </div>
      );
};

export default MainLayout;