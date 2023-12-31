import { theme } from '@/styles/themes/theme';
import styled from 'styled-components';

export const ContentGrid = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 1 1 calc(33.3% - 20px);
    margin: 5px;
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
  }

  @media ${theme.device.desktop} {
    > * {
      flex: 1 1 calc(20% - 20px);
      margin: 5px;
    }
  }
`;

export const Card = styled.div<{ pokeColor: string }>`
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-rows: auto 1fr;
  border: 2px solid ${props => props.pokeColor || props.theme.color.darkGray};

  .pokeId {
    width: 100%;
    text-align: end;
    color: ${props => props.pokeColor || props.theme.color.darkGray};
    font-size: ${theme.fontSize.xxs};
    margin-right: 10px;
    margin-top: 5px;
  }

  @media ${theme.device.desktop} {
    width: 150px;
    height: 148px;

    .pokeId{
      margin-top: 10px;
    }
  }

  @media ${theme.device.mobile} {
    width: 104px;
    height: 112px
  }
`;

export const PokemonImage = styled.img`
  height: 70px;
  width: 70px;
  object-fit: cover;

  @media ${theme.device.desktop} {
    height: 80px;
    width: 80px;
    margin-bottom: 10px;
  }
`;

export const PokemonInfo = styled.div<{ pokeColor: string }>`
  height: 26px;
  display: flex;
  width: 100%;
  color: ${theme.colors.white};
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.pokeColor || props.theme.color.darkGray};

  span {
    font-size: ${theme.fontSize.xxs};
  }

  @media ${theme.device.desktop} {
    height: 32px;
  }
`;
