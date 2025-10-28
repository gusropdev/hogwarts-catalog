import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import HogwartsIcon from '../../assets/hogwarts-icon.png';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={HogwartsIcon} alt="Hogwarts Icon" className="navbar-icon" />
            </div>
            <div className="navbar-right">
                <Link to="/" className="nav-link">home</Link>
                <Link to="/students" className="nav-link">students</Link>
                <Link to="/spells" className="nav-link">spells</Link>
                <Link to="/houses" className="nav-link">houses</Link>
                <Link to="/staff" className="nav-link">staff</Link>
            </div>
        </nav>
    );
};

export default Navbar;