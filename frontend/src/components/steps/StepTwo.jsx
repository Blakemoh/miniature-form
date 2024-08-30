import React from 'react';

function StepTwo({ formData, handleChange, nextStep, prevStep }) {
  const handleNext = () => {
    // Check if required fields are filled
    const requiredFields = [
      'introductoryMessage',
      'position',
      'yearsOfExperience',
      'currentlyEmployed',
      'employmentReason',
      'selfDescription',
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`${field.replace(/([A-Z])/g, ' $1')} is required`);
        return;
      }
    }
    nextStep();
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="mb-4">
        <label className="block text-red-600 mt-4 mb-2">Introductory Message <span className="text-red-500">*</span></label>
        <textarea
          name="introductoryMessage"
          placeholder="Introductory Message"
          value={formData.introductoryMessage}
          onChange={handleChange}
          className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[100px]"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <label className="block text-red-600 mb-2">Position Applying For <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={formData.position}
              onChange={handleChange}
              className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]"
              required
            />
          </div>
          <div>
            <label className="block text-red-600 mb-2">Years of Experience <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="yearsOfExperience"
              placeholder="Years of Experience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]"
              required
            />
          </div>
        </div>

        <p className="text-xl text-center text-[#EB1700] p-5 mb-5 pt-2">
          You are required to upload all documents as required in the Interview Questionnaire Email
          Correspondence, if the File input below does not support your document type, a member of our HR team will request for it via email.
        </p>

        <label className="block text-red-600 mb-2">Are you currently employed? <span className="text-red-500">*</span></label>
        <select
          name="currentlyEmployed"
          value={formData.currentlyEmployed}
          onChange={handleChange}
          className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]"
          required
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {formData.currentlyEmployed === 'Yes' ? (
          <div>
            <label className="block text-red-600 mb-2">Why do you want to leave your current job? <span className="text-red-500">*</span></label>
            <textarea
              name="employmentReason"
              placeholder="Why do you want to leave your current job?"
              value={formData.employmentReason}
              onChange={handleChange}
              className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[100px]"
              required
            />
          </div>
        ) : (
          <div>
            <label className="block text-red-600 mb-2">Why did you leave your last job? <span className="text-red-500">*</span></label>
            <textarea
              name="employmentReason"
              placeholder="Why did you leave your last job?"
              value={formData.employmentReason}
              onChange={handleChange}
              className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[100px]"
              required
            />
          </div>
        )}

        <label className="block text-red-600 mb-2">What adjective would you use to describe yourself? <span className="text-red-500">*</span></label>
        <textarea
          name="selfDescription"
          placeholder="What adjective would you use to describe yourself?"
          value={formData.selfDescription}
          onChange={handleChange}
          className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[100px]"
          required
        />
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className=" bg-gray-500 font-semibold text-white py-2 px-4 rounded">Previous</button>
        <button type="button" onClick={handleNext} className=" bg-red-500 font-semibold text-white py-2 px-4 rounded">Next</button>
      </div>
    </div>
  );
}

export default StepTwo;
