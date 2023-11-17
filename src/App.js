import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Menu from './components/Menu';


const Reservation = () => <div>Бронирование столика</div>;
const Contact = () => <div>Наши контакты</div>;

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
