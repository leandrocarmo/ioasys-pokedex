import { ContentWrapper } from '@/styles/global';
import Image from 'next/image';
import { ContentSearch, RedBar } from './styles';
import SearchBar from '@/components/SearchBar/searchBar';
import { FavoriteButton } from '@/components/FavoriteButton';


import React from 'react'

export const Header = () => {
  return (
    <>
      <RedBar />
      <ContentWrapper>
        <Image src='image/logo.svg' alt='Ioasys Pokedex' width={249} height={32}/>
        <ContentSearch>
          <SearchBar />
          <FavoriteButton />
        </ContentSearch>
      </ContentWrapper>
    </>
  )
}
