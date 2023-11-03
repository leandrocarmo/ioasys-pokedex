import styled from "styled-components";
import { theme } from '@/styles/themes/theme';

export const RedBar = styled.div`
  width: 100%;
  height: 18px;
  background-color: ${theme.colors.secondaryColor};
  margin-bottom: 50px;
`;

export const ContentSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

`;

export const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;
