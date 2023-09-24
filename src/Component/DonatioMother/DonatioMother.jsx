import React from 'react';
import DonationDiv from './DonationDiv';

const DonatioMother = ({data}) => {
      return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
                  {
                        data?.map(data =><DonationDiv key={data.id} data={data}></DonationDiv>)
                  }
            </div>
      );
};

export default DonatioMother;