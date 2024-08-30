import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function HeroSection() {
  const location = useLocation();
  const [showLeftContent, setShowLeftContent] = useState(true);
  const [showRightContent, setShowRightContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLeftContent((prev) => !prev);
    }, 10000); // 10-second interval

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowRightContent((prev) => !prev);
    }, 20000); // 20-second interval

    return () => clearInterval(interval);
  }, []);

  const isConfirmationPage = location.pathname === '/confirmation';

  return (
    <div className={`w-full ${isConfirmationPage ? 'h-64' : 'h-[60vh]'} flex items-center justify-center bg-cover bg-center ${isConfirmationPage ? "bg-[url('/herocover.png')]" : ''}`}>
      {isConfirmationPage ? (
        <h1 className="text-white text-4xl text-center sm:text-left md:text-left"></h1>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 w-full h-full">
          <div className="flex flex-col items-center justify-center p-4">
            {showLeftContent ? (
              <div className="text-center md:text-left">
                <article>
                  <p className="text-[#EB1700] text-xl md:text-2xl">Please note that only successful candidates from this preliminary interview will proceed to the final oral telephonic interview. Completing the form is a crucial step towards being listed as our new employee. Your responses should be brief yet insightful, showcasing your talents effectively.</p>
                </article>
              </div>
            ) : (
              <img src="/johnson&sonhnoj.png" alt="Left Grid Image" className="h-full w-auto object-cover" />
            )}
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            {showRightContent ? (
              <div className="text-center md:text-left">
                <article>
                  <p className="text-[#EB1700] text-xl md:text-2xl">We're thrilled to have you interested in joining our team! As part of our hiring process, we have an assignment designed to gauge your skills and see how you apply them. We'd greatly appreciate it if you could complete the form within 1-2 days to keep things moving smoothly. If you have any questions at all, please don't hesitate to reach out - we're here to help.</p>
                </article>
              </div>
            ) : (
              <img src="/herocover.png" alt="Right Grid Image" className="h-full w-auto object-cover" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
