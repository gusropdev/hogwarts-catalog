import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Students from './pages/Students/Students';
import Staff from './pages/Staff/Staff';
import Spells from './pages/Spells/Spells';
import Houses from './pages/Houses/Houses';

import './App.css'

const App: React.FC = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Navbar />

      <main className={isHomePage ? 'main-content-home' : 'main-content-default'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;