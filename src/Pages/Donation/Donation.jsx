import React, { useEffect, useState } from 'react';
import SuccessDonationCard from './SuccessDonationCard';
import Statistics from '../Statistics/Statistics';

const Donation = () => {
      const [succesDonation, setSuccesDonation] = useState([]);
      const [notFound, setNotFound] = useState("");
      
      const [isShow, setIsShow] = useState(false)
      useEffect(() => {
            const donateItems = JSON.parse(localStorage.getItem("donates"));
            if (donateItems) {
                  setSuccesDonation(donateItems)
                  
            } else {
                  setNotFound("No data Found")
            }
      }, [])
      
      return (
            <div className='mb-14'>

                  {
                        notFound ? <p className='h-[80vh] flex justify-center items-center text-4xl text-red-600'> {notFound} !!</p> : <div>

                              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5'>
                                    
                                    {
                                          isShow ? succesDonation.map(data => <SuccessDonationCard key={data.id} data={data} ></SuccessDonationCard>)
                                                : succesDonation.slice(0, 4).map(data => <SuccessDonationCard key={data.id} data={data} ></SuccessDonationCard>)
                                    }
                              </div>
                              {succesDonation.length >= 4 && !isShow ? (
                                    <div className="text-center mt-12">
                                          <button
                                                onClick={() => setIsShow(true)}
                                                className="bg-green-700 text-white px-5 py-2"
                                          >
                                                See All
                                          </button>
                                    </div>
                              ) : (
                                    ''
                              )}
                        </div>
                  }
            </div>
      );
};

export default Donation;