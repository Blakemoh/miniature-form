import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ApplicantForm from './components/ApplicantForm';
import Footer from './components/Footer';
import Logo from './components/Logo';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  const location = useLocation();

  // Check if the current path is the confirmation page
  const isConfirmationPage = location.pathname === '/confirmation';

  return (
    <div className="flex flex-col min-h-screen">
      <Logo />
      <HeroSection />
      {!isConfirmationPage && (
        <div className="w-full h-px bg-red-300 my-6" /> // Divider
      )}
      <div className="flex-grow">
        {!isConfirmationPage && (
          <div className="flex flex-col pb-5 bg-white">
            <About />
          </div>
        )}
        <div className="flex flex-col bg-white p-10">
          <Routes>
            <Route path="/" element={<ApplicantForm />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
