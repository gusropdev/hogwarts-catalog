import React from 'react';
import './SpellCardSkeleton.css';
import '../CharacterCardSkeleton/CharacterCardSkeleton.css';

const SpellCardSkeleton: React.FC = () => {
    return (
        <div className="skeleton-card spell-skeleton-card">
            <div className="skeleton-house-line spell-skeleton-line" />
            <div className="skeleton-image-container spell-skeleton-image-container">
                <div className="skeleton-image" />
            </div>
            <div className="skeleton-content">
                <div className="skeleton-name" />
                <div className="skeleton-text spell-skeleton-text" />
            </div>
        </div>
    );
}; export default SpellCardSkeleton;