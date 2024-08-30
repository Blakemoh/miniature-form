import React from 'react';

function StepThree({ formData, handleChange, handleFileChange, prevStep }) {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="mb-4">
        <label className="block text-red-600 mb-2">Why do you want to work for us? <span className="text-red-500">*</span></label>
        <textarea
          name="workForUs"
          placeholder="Why do you want to work for us?"
          value={formData.workForUs}
          onChange={handleChange}
          className="border-gray-500 border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-4 mb-10 w-full h-[100px]"
          required
        />
        <label className="block text-red-600 mb-2">What past accomplishment gave you satisfaction? <span className="text-red-500">*</span></label>
        <textarea
          name="pastAccomplishment"
          placeholder="What past accomplishment gave you satisfaction?"
          value={formData.pastAccomplishment}
          onChange={handleChange}
          className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-10 w-full h-[100px]"
          required
        />
        <label className="block text-red-600 mb-2">What type of work environment do you like best? <span className="text-red-500">*</span></label>
        <textarea
          name="workEnvironment"
          placeholder="What type of work environment do you like best?"
          value={formData.workEnvironment}
          onChange={handleChange}
          className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-10 w-full h-[100px]"
          required
        />
        <h4 className='text-xl font-bold text-[#EB1700] mb-8 mt-6 text-center'>APPLICANT'S PERSONAL MOTIVATION & TRAITS QUESTIONS</h4>
        <label className="block text-red-600 mb-2 mt-10">What special skills or knowledge have you gained to help in this job? <span className="text-red-500">*</span></label>
        <textarea
          name="specialSkills"
          placeholder="What special skills or knowledge have you gained to help in this job?"
          value={formData.specialSkills}
          onChange={handleChange}
          className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-10 w-full h-[100px]"
          required
        />
        <label className="block text-red-600 mb-2">What are your strengths/weaknesses in relation to this job/career? <span className="text-red-500">*</span></label>
        <textarea
          name="strengthsWeaknesses"
          placeholder="What are your strengths/weaknesses in relation to this job/career?"
          value={formData.strengthsWeaknesses}
          onChange={handleChange}
          className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-10 w-full h-[100px]"
          required
        />
        <label className="block text-red-600 mb-2">How can we best help you get your job done? <span className="text-red-500">*</span></label>
        <textarea
          name="helpGettingJobDone"
          placeholder="How can we best help you get your job done?"
          value={formData.helpGettingJobDone}
          onChange={handleChange}
          className="border-black border-b-2 active:bg-gray-50 focus:outline-none focus:ring-1 p-2 mb-10 w-full h-[100px]"
          required
        />

        <div className="grid grid-cols-1 pt-10 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-red-600 mb-2">Passport Document <span className="text-red-500">*</span></label>
                <input
                type="file"
                name="document1"
                onChange={handleFileChange}
                className="border-none cursor-pointer p-2 mb-4 w-full rounded-lg"
                required
                />
            </div>
            <div>
                <label className="block text-red-600 mb-2">Education / Qualification Documents <span className="text-red-500">*</span></label>
                <input
                type="file"
                name="document2"
                onChange={handleFileChange}
                className="border-none cursor-pointer p-2 mb-4 w-full rounded-lg"
                required
                />
            </div>
        </div>
      </div>
      <div className="flex justify-between pb-5 pt-5">
        <button type="button" onClick={prevStep} className="bg-gray-500 font-semibold text-white p-3 rounded">Previous</button>
        <button type="submit" className="bg-red-500 font-semibold text-white py-2 px-4 rounded">Submit</button>
      </div>
    </div>
  );
}

export default StepThree;
