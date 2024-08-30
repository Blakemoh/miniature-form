import React from 'react';

function Logo() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start p-4 bg-gray-100">
      <img src="/johnson&Jlogo.png" alt="Johnson&Johnson" className="h-8 sm:h-10" />
      <h2 className='w-full hidden sm:flex justify-end text-5xl text-[#EB1700]'>CAREERS</h2>
    </div>
  );
}

export default Logo;
