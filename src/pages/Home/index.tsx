import { SearchBar } from '@/components/SearchBar';
import Layout from '../../components/Layout';
import { FavoriteButton } from '@/components/FavoriteButton';
import Image from 'next/image';
import { RedBar } from './styles';

function HomePage() {
  return (
    <Layout>
        <RedBar></RedBar>
        <Image src='image/logo.svg' alt='Ioasys Pokedex' width={249} height={32}/>
        <SearchBar />
        <FavoriteButton />
    </Layout>
  );
}

export default HomePage;