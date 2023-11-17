import React from 'react';

const MenuItem = ({ image, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={image} alt="Food Item" className="w-full h-auto rounded-md mb-4" />
    <p className="text-gray-800">{description}</p>
  </div>
);

export default MenuItem;
