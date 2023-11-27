import React, { useState } from 'react';
import Step1 from './formStep1';
import Step2 from './formStep2';

const FormManager = () => {

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

const handlePreviousStep = (e) => {
  e.preventDefault();
  setCurrentStep(currentStep - 1);
};

const handleSubmit = (e) => {
  e.preventDefault();
};

return (
  <section className="bg-gray-500 py-16" id="booking">
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Reservation Form</h1>
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
            handleSubmit={handleSubmit}
          />
        )}
      </form>
    </div>
  </section>
  );
};

export default FormManager;
