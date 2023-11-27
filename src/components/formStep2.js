import React from "react";

const Step2 = ({ formDataStep2, handleInputChangeStep2, handlePreviousStep, handleSubmit }) => {
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
          className="bg-gray-400 text-black p-2 rounded-md hover:bg-gray-500 w-full"
        >
          Back
        </button>
      </div>
      <div className="col-span-1">
        <button
          type="submit"
          className="bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600 w-full"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Step2;
