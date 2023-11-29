import React from 'react';

const Footer = () => {
  return (
    <section className="bg-white text-black p-8" id="footer">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: littlelemon@gmail.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <img src={"./small_logo.png"} alt="Logo" className="h-16 w-auto mb-4 mx-auto" />
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <hr className="my-4 border-gray-600" />

      <p className="text-center">&copy; 2023 Little Lemon. All rights reserved.</p>
    </section>
  );
};

export default Footer;
