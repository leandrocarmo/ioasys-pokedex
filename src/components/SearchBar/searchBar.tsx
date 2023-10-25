import React from 'react';
import { SearchContainer } from './styles';
import Image from 'next/image';
import { Input } from '../Input/Input';

const SearchBar: React.FC = () => {
  return (
    <SearchContainer>
      <div>
        <span>Buscar</span>
        <Input />
        <Image src='assets/icons/SearchIcon.svg' alt='Lupa' width={20} height={20}/>
      </div>
    </SearchContainer>
  );
}

export default SearchBar;
