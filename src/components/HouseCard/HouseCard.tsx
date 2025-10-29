import React from 'react';
import './HouseCard.css';

type HouseCardProps = {
    name: string;
    logoUrl: string;
    color: string;
    onCardClick: () => void;
};

const HouseCard: React.FC<HouseCardProps> = ({ name, logoUrl, color, onCardClick }) => {
    return (
        <div
            className="house-card"
            style={{ backgroundColor: color }}
            onClick={onCardClick}
        >
            <img src={logoUrl} alt={`${name} Logo`} className="house-logo" />
            <h3 className="house-name">{name}</h3>
        </div>
    );
};

export default HouseCard;