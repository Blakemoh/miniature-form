import React from 'react';

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina',
  'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
  'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana',
  'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon',
  'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo',
  'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
  'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
  'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia',
  'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti',
  'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
  'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea (North)', 'Korea (South)',
  'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
  'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
  'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia',
  'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands',
  'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan',
  'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
  'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
  'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
  'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
  'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
  'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
  'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

// Sort the countries alphabetically
const sortedCountries = countries.sort();

function StepOne({ formData, handleChange, nextStep }) {
  const handleNext = () => {
    // Check if required fields are filled
    const requiredFields = ['firstName', 'lastName', 'address1', 'address2', 'email', 'phone'];
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-10">
          <div>
            <label className="block text-red-500 mb-1">First Name <span className="text-red-600">*</span></label>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border-black border-b-2 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]" required />
          </div>
          <div>
            <label className="block text-red-500 mb-1">Last Name <span className="text-red-600">*</span></label>
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border-black border-b-2 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]" required />
          </div>
        </div>

        <label className="block text-red-500 mb-1">Address Ln 1 <span className="text-red-600">*</span></label>
        <input type="text" name="address1" placeholder="Address Line 1" value={formData.address1} onChange={handleChange} className="border-black border-b-2 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]" required />

        <label className="block text-red-500 mb-1">Address Ln 2 <span className="text-red-600">*</span></label>
        <input type="text" name="address2" placeholder="Address Line 2" value={formData.address2} onChange={handleChange} className="border-black border-b-2 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]" required />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div>
            <label className="block text-red-500 mb-1">City</label>
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border-black border-b-2 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]" />
          </div>
          <div>
            <label className="block text-red-500 mb-1">State</label>
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="border-black border-b-2 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]" />
          </div>
          <div>
            <label className="block text-red-500 mb-1">Country</label>
            <select name="country" value={formData.country} onChange={handleChange} className="border-black border-b-2 p-2 mb-4 md:mb-10 w-full h-[50px]" required>
              <option value="">Select Country</option>
              {sortedCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <label className="block text-red-500 mb-1">Email <span className="text-red-600">*</span></label>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border-black border-b-2 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]" required />
          </div>
          <div>
            <label className="block text-red-500 mb-1">Phone Number: <span className="text-red-600">*</span></label>
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border-black border-b-2 focus:outline-none focus:ring-1 p-2 mb-4 md:mb-10 w-full h-[50px]" required />
          </div>
        </div>
      </div>
      <div className="text-right">
        <button type="button" onClick={handleNext} className="w-1/4 md:w-3/12 bg-red-600 font-semibold text-white py-2 px-4 rounded">Next</button>
      </div>
    </div>
  );
}

export default StepOne;
