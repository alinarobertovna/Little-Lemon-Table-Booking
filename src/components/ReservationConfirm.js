import React from "react";

const ReservationConfirm = ({ formDataStep1, formDataStep2, handlePreviousStep, handleConfirm }) => {
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
          onClick={handleConfirm}
          className="bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600 w-full"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default ReservationConfirm;