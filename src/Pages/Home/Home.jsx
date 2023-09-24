import React from 'react';
import Banner from '../../Component/Header/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import DonatioMother from '../../Component/DonatioMother/DonatioMother';

const Home = () => {
      const data = useLoaderData()
      // console.log(data);
      return (
            <div>
                  <Banner></Banner>
                  <DonatioMother data={data}></DonatioMother>
            </div>
      );
};

export default Home;