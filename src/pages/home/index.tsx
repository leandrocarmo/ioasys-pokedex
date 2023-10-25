import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/layout';
import { ContentWrapper } from '@/styles/global';
import PokemonCard from '@/components/PokemonCard/pokemonCard';
import { ContentGrid } from '@/components/PokemonCard/style';
import { Header } from '@/components/Header/Header';
import { Pokemon, Type } from '@/services/types';
import { fetchPokemons } from '@/services/pokeAPI';
import Link from 'next/link';

function HomePage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const loadPokemons = async () => {
      const fetchedPokemons = await fetchPokemons();
      setPokemons(fetchedPokemons);
    };

    loadPokemons();
  }, []);

  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <ContentGrid>
          {pokemons.map((pokemon) => (
            <Link key={pokemon.id} href={`/profile/${pokemon.id}`} passHref>
              <PokemonCard
                id={pokemon.id}
                types={pokemon.types}
                name={pokemon.name}
                image={pokemon.sprites.other['official-artwork'].front_default}
              />
            </Link>
          ))}
        </ContentGrid>
      </ContentWrapper>
    </Layout>
  );
}

export default HomePage;
