import React from 'react';
import templeLogo from '../assets/logo.png';

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF9E5] m-0 p-0">
    <div className="relative flex items-center justify-center h-32 w-32 m-0 p-0">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-red-500 border-solid"></div>
      </div>
      <img
        src={templeLogo}
        alt="Loading..."
        className="h-32 w-32 object-contain z-10 m-0 p-0"
      />
    </div>
    <span className="mt-6 text-gray-600 font-medium">Namaskar! Welcome to Shri Venkatraman Dev, Kumta</span>
  </div>
);

export default Loader;