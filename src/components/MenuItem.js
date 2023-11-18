import React from 'react';

const MenuItem = ({ title, image, description, glutenFree, lowCalorie, vegan, price }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={image} alt="Food Item" className="w-full h-auto rounded-md mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{title}</h3>
    <p className="text-gray-800">{description}</p> <br></br>
    <div className="flex items-center justify-center mt-2">
      {glutenFree && (
        <div className="flex items-center mr-4">
          <img
            src="gluten-free.png"  
            alt="Gluten Free"
            className="w-6 h-6 mr-1"  
          />
          <span>Gluten Free</span>
        </div>
      )}
      {lowCalorie && (
        <div className="flex items-center mr-4">
          <img
            src="apple.png"  
            alt="Low Calories"
            className="w-6 h-6 mr-1"  
          />
          <span>Low Calories</span>
        </div>
      )}
      {vegan && (
        <div className="flex items-center">
          <img
            src="vegan.png"  
            alt="Vegan"
            className="w-6 h-6 mr-1"  
          />
          <span>Vegan</span>
        </div>
      )}
    </div>
    <div className="mt-4 text-center">
      <span className="text-lg font-semibold">{price}</span>
    </div>
  </div>
);


export default MenuItem;
