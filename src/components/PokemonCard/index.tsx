import React from 'react';
import { Card, PokemonImage, PokemonInfo } from './style';


const PokemonCard: React.FC = () => {
    return (
        <Card>
            <PokemonImage src="" alt="pokemon" />
            <PokemonInfo>
                <h2>nome</h2>
            </PokemonInfo>
        </Card>
    );
}

export default PokemonCard;