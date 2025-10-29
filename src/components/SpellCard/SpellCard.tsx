import React from 'react';
import { ISpell } from '../../types/spells';
import './SpellCard.css';

type SpellCardProps = {
    spell: ISpell;
};

const spellImageUrl = 'https://images.stockcake.com/public/4/c/3/4c3d03e0-37dc-4f1c-8be5-b1376456d57a_large/mystical-magical-wand-stockcake.jpg';

const SpellCard: React.FC<SpellCardProps> = ({ spell }) => {

    const description = spell.description || '-';

    return (
        <div className="spell-card">
            <div
                className="spell-line"
                style={{ backgroundColor: '#55357E' }} />

            <div className="spell-image-container">
                <img src={spellImageUrl} alt="Spell Icon" className="spell-image" />
            </div>

            <div className="spell-details">
                <h3 className="spell-name">{spell.name}</h3>
                <p className="spell-description">{description}</p>
            </div>
        </div>
    );
}; export default SpellCard;