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

  @media ${props => props.theme.device.desktop} {
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
    font-size: ${props => props.theme.fontSize.xxs};
    margin-right: 10px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 150px;
    height: 148px;
  }

  @media ${props => props.theme.device.mobile} {
    width: 104px;
    height: 112px
  }
`;

export const PokemonImage = styled.img`
  height: 70px;
  width: 70px;
  object-fit: cover;
`;

export const PokemonInfo = styled.div<{ pokeColor: string }>`
  height: 26px;
  display: flex;
  width: 100%;
  color: ${props => props.theme.color.white};
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.pokeColor || props.theme.color.darkGray};

  span {
    font-size: ${props => props.theme.fontSize.xxs};
  }
`;
