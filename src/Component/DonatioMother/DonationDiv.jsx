import React from 'react';
import { Link } from 'react-router-dom';

const DonationDiv = ({ data }) => {
      console.log(data);
      const { id, image, title, category, backgroundColor, title_background_color, color, additionalBackgroundColor } = data || {}
      return (
            <div>
                  <Link to={`/donationDiv/${id}`} className=''>
                  <div className="relative flex w-[300px] flex-col rounded-xl ">
                        <img
                              src={image}
                              alt="img-blur-shadow"

                        />
                        <div style={{ backgroundColor }} className="p-6  ">
                              <div style={{ backgroundColor: additionalBackgroundColor }} className='inline-block px-3 rounded-md'>
                                    <h5 style={{ color }} className="mb-2 block font-sans  font-semibold  ">
                                          {category}
                                    </h5 >
                              </div>
                              <h5 style={{ color }} className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                                    {title}
                              </h5>

                        </div>

                  </div>
                  </Link>
            </div>
      );
};

export default DonationDiv;