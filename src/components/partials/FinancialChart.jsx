"use client";
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const financialPieData = [
  { name: 'Programmes', value: 82, color: '#BE00C4' },
  { name: 'Community Outreach', value: 10, color: '#0dcaf0' },
  { name: 'Administration', value: 5, color: '#ffc107' },
  { name: 'Fundraising', value: 3, color: '#242278' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
  const inRad = innerRadius || 0;
  const radius = inRad + (outerRadius - inRad) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const fill = index === 2 ? '#000' : 'white';

  return (
    <text x={x} y={y} fill={fill} textAnchor="middle" dominantBaseline="central" fontWeight="500" fontSize="0.9rem">
      {`${value}%`}
    </text>
  );
};

export default function FinancialChart() {
  return (
    <div style={{ height: '350px', display: 'flex', justifyContent: 'center' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={financialPieData}
            cx="50%"
            cy="50%"
            outerRadius={140}
            dataKey="value"
            stroke="none"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {financialPieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => `${value}%`}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
