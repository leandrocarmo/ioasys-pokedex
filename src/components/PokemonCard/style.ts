import styled from 'styled-components';

export const ContentGrid = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 1 1 calc(33.3% - 20px);
    margin: 5px;
  }

  @media ${props => props.theme.device.desktop} {
    > * {
      flex: 1 1 calc(20% - 20px);
      margin: 5px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-rows: auto 1fr;
  background-color: ${props => props.theme.color.white};
  border: 1px solid ${props => props.theme.color.black};

  .pokeId {
    width: 100%;
    text-align: end;
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

export const PokemonInfo = styled.div`
  height: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  span {
    font-size: ${props => props.theme.fontSize.xxs};
  }
`;
