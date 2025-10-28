import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Students from './pages/Students/Students';
import Staff from './pages/Staff/Staff';
import Spells from './pages/Spells/Spells';
import Houses from './pages/Houses/Houses';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/houses" element={<Houses />} />
      </Routes>
    </div>
  );
}

export default App;