import React from 'react';
import { Card, PokemonImage, PokemonInfo } from './style';
import { Type } from '@/services/types';
import { PokemonTypeColor } from '../../styles/pokemonTypeColor';

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  types: Type[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types, id, ...props }) => {
  const pokeColor = types[0] ? PokemonTypeColor[types[0].type.name] : 'grey';

  return (
    <>
      <Card pokeColor={pokeColor} {...props}>
        <span className='pokeId'>#{id}</span>
        <PokemonImage src={image} alt={name} />
        <PokemonInfo pokeColor={pokeColor}>
          <span>{name}</span>
        </PokemonInfo>
      </Card>
    </>
  );
}

export default PokemonCard;
