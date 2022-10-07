import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const series = [
  {
    name: "Series 1",
    data: [
      { category: "Jan", value: Math.random() },
      { category: "Feb", value: Math.random() },
      { category: "Mar", value: Math.random() },
      { category: "Apr", value: Math.random() },
      { category: "May", value: Math.random() },
      { category: "Jun", value: Math.random() },
      { category: "Jul", value: Math.random() },
      { category: "Aug", value: Math.random() },
      { category: "Sep", value: Math.random() },
      { category: "Oct", value: Math.random() },
      { category: "Nov", value: Math.random() },
      { category: "Dec", value: Math.random() },
    ],
    color: "rgba(8, 167, 48, 1)",
  },
  {
    name: "Series 2",
    data: [
      { category: "Jan", value: Math.random() },
      { category: "Feb", value: Math.random() },
      { category: "Mar", value: Math.random() },
      { category: "Apr", value: Math.random() },
      { category: "May", value: Math.random() },
      { category: "Jun", value: Math.random() },
      { category: "Jul", value: Math.random() },
      { category: "Aug", value: Math.random() },
      { category: "Sep", value: Math.random() },
      { category: "Oct", value: Math.random() },
      { category: "Nov", value: Math.random() },
      { category: "Dec", value: Math.random() },
    ],
    color: "rgba(255, 149, 0, 1)",
  },
  {
    name: "Series 3",
    data: [
      { category: "Jan", value: Math.random() },
      { category: "Feb", value: Math.random() },
      { category: "Mar", value: Math.random() },
      { category: "Apr", value: Math.random() },
      { category: "May", value: Math.random() },
      { category: "Jun", value: Math.random() },
      { category: "Jul", value: Math.random() },
      { category: "Aug", value: Math.random() },
      { category: "Sep", value: Math.random() },
      { category: "Oct", value: Math.random() },
      { category: "Nov", value: Math.random() },
      { category: "Dec", value: Math.random() },
    ],
    color: "rgba(175, 82, 222, 1)",
  },
  {
    name: "Series 4",
    data: [
      { category: "Jan", value: Math.random() },
      { category: "Feb", value: Math.random() },
      { category: "Mar", value: Math.random() },
      { category: "Apr", value: Math.random() },
      { category: "May", value: Math.random() },
      { category: "Jun", value: Math.random() },
      { category: "Jul", value: Math.random() },
      { category: "Aug", value: Math.random() },
      { category: "Sep", value: Math.random() },
      { category: "Oct", value: Math.random() },
      { category: "Nov", value: Math.random() },
      { category: "Dec", value: Math.random() },
    ],
    color: "rgba(0, 122, 255, 1)",
  },
];

type dataProps = {
  data: object | any
}

const MoneyInMoneyOut = ({data}: dataProps) => {
  const [data_, setData] = useState([]);

  console.log('data====', data)
  const series_ = [
    {
      name: "Series 1",
      data: [
       
        { category: "Aug", value: 0 },
        { category: "Sep", value: data?.moneyin }

      ],
      color: "rgba(8, 167, 48, 1)",
    },
    {
      name: "Series 2",
      data: [
        
        { category: "Aug", value: 0 },
        { category: "Sep", value: data?.direct_materials  }
       
      ],
      color: "rgba(255, 149, 0, 1)",
    },
    {
      name: "Series 3",
      data: [
       
        { category: "Aug", value: 0 },
        { category: "Sep", value: data?.overhead},
        
      ],
      color: "rgba(175, 82, 222, 1)",
    },
    {
      name: "Series 4",
      data: [
    
        { category: "Aug", value: 0 },
        { category: "Sep", value: data?.direct_labour },
       
      ],
      color: "rgba(0, 122, 255, 1)",
    },
  ];

  useEffect(() => {}, []);

  return (
    <ResponsiveContainer width="100%" height="80%">
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          type="category"
          allowDuplicatedCategory={false}
        />
        <YAxis dataKey="value" />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        {series_.map((s) => (
          <Line
            dataKey="value"
            strokeWidth={3}
            color="rgba(255, 0, 34, 1)"
            stroke={s.color}
            data={s.data}
            name={s.name}
            key={s.name}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MoneyInMoneyOut;
