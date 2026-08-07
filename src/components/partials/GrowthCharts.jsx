"use client";
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from '@/app/community-development-programme/impact/page.module.css';

const womenReachedData = [
  { year: '2019', reached: 2500 },
  { year: '2020', reached: 3200 },
  { year: '2021', reached: 4100 },
  { year: '2022', reached: 5800 },
  { year: '2023', reached: 8500 },
  { year: '2024', reached: 12000 },
];

const vocationalTrainingData = [
  { year: '2019', completions: 400 },
  { year: '2020', completions: 550 },
  { year: '2021', completions: 800 },
  { year: '2022', completions: 1200 },
  { year: '2023', completions: 2100 },
  { year: '2024', completions: 3200 },
];

export default function GrowthCharts() {
  return (
    <div className="row g-4 mt-3">
      <div className="col-md-6 text-center">
        <div style={{ background: '#fff', padding: '30px 20px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #eaeaea', height: '100%' }}>
          <h3 style={{ color: '#242278', marginBottom: '30px', fontWeight: 600, fontSize: '1.2rem' }}>Women reached per year</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={womenReachedData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eaeaea" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#666' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#666' }} dx={-10} />
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}
                />
                <Line type="monotone" dataKey="reached" stroke="#BE00C4" strokeWidth={4} activeDot={{ r: 6, fill: '#BE00C4', stroke: '#fff', strokeWidth: 2 }} name="Women Reached" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="col-md-6 text-center">
        <div style={{ background: '#fff', padding: '30px 20px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #eaeaea', height: '100%' }}>
          <h3 style={{ color: '#242278', marginBottom: '30px', fontWeight: 600, fontSize: '1.2rem' }}>Vocational training completions</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vocationalTrainingData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eaeaea" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#666' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#666' }} dx={-10} />
                <Tooltip
                  cursor={{ fill: '#f8f9fa' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}
                />
                <Bar dataKey="completions" fill="#0dcaf0" radius={[6, 6, 0, 0]} name="Completions" barSize={45} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
