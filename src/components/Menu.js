import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Chicken Poke Bowl',
      image: '/food-item-1.jpg', 
      description: (
        <p>
          Indulge in the exotic flavors of our chicken poke bowl. Succulent chicken bites, crisp fresh vegetables, 
          and a delicate sauce come together for the perfect fusion of taste. Embark on a culinary journey with 
          the essence of Hawaii in every mouthful! 
        </p> 
      ),
      glutenFree: true,
      lowCalorie: true,
      vegan: false,
      price: '$21.99',
    },
    {
      id: 2,
      title: 'Zesty Citrus Kale Salad',
      image: '/food-item-2.jpg',
      description: (
        <p>
          Revitalize your palate with our Citrus Kale Crunch Salad. 
          Fresh kale, juicy citrus, and crisp almonds, all kissed with a zesty lemon vinaigrette. 
          A burst of flavors in every bite! Savor the perfect balance of health and taste in this vibrant and satisfying salad.
        </p> 
      ),
      glutenFree: false,
      lowCalorie: true,
      vegan: true,
      price: '$12.99',
    },
    {
      id: 3,
      title: 'Mussel Medley Noodles',
      image: '/food-item-3.jpg',
      description: (
        <p>
          Savor the ocean's bounty with our Sea Breeze Noodles. 
          Silky noodles, plump mussels, and a savory broth unite in a seafood symphony. 
          Dive into a world of flavor, where each bite transports you to coastal bliss!
        </p> 
      ),
      glutenFree: true,
      lowCalorie: false,
      vegan: false,
      price: '$35.99',
    },
  ];

  return (
    <section className="bg-white py-16" id="menu">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-semibold text-#495E57-800">Our Menu</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItems.map(item => (
          <MenuItem key={item.id} title={item.title} image={item.image} description={item.description} glutenFree={item.glutenFree} lowCalorie={item.lowCalorie} vegan={item.vegan} price={item.price}/>
        ))}
      </div>
    </section>
  );
};

export default Menu;
