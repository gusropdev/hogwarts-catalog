import React, { useState, useEffect } from 'react';
import { ICharacter } from '../../types/character';
import { getStaff } from '../../services/apiService';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharacterCardSkeleton from '../../components/CharacterCardSkeleton/CharacterCardSkeleton';
import './Staff.css'

const Staff: React.FC = () => {
    const [staff, setStaff] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getStaff();
                setStaff(data);
            } catch (error) {
                setError('Failed to fetch students');
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchStudents();
    }, []);

    return (
        <div className="page-container">
            <h1 className="page-title">Hogwarts staff</h1>

            {isLoading && (
                <div className="card-list">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <CharacterCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {error && <div className="error-message">{error}</div>}

            {!isLoading && !error && (
                <div className="card-list">
                    {staff.map((staffMember) => (<CharacterCard key={staffMember.id} character={staffMember} />))}
                </div>
            )}
        </div>
    );
};

export default Staff;