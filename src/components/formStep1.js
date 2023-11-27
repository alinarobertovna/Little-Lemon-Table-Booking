import React from "react";

const Step1 = ({ formDataStep1, handleInputChangeStep1, handleRadioChange, handleNextStep, occasions }) => {
  return (
    <>
      {/* Left Column */}
      <div className="mb-6 col-span-1">
        <label htmlFor="date" className="block text-sm font-medium text-gray-600">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep1}
          value={formDataStep1.date}
        />
      </div>

      <div className="mb-6 col-span-1">
        <label htmlFor="guests" className="block text-sm font-medium text-gray-600">
          Number of Guests
        </label>
        <select
          id="guests"
          name="guests"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep1}
          value={formDataStep1.guests}
        >
          {[1, 2, 3, 4].map((number) => (
            <option key={number} value={String(number)}>
              {number}
            </option>
          ))}
        </select>
      </div>

      {/* Right Column */}
      <div className="mb-6 col-span-1">
        <label htmlFor="time" className="block text-sm font-medium text-gray-600">
          Time
        </label>
        <select
          id="time"
          name="time"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep1}
          value={formDataStep1.time}
        >
          {['6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm'].map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 col-span-1">
        <label htmlFor="occasion" className="block text-sm font-medium text-gray-600">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          className="p-2 border border-gray-300 rounded-md w-full"
          onChange={handleInputChangeStep1}
          value={formDataStep1.occasion}
        >
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div className="mb-6 col-span-2">
        <div className="flex justify-center">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="location"
              value="Indoor"
              checked={formDataStep1.location === 'Indoor'}
              onChange={handleRadioChange}
              className="appearance-none w-5 h-5 border border-black rounded-full checked:bg-gray-800 checked:border-transparent focus:outline-none"
            />
            <span className="ml-2">Indoor</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="location"
              value="Outdoor"
              checked={formDataStep1.location === 'Outdoor'}
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
};

export default Step1;
