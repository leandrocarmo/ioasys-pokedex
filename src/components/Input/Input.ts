import styled from 'styled-components';

export const Input = styled.input`
  font-size: ${props => props.theme.fontSize.m};
  width: 100%;
  padding: 16px 45px;
  border: 1px solid ${props => props.theme.color.primaryRed};
  border-radius: 5px;
  outline: none;
  background-color: transparent;

  &:focus {
    border-color: ${props => props.theme.color.primaryRed};
  }

  ::placeholder {
    color: ${props => props.theme.color.darkGray};
  }
`;
