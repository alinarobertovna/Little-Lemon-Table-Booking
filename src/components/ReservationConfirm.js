import React, { useState } from "react";

const ReservationConfirm = ({ formDataStep1, formDataStep2, handlePreviousStep }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true); 
  };

  if (isConfirmed) {
    return (
      <div className="mb-6 col-span-2">
      <div className="bg-white p-6 md:max-w-md mx-auto my-10 rounded shadow-lg text-center">
      <div className="mb-4">
        <svg
        className="mx-auto w-16 h-16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#495E57"
        strokeWidth={2}
        style={{ color: "#495E57" }} 
        >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="text-lg leading-6 font-medium text-gray-900">Thank you for your reservation!</h3>
    <p className="mt-2 text-sm text-gray-500">Your reservation details have been confirmed</p>
    </div>
    </div>
    );
  }
  return (
    <>
      <div className="mb-6 col-span-2">
        <h2 className="text-2xl font-semibold mb-2 text-center">Reservation Details</h2>
        <p>
          <strong>Date:</strong> {formDataStep1.date}
        </p>
        <p>
          <strong>Time:</strong> {formDataStep1.time}
        </p>
        <p>
          <strong>Number of Guests:</strong> {formDataStep1.guests}
        </p>
        <p>
          <strong>Occasion:</strong> {formDataStep1.occasion}
        </p>
        <p>
          <strong>Location:</strong> {formDataStep1.location}
        </p>
      </div>

      <div className="mb-6 col-span-2">
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <p>
          <strong>First Name:</strong> {formDataStep2.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formDataStep2.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formDataStep2.email}
        </p>
        <p>
          <strong>Special Requests:</strong> {formDataStep2.specialRequests}
        </p>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePreviousStep}
          className="bg-#495E57 text-white p-2 rounded-md hover:bg-black w-full ml-2"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          className="bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600 w-full ml-2"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default ReservationConfirm;
