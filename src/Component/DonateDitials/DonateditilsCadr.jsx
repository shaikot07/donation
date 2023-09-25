import React from 'react';
import swal from 'sweetalert';

const DonateditilsCadr = ({ donateDitilas }) => {
      // console.log(donateDitilas);
      const { id,image, price, title, description,backgroundColor, thirdBackgroundColor } = donateDitilas || {};

      const handleAddedDonatelList= ()=>{
            const addedDonateArray =[];
            const donateItems = JSON.parse(localStorage.getItem("donates"));

            if(!donateItems){
                  addedDonateArray.push(donateDitilas);
                  localStorage.setItem("donates", JSON.stringify(addedDonateArray));
                  swal("Good job!", "Donation success!", "success");
            }
            else{
                  const isExits = donateItems.find((item) => item.id === id);

                  if(!isExits){
                        addedDonateArray.push(...donateItems,donateDitilas);
                        localStorage.setItem("donates", JSON.stringify(addedDonateArray));
                        swal("Good job!", "Donation success!", "success");
                  }else{
                        swal("Error!", "Already Donate!", "error")
                  }
            }
      }
      return (
            <div className='flex justify-center mt-2'>
                  <div className="relative flex max-w-2xl h-[80vh] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                              <img className='w-full'
                                    src={image}
                                    alt="ui/ux review check"
                              />
                        </div>
                        <div className='bg-[#0B0B0B80] h-[100px] -mt-[92px] z-50 p-5'>
                              <button onClick={handleAddedDonatelList} style={{backgroundColor : thirdBackgroundColor}} className='text-white px-5 py-2 rounded-md '>Donate $ {price}</button>
                        </div>
                        <div className="p-6">
                              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                   {title}
                              </h4>
                              <p className="mt-3 block ">
                                    {description}
                              </p>
                        </div>
                        
                  </div>
            </div>
      );
};

export default DonateditilsCadr;