import React from 'react';
import { ICharacter } from '../../types/character';
import './CharacterCard.css';

type CharacterCardProps = {
    character: ICharacter;
};

const houseColours: { [key: string]: string } = {
    'Gryffindor': '#CD5656',
    'Slytherin': '#659287',
    'Ravenclaw': '#295F98',
    'Hufflepuff': '#E9B63B',
};

const defaultColour = '#CBCBCB';

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {

    const imageUrl = character.image || 'https://abd.org.br/wp-content/uploads/2023/09/placeholder-284.png';

    const species = character.species || '-';
    const gender = character.gender || '-';
    const house = character.house || '-';
    const dateOfBirth = character.dateOfBirth || '-';
    const ancestry = character.ancestry || '-';
    const eyeColour = character.eyeColour || '-';
    const hairColour = character.hairColour || '-';
    const patronus = character.patronus || '-';
    const wandWood = character.wand.wood || '-';
    const wandCore = character.wand.core || '-';
    const wandLength = character.wand.length || '-';


    const houseColor = houseColours[character.house] || defaultColour;

    return (
        <div className="character-card">
            <div className="house-line" style={{ backgroundColor: houseColor }} />

            <div className="card-image-container">
                <img src={imageUrl} alt={character.name} className="card-image" />
            </div>
            <h3 className="card-name">{character.name}</h3>

            <div className="card-details">
                <p><strong>Species:</strong> {species}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>House:</strong> {house}</p>
                <p><strong>Birth:</strong> {dateOfBirth}</p>
                <p><strong>Ancestry:</strong> {ancestry}</p>
                <p><strong>Eye Colour:</strong> {eyeColour}</p>
                <p><strong>Hair Colour:</strong> {hairColour}</p>
                <p><strong>Patronus:</strong> {patronus}</p>
                <p><strong>Wand:</strong> {wandWood} | {wandCore} | {wandLength} inches</p>
            </div>
        </div>
    );
};

export default CharacterCard;