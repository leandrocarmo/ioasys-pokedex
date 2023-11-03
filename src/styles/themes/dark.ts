import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export type ThemeType = typeof theme;

const Dark = createGlobalStyle`
  body {
    background-color: ${theme.colors.darkGray} !important;
    font-size: ${theme.fontSize.m};
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: ${theme.fontWeight.regular};
  }
`;

export default Dark;
