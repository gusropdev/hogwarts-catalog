import React, { useState, useEffect } from 'react';
import { ISpell } from '../../types/spells';
import './Spells.css'
import { getSpells } from '../../services/apiService';
import SpellCardSkeleton from '../../components/SpellCardSkeleton/SpellCardSkeleton';
import SpellCard from '../../components/SpellCard/SpellCard';

const Spells: React.FC = () => {
    const [spells, setSpells] = useState<ISpell[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSpells = async () => {
            try {
                const data = await getSpells();
                setSpells(data);
            } catch (error) {
                setError('Failed to fetch spells');
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSpells();
    }, []);

    return (
        <div className="page-container">
            <h1 className="page-title">Hogwarts spells</h1>

            {isLoading && (
                <div className="card-list">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <SpellCardSkeleton key={index} />
                    ))}
                </div>
            )}

            {error && <div className="error-message">{error}</div>}

            {!isLoading && !error && (
                <div className="card-list">
                    {spells.map((spell) => (<SpellCard key={spell.id} spell={spell} />))}
                </div>
            )}
        </div>
    );
};

export default Spells;