import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header p-8 flex flex-col lg:flex-row justify-between items-center">
          {/* Логотип в левом углу */}
          <div className="flex items-center mb-4 lg:mb-0">
            <img src="/nav_logo.png" alt="Logo" className="mr-4 w-auto h-auto lg:w-1/6" />
            {/* Дополнительные элементы логотипа, если необходимо */}
          </div>
          {/* Навигация в правом углу */}
          <nav className="flex flex-col lg:flex-row lg:space-x-4">
            <Link to="#about" smooth className="text-blue-500 hover:text-blue-700 mb-2 lg:mb-0 lg:mr-4">About</Link>
            <Link to="#menu" smooth className="text-blue-500 hover:text-blue-700 mb-2 lg:mb-0 lg:mr-4">Menu</Link>
            <Link to="#reservation" smooth className="text-blue-500 hover:text-blue-700 mb-2 lg:mb-0 lg:mr-4">Reservation</Link>
            <Link to="#footer" smooth className="text-blue-500 hover:text-blue-700">Footer</Link>
          </nav>
        </header>
        <About />
        <Menu />
        <Reservation /> {/* Заглушка для компонента "Бронирование" */}
        <Footer /> {/* Заглушка для компонента "Футер" */}
      </div>
    </BrowserRouter>
  );
}

export default App;
