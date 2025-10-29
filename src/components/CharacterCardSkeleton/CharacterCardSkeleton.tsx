import React from 'react';
import './CharacterCardSkeleton.css';

const CharacterCardSkeleton: React.FC = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-house-line" />
            <div className="skeleton-image-container">
                <div className="skeleton-image" />
            </div>
            <div className="skeleton-content">
                <div className="skeleton-name" />
                <div className="skeleton-text" />
                <div className="skeleton-text short" />
                <div className="skeleton-text" />
                <div className="skeleton-text short" />
                <div className="skeleton-text" />
                <div className="skeleton-text short" />
                <div className="skeleton-text" />
            </div>
        </div>
    );
};

export default CharacterCardSkeleton;