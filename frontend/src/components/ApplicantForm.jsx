import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';

function ApplicantForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    email: '',
    phone: '',
    introductoryMessage: '',
    position: '',
    yearsOfExperience: '',
    currentlyEmployed: 'Yes',
    employmentReason: '',
    selfDescription: '',
    workForUs: '',
    pastAccomplishment: '',
    workEnvironment: '',
    specialSkills: '',
    strengthsWeaknesses: '',
    helpGettingJobDone: '',
    document1: null,
    document2: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const formDataToSend = new FormData();
    for (let key in formData) {
      if (formData[key] instanceof File) {
        formDataToSend.append(key, formData[key], formData[key].name);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        navigate('/confirmation'); // Redirect to the confirmation page
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Error submitting form');
    }
  };

  const getStepHeader = () => {
    switch (step) {
      case 1:
        return 'APPLICANT PERSONAL INFORMATION';
      case 2:
        return 'APPLICANTS INTRODUCTORY QUESTIONS';
      case 3:
        return 'APPLICANTS PAST JOB PERFORMANCE/EXPERIENCE';
      default:
        return '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col items-center">
      <div className='w-full max-w-4xl'>
        <div className=" bg-gray-400 rounded-full h-1.5 mb-4">
          <div className={`bg-red-600 h-1.5 rounded-full`} style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>
        <h4 className="text-2xl tracking-wide text-[#EB1700] font-bold mb-4 mt-10 text-center">{getStepHeader()}</h4>
      </div>
      <div className='w-full max-w-4xl '>
        {step === 1 && <StepOne formData={formData} handleChange={handleChange} nextStep={nextStep} />}
        {step === 2 && <StepTwo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <StepThree formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} prevStep={prevStep} />}
      </div>
    </form>
  );
}

export default ApplicantForm;
