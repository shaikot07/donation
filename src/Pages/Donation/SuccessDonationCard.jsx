import React from 'react';

const SuccessDonationCard = ({ data }) => {
      console.log(data);
      const { id, image, title, category, backgroundColor,price, title_background_color, color, additionalBackgroundColor, thirdBackgroundColor } = data || {}
      return (
            <div>
                  
                  <div className="relative flex w-[600px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
                        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                              <img
                                    src={image}
                                    alt="image"
                                    className="h-full w-full object-cover"
                              />
                        </div>
                        <div style={{ backgroundColor }} className="p-6  w-full">
                              <div style={{ backgroundColor: additionalBackgroundColor }} className='inline-block px-3 rounded-md'>
                                    <h5 style={{ color }} className="mb-2 block font-sans  font-semibold  ">
                                          {category}
                                    </h5 >
                              </div>
                              <h5  className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                                    {title}
                              </h5>
                              <h5 style={{ color }} className="mb-2 block font-sans  font-semibold leading-snug tracking-normal antialiased">
                                    $ {price}
                              </h5>
                              <button style={{backgroundColor : thirdBackgroundColor}} className='text-white px-5 py-2 rounded-md '>View Details</button>

                        </div>
                  </div>
            </div>
      );
};

export default SuccessDonationCard;