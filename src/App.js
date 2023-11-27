import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import FormManager from './components/FormManager';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header p-4 lg:p-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center mb-2 lg:mb-0">
            <img src="/nav_logo.png" alt="Logo" className="mr-2 w-auto h-auto lg:w-1/6" />
          </div>
          {/* Nav bar */}
          <nav className="flex flex-col lg:flex-row lg:space-x-4 lg:mb-2">
            <Link to="#about" smooth className="text-#495E57-500 hover:text-700 mb-2 lg:mb-0 lg:mr-4 text-lg">About</Link>
            <Link to="#menu" smooth className="text-#495E57-500 hover:text-700 mb-2 lg:mb-0 lg:mr-4 text-lg">Menu</Link>
            <Link to="#booking" smooth className="text-#495E57-500 hover:text-700 mb-2 lg:mb-0 lg:mr-4 text-lg">Reservation</Link>
            <Link to="#footer" smooth className="text-#495E57-500 hover:text-700 text-lg">Footer</Link>
          </nav>
        </header>
        <About />
        <Menu />
        <FormManager />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
