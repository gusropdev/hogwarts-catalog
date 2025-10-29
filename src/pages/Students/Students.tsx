import React, { useEffect, useState } from 'react';
import { ICharacter } from '../../types/character';
import { getStudents, getStudentsByHouse } from '../../services/apiService';
import './Students.css';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharacterCardSkeleton from '../../components/CharacterCardSkeleton/CharacterCardSkeleton';
import { useParams } from 'react-router-dom';

const Students: React.FC = () => {
    const { houseName } = useParams<{ houseName: string }>();
    const [students, setStudents] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                setIsLoading(true);
                setError(null);

                let data: ICharacter[];

                if (houseName) {
                    data = await getStudentsByHouse(houseName);
                } else {
                    data = await getStudents();
                }

                setStudents(data);

            } catch (error) {
                const message = houseName ?
                    `Failed to fetch students for ${houseName}`
                    : 'Failed to fetch students'
                setError(message);
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchStudents();
    }, [houseName]);

    //Função para deixar a primeira letra da casa maiúscula, para não ficar "Hogwarts students" até mesmo
    //nas consultas filtradas;
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    const title = houseName
        ? `${capitalize(houseName)} students`
        : 'Hogwarts students'

    return (
        <div className="page-container">
            <h1 className="page-title">{title}</h1>

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