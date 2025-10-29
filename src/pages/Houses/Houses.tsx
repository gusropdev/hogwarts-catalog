import React from 'react';
import { useNavigate } from 'react-router-dom';
import HouseCard from '../../components/HouseCard/HouseCard';

import './Houses.css';

const housesData = [
    {
        name: 'Gryffindor',
        color: '#CD5656',
        logoUrl: 'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png'
    },
    {
        name: 'Slytherin',
        color: '#659287',
        logoUrl: 'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png'
    },
    {
        name: 'Ravenclaw',
        color: '#295F98',
        logoUrl: 'https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png'
    },
    {
        name: 'Hufflepuff',
        color: '#E9B63B',
        logoUrl: 'https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png'
    }
];

const Houses: React.FC = () => {

    const navigate = useNavigate();

    const handleHouseClick = (houseName: string) => {
        navigate(`/students/house/${houseName.toLowerCase()}`);
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Hogwarts houses</h1>
            <h2 className="page-subtitle" style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '-1rem', marginBottom: '2rem' }}>
                Select one to explore...
            </h2>

            <div className="card-list">
                {housesData.map((house) => (
                    <HouseCard
                        key={house.name}
                        name={house.name}
                        color={house.color}
                        logoUrl={house.logoUrl}
                        onCardClick={() => handleHouseClick(house.name)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Houses;