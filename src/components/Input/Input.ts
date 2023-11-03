import styled from 'styled-components';
import { theme } from '@/styles/themes/theme';

export const Input = styled.input`
  font-size: ${theme.fontSize.m};
  width: 100%;
  padding: 16px 45px;
  border: 1px solid ${theme.colors.secondaryColor};
  border-radius: 5px;
  outline: none;
  background-color: transparent;

  &:focus {
    border-color: ${theme.colors.secondaryColor};
  }

  ::placeholder {
    color: ${theme.colors.mediumGray};
  }
`;
