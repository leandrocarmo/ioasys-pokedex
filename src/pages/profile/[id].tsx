import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Pokemon } from '@/services/types';
import axios from 'axios';

const Profile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPokemon = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
          setPokemon(response.data);
        } catch (error) {
          console.error("Erro ao buscar o Pokémon", error);
        }
      };

      fetchPokemon();
    }
  }, [id]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div>
      <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
    </div>
  );
}

export default Profile;
