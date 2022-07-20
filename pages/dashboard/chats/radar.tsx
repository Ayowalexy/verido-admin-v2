import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Jan',
    A: 120,
    B: 20,
    fullMark: 150,
  },
  {
    subject: 'Feb',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Mar',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Apr',
    A: 120,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'May',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Jun',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

class CashFlow extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Money in" dataKey="A" stroke="#08A730" fill="#08A730" fillOpacity={1} />
          <Radar name="Money out" dataKey="B" stroke="#FF3B30" fill="#FF3B30" fillOpacity={1} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}


export default CashFlow