import React from 'react';
import { Link } from 'react-scroll';

const ReservationButton = () => (
  <Link to="booking" smooth className="bg-yellow-500 text-black py-3 px-6 rounded-full mb-8 text-lg lg:text-xl hover:bg-yellow-600 cursor-pointer">
    Reserve table
  </Link>
);

const About = () => (
  <section className="bg-#495E57 py-16" id="about">
    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
      {/* Left column with some text */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-semibold mb-4 text-white">About us</h2>
        <p style={{ color: '#edefee' }} className="text-lg lg:text-xl text-justify mb-8">
        At Little Lemon, we strive to create a unique experience for our guests 
        by blending exquisite dishes with a cozy atmosphere. 
        Our restaurant is not just a place to eat; it's a stage where every ingredient, texture, 
        and flavor is carefully selected and prepared with love.
        </p>
        <ReservationButton />
      </div>
      <br></br>
      {/* Right column with image */}
      <div className="lg:w-1/2">
        <img
          src={"/hero-image-2.jpg"}
          alt="Restaurant"
          className="w-full h-auto max-w-full lg:max-w-screen-md mx-auto rounded-2xl"
        />
      </div>
    </div>
  </section>
);

export default About;
