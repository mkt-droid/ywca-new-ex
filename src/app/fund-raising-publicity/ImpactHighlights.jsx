"use client";
import React from 'react';
import CountUp from 'react-countup';

export default function ImpactHighlights() {
  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
      <h2 className="sectionTitle_2 text-center" style={{ marginBottom: '30px' }}>Impact Highlights</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-4 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '12px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#BE00C4', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={200} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} />
            </h4>
            <p style={{ margin: 0, fontWeight: 500, fontSize: '0.95rem' }}>participants engaged in Awareness and Waste Collection Walks</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '12px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#BE00C4', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={3200} duration={2.5} separator="," enableScrollSpy={true} scrollSpyOnce={true} /> <span style={{ fontSize: '1.2rem' }}>kgs</span>
            </h4>
            <p style={{ margin: 0, fontWeight: 500, fontSize: '0.95rem' }}>of kitchen waste collected and processed through sustainable waste management systems</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '12px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#BE00C4', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={432} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} /> <span style={{ fontSize: '1.2rem' }}>kgs</span>
            </h4>
            <p style={{ margin: 0, fontWeight: 500, fontSize: '0.95rem' }}>of organic manure produced from recycled kitchen waste</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '12px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#BE00C4', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={1000} duration={2.5} separator="," suffix="+" enableScrollSpy={true} scrollSpyOnce={true} /> <span style={{ fontSize: '1.2rem' }}>L</span>
            </h4>
            <p style={{ margin: 0, fontWeight: 500, fontSize: '0.95rem' }}>of wastewater are reused daily</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '12px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#BE00C4', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={84} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} /> <span style={{ fontSize: '1.2rem' }}>kgs</span>
            </h4>
            <p style={{ margin: 0, fontWeight: 500, fontSize: '0.95rem' }}>of plastic waste collected for recycling initiatives</p>
          </div>
        </div>
      </div>
    </div>
  );
}
