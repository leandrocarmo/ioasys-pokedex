import styled from 'styled-components';
import { Color } from '@/styles/colors';
import { FontSize, FontWeight } from '@/styles/typography';

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width:39.375rem;
  margin-right: 20px;

  img {
    position: absolute;
    right: 28px;
    top: 25%;
    width: 20px;
    height: 20px;
    pointer-events: none;
  }

  span {
    color: ${Color.primaryRed};
    position: absolute;
    left: 36px;
    top: -12px;
    background-color: ${Color.white};
    width: 65px;
    text-align: center;
    font-weight: ${FontWeight.medium};
  }
`;

export const SearchInput = styled.input`
  font-size: ${FontSize.m};
  width: 100%;
  padding: 16px 45px;
  border: 1px solid ${Color.primaryRed};
  border-radius: 5px;
  outline: none;
  background-color: transparent;

  &:focus {
    border-color: ${Color.primaryRed};
  }

  ::placeholder {
    color: ${Color.darkGray};
  }
`;
