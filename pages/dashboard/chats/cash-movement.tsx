import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
 
  {
    name: 'Aug',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  
];

type dataProps = {
  data: object | any
}

const CashMovement = ({data}: dataProps) =>  {
  const [data_, setdata] = useState<any>([])

  useEffect(() => {
    const arr = [
      {
        name: 'Aug',
        uv: 0,
        pv: 0,
        amt: 0,
      },
      {
        name: 'Sep',
        uv: data?.moneyin / 100,
        pv: data?.moneyin / 100,
        amt: 2100,
      },
    ]
    setdata(arr);
  }, [])

    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data_}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend />
          <Bar dataKey="pv" fill="rgba(255, 0, 34, 1)" />
          <Bar dataKey="uv" fill="rgba(8, 167, 48, 1)" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}

export default CashMovement
