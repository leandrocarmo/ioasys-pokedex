import React from 'react';
import Layout from '../../components/Layout/layout';
import { ContentWrapper } from '@/styles/global';
import PokemonCard from '@/components/PokemonCard/pokemonCard';
import { ContentGrid } from '@/components/PokemonCard/style';
import { Header } from '@/components/Header/Header';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePaginationLogic } from '@/components/PaginationLogic/paginationLogic';

function HomePage() {
  const { pokemons, hasMore, loadMorePokemons } = usePaginationLogic(20, 10);

  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <InfiniteScroll
          dataLength={pokemons.length}
          next={loadMorePokemons}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
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
        </InfiniteScroll>
      </ContentWrapper>
    </Layout>
  );
}

export default HomePage;
