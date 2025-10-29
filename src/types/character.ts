export interface IWand {
    wood: string;
    core: string;
    length: number | null;
}

export interface ICharacter {
    id: string;
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string | null;
    yearOfBirth: number | null;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: IWand;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    image: string;
}

