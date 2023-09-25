import React from 'react';
import DonationDiv from './DonationDiv';

const DonatioMother = ({data,searchInput}) => {
      // console.log(searchInput,"d6");
      // console.log(searchInput,7);
      // console.log('hello');
      return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 ml-[70px] lg:ml-0'>
                  {
                        data?.filter(df =>!searchInput?true: df.category.toUpperCase() === searchInput.toUpperCase()).map(data =><DonationDiv key={data.id} data={data}></DonationDiv>)
                  }
            </div>
      );
};

export default DonatioMother;