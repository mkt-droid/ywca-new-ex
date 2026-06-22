'use client';
 
import { useEffect, useState } from 'react';
 
export default function LogoLoader() {
  const [isVisible, setIsVisible] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
 
  if (!isVisible) return null;
 
  return (
    <div className="fixedWrapper fixed inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e2937] to-[#0f172a] z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center">
       
        <svg
          width="280"
          height="240"
          viewBox="0 0 420 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ywca-loader"
        >
          {/* <path id="triangle" d="M210 295 L50 75 L370 75 Z" fill="#2a3785"  stroke="#2a3785" strokeWidth="8.5" strokeLinejoin=""/> */}
          <path
  id="triangle"
  d="
    M210 295 L50 75 L370 75 Z
    M210 245 L105 103 L315 103 Z
  "
  fill="#2a3785"
  fillRule="evenodd"
/>
          {/* <path id="inner"  d="M210 245 L105 103 L315 103 Z" fill="#ecebeb"/> */}
         
          <rect id="bar" x="48" y="142" width="324" height="52" fill="#2a3785" opacity="0"/>
         
          <text id="text" x="220" y="185" textAnchor="middle" fill="white"
            fontFamily="Arial Black, Impact, sans-serif" fontSize="48"
            fontWeight="900" letterSpacing="25" opacity="0">
            YWCA
          </text>
        </svg>
 
   
      </div>
    </div>
  );
}