import React from 'react';
// import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-80">
      <h2 className="text-3xl font-bold text-[#EB1700]">Thank you for Applying to Johnson & Johnson</h2>
      <p className='text-lg mt-4'>Your Answers have been submitted for further Evaluation, out team will reach out to you shortly for further assessment of your application file.</p>
      {/* <Link to="/">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Go Back to Home</button>
      </Link> */}
    </div>
  );
};

export default ConfirmationPage;