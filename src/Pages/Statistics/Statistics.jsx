import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Label } from 'recharts';

const Statistics = () => {
  const data = useLoaderData([]);
  const donateItems = JSON.parse(localStorage.getItem("donates")) || [];

  const donatePercentage = ((donateItems.length / data.length) * 100).toFixed(2);
  const restPercentage = 100 - donatePercentage;

  const dataForPeyChart = [
    { name: 'Donated', value: parseFloat(donatePercentage) },
    { name: 'Rest', value: parseFloat(restPercentage) },
  ];

  return (
    <div>
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={dataForPeyChart}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              <Cell fill="#00C49F" />
              <Cell fill="#FF444A" />
              <Label
                value={`${donatePercentage}%`}
                position="centerLeft"
                fill="#00C49F" 
                fontSize={24}
              />
              <Label
                value={`${restPercentage}%`}
                position="insideBottom"
                fill="#FFF" 
                fontSize={30}
              />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className='flex justify-center items-center gap-5'>
          <p>Donation Percentage: {donatePercentage}% <span className='bg-[#00C49F] text-[#00C49F]'>hhhhhhhh</span></p>
          <p>Rest Percentage: {restPercentage}% <span className='bg-[#FF444A] text-[#FF444A]'>hhhhhhhh</span></p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
