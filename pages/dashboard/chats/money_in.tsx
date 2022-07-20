import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from '@chakra-ui/react';
const dash = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 0,
        pv: 0,
        amt: 0,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page B',
        uv: 0,
        pv: 0,
        amt: 0,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page B',
        uv: 0,
        pv: 0,
        amt: 0,
    },
    {
        name: 'Page D',
        uv: 3780,
        pv: 2908,
        amt: 2000,
    }

];

function MoneyIn ()  {

        return (
            <BarChart width={80} height={80} data={dash}>
                <Bar dataKey="uv" fill='rgba(8, 167, 48, 1)' />
            </BarChart>
        );
    
}


export default MoneyIn