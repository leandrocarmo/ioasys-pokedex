import { device } from '@/styles/breakpoints';
import { Color } from '@/styles/colors';
import styled from 'styled-components';

export const ContentGrid = styled.div`
    margin-top: 50px;
`;

export const Card = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    background-color: ${Color.white};
    border: 1px solid ${Color.black};
    border-radius: 10px;
    overflow: hidden;

    @media ${device.desktop} {
        width: 150px;
        height: 148px;
    }

    @media ${device.mobile} {
        width: 104px;
        height: 112px
    }
`;

export const PokemonImage = styled.img`
    grid-row: 1;
    height: 85px;
    object-fit: cover;
`;

export const PokemonInfo = styled.div`
    grid-row: 2;
    height:25px;
    text-align: center;
`;
