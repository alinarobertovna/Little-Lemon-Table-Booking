import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      image: '/dish1.jpg', 
      description: 'Описание блюда 1',
    },
    {
      id: 2,
      image: '/dish2.jpg',
      description: 'Описание блюда 2',
    },
    {
      id: 3,
      image: '/dish3.jpg',
      description: 'Описание блюда 3',
    },
  ];

  return (
    <section className="bg-white py-16" id="menu">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItems.map(item => (
          <MenuItem key={item.id} image={item.image} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
