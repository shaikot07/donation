import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
      return (
            <div className='text-center mt-60'>
                  <h2 className='text-red-600 text-4xl text-center'>Oooops!!</h2>
                  <h2 className='text-red-600 text-2xl text-center'>Data not Found</h2>
                  <Link to='/'><button className='bg-red-600 text-white px-5 py-2 rounded-md mt-5'>Go back Home</button></Link>
            </div>
      );
};

export default ErrorPage;