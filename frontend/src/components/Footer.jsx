import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#312C2A] text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Left Column: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Johnson.png"
            alt="Johnson & Johnson Logo"
            className="h-18 "
          />
        </div>

        {/* Right Column: Address Details */}
        <div className="text-center md:text-right">
          <p>Johnson & Johnson, Inc.</p>
          <p>1 Johnson And Johnson Plaza</p>
          <p>New Brunswick, NJ 08933</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div>

      {/* Copyright */}
      <p className="text-center">&copy; {new Date().getFullYear()} Johnson & Johnson, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
