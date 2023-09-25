import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonateditilsCadr from './DonateditilsCadr';

const DonateDitils = () => {
      const [donateDitilas, setDonateDitilas] = useState({});
      const {id} = useParams();
      const paramsid=parseInt(id)
      const data = useLoaderData();

      useEffect(()=>{
            const findData= data.find(((item) => item.id ===  paramsid));
            setDonateDitilas(findData)
            
      },[ paramsid,data])
      
     
      return (
            <div>
                  
                  <DonateditilsCadr donateDitilas={donateDitilas}></DonateditilsCadr>
            </div>
      );
};

export default DonateDitils;