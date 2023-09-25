import React, { useEffect, useState } from 'react';
import Banner from '../../Component/Header/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import DonatioMother from '../../Component/DonatioMother/DonatioMother';


const Home = () => {
      const data = useLoaderData()
      const [searchInput, setSearchInput]=useState("")
      // console.log(searchInput);
      // console.log(data);
      useEffect(()=>{
      //      console.log("helooo"); 
      },[searchInput])
      return (
            <div>
                  <p className='text-red-600'>{searchInput}</p>
                  <Banner setSearchInput={setSearchInput} searchInput={searchInput}></Banner>
                  <DonatioMother data={data} searchInput={searchInput}></DonatioMother>
            </div>
      );
};

export default Home;