import React, { useState } from 'react';

const ReservationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formDataStep1, setFormDataStep1] = useState({
    date: '',
    time: '18:00',
    guests: '1',
    occasion: '',
    location: 'indoor',
  });

  const [formDataStep2, setFormDataStep2] = useState({
    firstName: '',
    lastName: '',
    email: '',
    specialRequests: '',
  });

  const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Date'];

  const handleInputChangeStep1 = (e) => {
    const { name, value } = e.target;
    setFormDataStep1((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormDataStep1((prevData) => ({ ...prevData, location: value }));
  };

  const handleInputChangeStep2 = (e) => {
    const { name, value } = e.target;
    setFormDataStep2((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const step1Content = (
    <>
      <div className="mb-6 col-span-2">
        <label htmlFor="date" className="block text-sm font-medium text-gray-600">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep1}
          value={formDataStep1.date}
        />
      </div>

      <div className="mb-6 col-span-2">
        <label htmlFor="time" className="block text-sm font-medium text-gray-600">Time</label>
        <select
          id="time"
          name="time"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep1}
          value={formDataStep1.time}
        >
          {['6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm'].map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="mb-6 col-span-2">
        <label htmlFor="guests" className="block text-sm font-medium text-gray-600">Number of Guests</label>
        <select
          id="guests"
          name="guests"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep1}
          value={formDataStep1.guests}
        >
          {[1, 2, 3, 4].map((number) => (
            <option key={number} value={String(number)}>{number}</option>
          ))}
        </select>
      </div>

      <div className="mb-6 col-span-2">
        <label htmlFor="occasion" className="block text-sm font-medium text-gray-600">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep1}
          value={formDataStep1.occasion}
        >
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>{occasion}</option>
          ))}
        </select>
      </div>

      <div className="col-span-2 mb-6">
        <label className="block text-sm font-medium text-gray-600">Location</label>
        <div className="flex justify-center">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="location"
              value="indoor"
              checked={formDataStep1.location === 'indoor'}
              onChange={handleRadioChange}
              className="appearance-none w-5 h-5 border border-black rounded-full checked:bg-gray-800 checked:border-transparent focus:outline-none"
            />
            <span className="ml-2">Indoor</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="location"
              value="outdoor"
              checked={formDataStep1.location === 'outdoor'}
              onChange={handleRadioChange}
              className="appearance-none w-5 h-5 border border-black rounded-full checked:bg-gray-800 checked:border-transparent focus:outline-none"
            />
            <span className="ml-2">Outdoor</span>
          </label>
        </div>
      </div>

      <div className="col-span-2">
        <button
          type="button"
          onClick={handleNextStep}
          className="bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600 w-full"
        >
          Next
        </button>
      </div>
    </>
  );

  const step2Content = (
    <>
      <div className="mb-6 col-span-2">
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

      <div className="mb-6 col-span-2">
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

      <div className="mb-6 col-span-2">
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

      <div className="mb-6 col-span-2">
        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-600">Special Requests</label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep2}
          value={formDataStep2.specialRequests}
        />
      </div>

      <div className="col-span-1">
        <button
          type="button"
          onClick={() => setCurrentStep(currentStep - 1)}
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

  return (
    <section className="bg-gray-500 py-16" id="booking">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Reservation Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {currentStep === 1 ? step1Content : null}
          {currentStep === 2 ? step2Content : null}
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
