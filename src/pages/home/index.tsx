import Layout from '../../components/Layout';
import { FavoriteButton } from '@/components/FavoriteButton';
import Image from 'next/image';
import { ContentSearch, RedBar } from './styles';
import SearchBar from '@/components/SearchBar';
import { ContentWrapper } from '@/styles/global';
import PokemonCard from '@/components/PokemonCard';
import { ContentGrid } from '@/components/PokemonCard/style';

function HomePage() {
  return (
    <Layout>
        <RedBar></RedBar>
        <ContentWrapper>
          <Image src='image/logo.svg' alt='Ioasys Pokedex' width={249} height={32}/>
          <ContentSearch>
            <SearchBar />
            <FavoriteButton />
          </ContentSearch>
          <ContentGrid>
            <PokemonCard />
          </ContentGrid>
        </ContentWrapper>
    </Layout>
  );
}

export default HomePage;