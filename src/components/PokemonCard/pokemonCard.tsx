import React from 'react';
import { Card, PokemonImage, PokemonInfo } from './style';
import { Pokemon, Type } from '@/services/types';

interface PokemonCardProps {
    id: number;
    name: string;
    image: string;
    types: Type[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types, id, ...props }) => {
  return (
    <>
      <Card {...props}>
        <span className='pokeId'>#{id}</span>
        <PokemonImage src={image} alt={name} />
        <PokemonInfo>
          <span>{name}</span>
          {/* {types.map((t, index) => <span key={index}>{t.type.name}</span>)} */}
        </PokemonInfo>
      </Card>
    </>
  );
}

export default PokemonCard;
