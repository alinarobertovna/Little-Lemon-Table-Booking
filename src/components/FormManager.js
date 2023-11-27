import React, { useState } from 'react';
import Step1 from './formStep1';
import Step2 from './formStep2';
import Confirmation from './ReservationConfirm';

const FormManager = () => {

const [currentStep, setCurrentStep] = useState(1);

const [formDataStep1, setFormDataStep1] = useState({
  date: '',
  time: '18:00',
  guests: '1',
  occasion: '',
  location: 'Indoor',
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
  console.log('Next button clicked');
  console.log('Current Step:', currentStep);
};

const handlePreviousStep = (e) => {
  e.preventDefault();
  setCurrentStep(currentStep - 1);
};

const handleConfirm = () => {
  alert("Reservation confirmed!");
};

const handleSubmit = (e) => {
  e.preventDefault();
};

return (
  <section className="bg-#495E57 py-16" id="booking">
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
      <h1 className="text-xl font-semibold mb-4">Make a Reservation</h1> 
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {currentStep === 1 && (
          <Step1 
            formDataStep1={formDataStep1}
            handleInputChangeStep1={handleInputChangeStep1}
            handleRadioChange={handleRadioChange}
            handleNextStep={handleNextStep}
            occasions={occasions}
          />
        )}
        {currentStep === 2 && (
          <Step2
            formDataStep2={formDataStep2}
            handleInputChangeStep2={handleInputChangeStep2}
            handlePreviousStep={handlePreviousStep}
            handleNextStep={handleNextStep}
            handleSubmit={handleSubmit}
          />
        )}
        {currentStep === 3 && (
          <Confirmation
          formDataStep1={formDataStep1}
          formDataStep2={formDataStep2}
          handlePreviousStep={handlePreviousStep}
          handleConfirm={handleConfirm}
        />
        )}
      </form>
    </div>
  </section>
  );
};

export default FormManager;
