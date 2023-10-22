import React from 'react';
import { SearchContainer, SearchInput } from './styles';
import Image from 'next/image';

const SearchBar: React.FC = () => {
  return (
    <SearchContainer>
      <div>
        <span>Buscar</span>
        <SearchInput type="text" placeholder="Buscar pokémon" />
        <Image src='assets/icons/SearchIcon.svg' alt='Lupa' width={20} height={20}/>
      </div>
    </SearchContainer>
  );
}

export default SearchBar;
