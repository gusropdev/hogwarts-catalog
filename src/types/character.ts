export interface ICharacter {
    id: string;
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string | null;
    yearOfBirth: number | null;
    wizard: boolean;
    eyeColour: string;
    hairColour: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    image: string;
}