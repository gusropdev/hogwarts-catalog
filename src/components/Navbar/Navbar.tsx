import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import HogwartsIcon from '../../assets/hogwarts-icon.png';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <nav className={isHomePage ? 'navbar navbar-home' : 'navbar'}>
            <div className="navbar-left">
                <NavLink to="/"> <img src={HogwartsIcon} alt="Hogwarts Icon" className="navbar-icon" /></NavLink>
            </div>
            <div className="navbar-right">
                <NavLink to="/" className="nav-link">home</NavLink>
                <NavLink to="/students" className="nav-link">students</NavLink>
                <NavLink to="/spells" className="nav-link">spells</NavLink>
                <NavLink to="/houses" className="nav-link">houses</NavLink>
                <NavLink to="/staff" className="nav-link">staff</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;