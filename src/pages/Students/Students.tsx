import React, { useEffect, useState } from 'react';
import { ICharacter } from '../../types/character';
import { getStudents } from '../../services/apiService';
import './Students.css';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharacterCardSkeleton from '../../components/CharacterCardSkeleton/CharacterCardSkeleton';

const Students: React.FC = () => {
    const [students, setStudents] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getStudents();
                setStudents(data);
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
            <h1 className="page-title">Hogwarts students</h1>

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
                    {students.map((student) => (<CharacterCard key={student.id} character={student} />))}
                </div>
            )}
        </div>
    );
};

export default Students;