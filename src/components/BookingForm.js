import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '18:00',
    guests: '1',
    occasion: '',
    location: 'indoor',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, location: value }));
  };

  const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Date'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form handling logic here
    console.log('Reservation data:', formData);
  };

  return (
    <section className="bg-#495E57 py-16" id="booking">
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Reservation Form</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">

        {/* Column 1 */}
        <div className="col-span-1">

          {/* Date */}
          <div className="mb-6">
            <label htmlFor="date" className="block text-sm font-medium text-gray-600">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.date}
            />
          </div>

          <div className="mb-6" style={{ marginTop: '-4px' }}>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-600">Number of Guests</label>
            <select
              id="guests"
              name="guests"
              className="p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.guests}
            >
              {[1, 2, 3, 4].map((number) => (
                <option key={number} value={String(number)}>{number}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1 flex flex-col">

          {/* Occasion */}
          <div className="mb-6">
            <label htmlFor="occasion" className="block text-sm font-medium text-gray-600">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              className="p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.occasion}
            >
              {occasions.map((occasion) => (
                <option key={occasion} value={occasion}>{occasion}</option>
              ))}
            </select>
          </div>

          {/* Time */}
          <div className="mb-6">
            <label htmlFor="time" className="block text-sm font-medium text-gray-600">Time</label>
            <select
              id="time"
              name="time"
              className="p-2 border border-gray-300 rounded-md w-full"
              onChange={handleInputChange}
              value={formData.time}
            >
              {['6-00 pm', '7-00 pm', '8-00 pm', '9-00 pm', '10-00 pm'].map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Radio buttons for location */}
        <div className="col-span-2 mb-6 flex justify-center">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="location"
              value="indoor"
              checked={formData.location === 'indoor'}
              onChange={handleRadioChange}
              className="appearance-none w-5 h-5 border border-black rounded-full checked:bg-#495E57 checked:border-transparent focus:outline-none"
            />
            <span className="ml-2">Indoor</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="location"
              value="outdoor"
              checked={formData.location === 'outdoor'}
              onChange={handleRadioChange}
              className="appearance-none w-5 h-5  border border-black rounded-full checked:bg-#495E57 checked:border-transparent focus:outline-none"
            />
            <span className="ml-2">Outdoor</span>
          </label>
        </div>

        {/* Submit button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600 w-full"
          >
            Next  
          </button>
        </div>

      </form>
    </div>
    </section>
  );
};

export default ReservationForm;
