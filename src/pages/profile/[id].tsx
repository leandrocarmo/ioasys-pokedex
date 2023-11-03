import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Pokemon } from '@/services/types';
import { usePokemons } from '@/context/pokemonContext';
import { ProfileContent, ProfileHeader, ProfilePage, PokeImg } from '../../components/Profile/styles';
import { PokemonTypeColor } from '../../styles/pokemonTypeColor';
import ProgressBar from '../../components/PokemonCard/progressBar';

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

  // Retorna os dois primeiros movimentos do Pokémon.
  const getTopTwoMoves = (): string => {
    if (!pokemon || !pokemon.moves || pokemon.moves.length < 2) {
      return "Unknown Moves";
    }
    return `${pokemon.moves[0].move.name} / ${pokemon.moves[1].move.name}`;
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
        <div className="types">
          {pokemon.types.map(t => (
            <span key={t.type.name} style={{ backgroundColor: PokemonTypeColor[t.type.name] }}>
              {t.type.name}
            </span>
          ))}
        </div>
        <div className='profileInfo'>
          <div>
            <span className='weight'>
              {pokemon.weight / 10} kg
            </span>
            <span className='info'>
              Weight
            </span>
          </div>
          <div>
            <span className='height'>
              {pokemon.height / 10} m
            </span>
            <span className='info'>
              Height
            </span>
          </div>
          <div>
            <span>
              {getTopTwoMoves()}
            </span>
            <span className='info'>
              Moves
            </span>
          </div>
        </div>
        <div>
          <span>
            {pokemon.description}
          </span>
        </div>
        <div className='baseStats'>
          <h4 style={{ color: PokemonTypeColor[pokemon.types[0].type.name] }}>Base Stats</h4>
          <ul>
            <li>
              <span className='stats' style={{ color: PokemonTypeColor[pokemon.types[0].type.name] }}>HP</span>
              <span className='power'>{getStatValue('hp')}</span>
                <ProgressBar
                  percentage={getStatValue('hp')}
                  fillColor={PokemonTypeColor[pokemon.types[0].type.name]}
                  bgColor={PokemonTypeColor[pokemon.types[0].type.name]}
                />
            </li>
            <li>
              <span className='stats' style={{ color: PokemonTypeColor[pokemon.types[0].type.name] }}>ATK</span>
              <span className='power'>{getStatValue('attack')}</span>
              <ProgressBar
                percentage={getStatValue('attack')}
                fillColor={PokemonTypeColor[pokemon.types[0].type.name]}
                bgColor={PokemonTypeColor[pokemon.types[0].type.name]}
              />
            </li>
            <li>
              <span className='stats' style={{ color: PokemonTypeColor[pokemon.types[0].type.name] }}>DEF</span>
              <span className='power'>{getStatValue('defense')}</span>
              <ProgressBar
                percentage={getStatValue('defense')}
                fillColor={PokemonTypeColor[pokemon.types[0].type.name]}
                bgColor={PokemonTypeColor[pokemon.types[0].type.name]}
              />
            </li>
            <li>
              <span className='stats' style={{ color: PokemonTypeColor[pokemon.types[0].type.name] }}>SATK</span>
              <span className='power'>{getStatValue('special-attack')}</span>
              <ProgressBar
                percentage={getStatValue('special-attack')}
                fillColor={PokemonTypeColor[pokemon.types[0].type.name]}
                bgColor={PokemonTypeColor[pokemon.types[0].type.name]}
              />
            </li>
            <li>
              <span className='stats' style={{ color: PokemonTypeColor[pokemon.types[0].type.name] }}>SDEF</span>
              <span className='power'>{getStatValue('special-defense')}</span>
              <ProgressBar
                percentage={getStatValue('special-defense')}
                fillColor={PokemonTypeColor[pokemon.types[0].type.name]}
                bgColor={PokemonTypeColor[pokemon.types[0].type.name]}
              />
            </li>
            <li>
              <span className='stats' style={{ color: PokemonTypeColor[pokemon.types[0].type.name] }}>SPD</span>
              <span className='power'>{getStatValue('speed')}</span>
              <ProgressBar
                percentage={getStatValue('speed')}
                fillColor={PokemonTypeColor[pokemon.types[0].type.name]}
                bgColor={PokemonTypeColor[pokemon.types[0].type.name]}
              />
            </li>
          </ul>
        </div>
      </ProfileContent>
    </ProfilePage>
  );
}

export default Profile;
