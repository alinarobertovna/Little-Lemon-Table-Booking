import React, { useState } from "react";

const Step2 = ({ formDataStep2, handleInputChangeStep2, handlePreviousStep, handleNextStep, handleSubmit }) => {
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '' });

  const validateStep2 = (e) => {
    e.preventDefault();

    const { firstName, lastName, email } = formDataStep2;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'First Name is required';
    } else {
      newErrors.firstName = '';
    }

    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
    } else {
      newErrors.lastName = '';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    } else {
      newErrors.email = '';
    }

    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.email) {
      handleNextStep(e); 
    }
  };

  return (
    <>
      {/* Right Column */}
      <div className="mb-1 col-span-1">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep2}
          value={formDataStep2.firstName}
        />
        <div className="text-red-500">{errors.firstName}</div>
      </div>

      <div className="mb-1 col-span-1">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep2}
          value={formDataStep2.lastName}
        />
        <div className="text-red-500">{errors.lastName}</div>
      </div>

      {/* Left Column */}
      <div className="mb-1 col-span-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep2}
          value={formDataStep2.email}
        />
        <div className="text-red-500">{errors.email}</div>
      </div>

      <div className="mb-1 col-span-1">
        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-600">Special Requests</label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          className="p-2 border border-gray-300 rounded-md w-full h-32" // Increased height
          onChange={handleInputChangeStep2}
          value={formDataStep2.specialRequests}
        />
      </div>

      {/* Buttons */}
      <div className="col-span-1">
        <button
          type="button"
          onClick={handlePreviousStep}
          className="bg-#495E57 text-white p-2 rounded-md hover:bg-black w-full"
        >
          Back
        </button>
      </div>
      <div className="col-span-1">
        <button
          type="button"
          className="bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600 w-full"
          onClick={validateStep2}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Step2;
