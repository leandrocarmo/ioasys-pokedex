import React from 'react'
import { ContentWrapper } from '@/styles/global';
import Image from 'next/image';
import { ContentSearch, RedBar } from './styles';
import SearchBar from '@/components/SearchBar/searchBar';
import { FavoriteButton } from '@/components/FavoriteButton';
import Switcher from '../Switcher/switcher';

export const Header = () => {
  return (
    <>
      <RedBar />
      <ContentWrapper>
        <Image src='image/logo.svg' alt='Ioasys Pokedex' width={249} height={32}/>
        <Switcher />
        <ContentSearch>
          <SearchBar />
          <FavoriteButton />
        </ContentSearch>
      </ContentWrapper>
    </>
  )
}
