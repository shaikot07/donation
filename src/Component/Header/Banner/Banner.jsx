import React, { useState } from 'react';


const Banner = ({setSearchInput,searchInput}) => {
      
     
      // console.log(searchInput,"b7");

      const bannerStyle = {
            backgroundImage: `url(https://i.ibb.co/ThPTBb9/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)`,
            backgroundSize: 'cover',
            position: 'relative',
            height: '70vh',
      };

      const overlayStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#FFFFFFF2',
      };

      const contentStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
      };

      const inputStyle = {
            padding: '10px',
            marginRight: '10px',
      };
     
      
      const handleSearch = () => {
            
      }
      return (
            <div className='h-[70vh] bg-green-300'>

                  <div style={bannerStyle}>
                        <div style={overlayStyle} className='bg-opacity-90'></div>
                        <div style={contentStyle} className='z-50'>
                              <h1 className='text-2xl md:text-4xl mb-5 font-bold text-black'>I Grow By Helping People In Need</h1>
                              <input className='text-black border border-gray-500 last:                 '
                                    type="text"
                                    placeholder="Enter keyword..."
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    style={inputStyle}
                              />
                              <button onClick={handleSearch} className='bg-[#FF444A] px-6 py-3'>Search</button>
                        </div>
                  </div>
 
            </div>
      );
};

export default Banner;