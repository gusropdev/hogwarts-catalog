import axios from 'axios';
import { ICharacter } from '../types/character';
import { ISpell } from '../types/spells';

const apiClient = axios.create(
    {
        baseURL: process.env.REACT_APP_API_BASE_URL
    }
);

export const getStudents = async (): Promise<ICharacter[]> => {
    try {
        const response = await apiClient.get<ICharacter[]>('/characters/students');
        return response.data;
    } catch (error) {
        console.error("Error fetching students: ", error);
        throw error;
    }
}

export const getSpells = async (): Promise<ISpell[]> => {
    try {
        const response = await apiClient.get<ISpell[]>('/spells');
        return response.data;
    } catch (error) {
        console.error("Error fetching spells: ", error);
        throw error;
    }
}

export const getStaff = async (): Promise<ICharacter[]> => {
    try {
        const response = await apiClient.get<ICharacter[]>('/characters/staff');
        return response.data;
    } catch (error) {
        console.error("Error fetching staff: ", error);
        throw error;
    }
}

export const getStudentsByHouse = async (house: string): Promise<ICharacter[]> => {
    try {
        const response = await apiClient.get<ICharacter[]>(`/characters/house/${house}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching students by house: ", error);
        throw error;
    }
}