import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
    const navigate = useNavigate();
    const handleExploreClick = () => {
        navigate('/houses');
    }

    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Hogwarts Catalog</h1>
                <p>Magic is closer than you think.<br />
                    Step through the gate and discover what Hogwarts has in store for you...</p>
                <button className="explore-button" onClick={handleExploreClick}>Explore</button>
            </div>
        </div>
    );
};

export default Home; 