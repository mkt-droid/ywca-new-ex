"use client";
import React from 'react';
import CountUp from 'react-countup';

export default function ImpactHighlights() {
  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
      <h2 className="sectionTitle_2 text-center" style={{ marginBottom: '30px' }}>The Rehome Store - Impact</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-3 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '8px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#293e99', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={200} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} />
            </h4>
            <p style={{ margin: 0, fontWeight: 400, fontSize: '0.88rem' }}>participants engaged in awareness and waste collection walks</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '8px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#293e99', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={3200} duration={2.5} separator="," enableScrollSpy={true} scrollSpyOnce={true} /> <span style={{ fontSize: '1.2rem' }}>kgs</span>
            </h4>
            <p style={{ margin: 0, fontWeight: 400, fontSize: '0.88rem' }}>of kitchen waste collected and processed through sustainable systems</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '8px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#293e99', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={432} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} /> <span style={{ fontSize: '1.2rem' }}>kgs</span>
            </h4>
            <p style={{ margin: 0, fontWeight: 400, fontSize: '0.88rem' }}>of organic manure produced from recycled kitchen waste of homes</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '8px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#293e99', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={1000} duration={2.5} separator="," suffix="+" enableScrollSpy={true} scrollSpyOnce={true} /> <span style={{ fontSize: '1.2rem' }}>L</span>
            </h4>
            <p style={{ margin: 0, fontWeight: 400, fontSize: '0.88rem' }}>of wastewater reused daily through sustainable water management</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 text-center">
          <div style={{ backgroundColor: '#fef7f7', padding: '25px 20px', borderRadius: '8px', height: '100%', border: '1px solid #f2dcdc', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h4 style={{ color: '#293e99', fontSize: '2.5rem', fontWeight: 600, marginBottom: '10px' }}>
              <CountUp end={84} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} /> <span style={{ fontSize: '1.2rem' }}>kgs</span>
            </h4>
            <p style={{ margin: 0, fontWeight: 400, fontSize: '0.88rem' }}>of plastic waste collected and directed towards recycling initiatives</p>
          </div>
        </div>
      </div>
    </div>
  );
}
