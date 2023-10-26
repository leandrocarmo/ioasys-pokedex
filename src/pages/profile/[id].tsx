import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Pokemon } from '@/services/types';
import { usePokemons } from '@/services/pokemonContext';
import { fetchPokemonById, fetchPokemonDescription } from '@/services/pokeAPI';
import { ProfileContent, ProfileHeader, ProfilePage, PokeImg } from '../../components/Profile/styles';

const Profile: React.FC = () => {
    const { pokemons } = usePokemons();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
      const loadPokemonData = async () => {
        const existingPokemon = pokemons.find(p => p.id === Number(id));

        if (existingPokemon) {
          setPokemon(existingPokemon);
        } else {
          const fetchedPokemon = await fetchPokemonById(Number(id));
          const description = await fetchPokemonDescription(Number(id));

          if (fetchedPokemon) {
            fetchedPokemon.description = description;
            setPokemon(fetchedPokemon);
          }
        }
      };

      loadPokemonData();
    }, [id, pokemons]);

    if (!pokemon) return <p>Carregando...</p>;

    const getStatValue = (statName: string) => {
      const stat = pokemon.stats.find(s => s.stat.name === statName);
      return stat ? stat.base_stat : 0;
    };

  return (
    <ProfilePage>
      <ProfileHeader>
        <div className="headerInfo">
          <h1>{pokemon.name}</h1>
          <span>#{pokemon.id}</span>
        </div>
        <PokeImg>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        </PokeImg>

      </ProfileHeader>
      <ProfileContent>
        <div>
          <span>
            {pokemon.types.map(t => t.type.name).join(", ")}
          </span>
        </div>
        <div>
          <span>
            Peso: {pokemon.weight / 10} kg
          </span>
        </div>
        <div>
          <span>
            Altura: {pokemon.height / 10} m
          </span>
        </div>
        <div>
          <span>
            Descrição: {pokemon.description}
          </span>
        </div>
        <div>
          <span>
            HP: {getStatValue('hp')}
          </span>
        </div>
        <div>
          <span>
            ATK: {getStatValue('attack')}
          </span>
        </div>
        <div>
          <span>
            DEF: {getStatValue('defense')}
          </span>
        </div>
        <div>
          <span>
            SATK: {getStatValue('special-attack')}
          </span>
        </div>
        <div>
          <span>
            SDEF: {getStatValue('special-defense')}
          </span>
        </div>
        <div>
          <span>
            SPD: {getStatValue('speed')}
          </span>
        </div>
      </ProfileContent>
    </ProfilePage>
  );
}

export default Profile;
