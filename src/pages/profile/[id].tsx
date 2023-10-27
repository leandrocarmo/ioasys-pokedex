import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Pokemon } from '@/services/types';
import { usePokemons } from '@/services/pokemonContext';
import { ProfileContent, ProfileHeader, ProfilePage, PokeImg } from '../../components/Profile/styles';
import { PokemonTypeColor } from '../../styles/pokemonTypeColor';

const Profile: React.FC = () => {
    // Acessa o contexto dos pokémons e obtém a lista deles.
    const { pokemons } = usePokemons();

    // Armazena os detalhes do Pokémon selecionado.
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    // Acessa os parâmetros da rota.
    const router = useRouter();
    const { id } = router.query;

    // Carrega o pokemon selecionado.
    // Caso não encontre redireciona para 404
    useEffect(() => {
      const existingPokemon = pokemons.find(p => p.id === Number(id));

      if (existingPokemon) {
        setPokemon(existingPokemon);
      } else {
        router.push('/404');
      }
    }, [id, pokemons]);

    // Atualiza a página de acordo com o tipo do pokemon
    useEffect(() => {
      if (pokemon && pokemon.types) {
        const mainType = pokemon.types[0].type.name;
        const color = PokemonTypeColor[mainType];
        if (color) {
          document.body.style.backgroundColor = color;
        }
      }

      return () => {
        document.body.style.backgroundColor = '#F7F7F7';
      };
    }, [pokemon]);

    if (!pokemon) return <p>Carregando...</p>;

    // Obtem os valores das estatísticas do Pokémon.
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
